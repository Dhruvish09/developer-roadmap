# 1) URL Shortener (bit.ly style)

**Goal / Requirements**

* F: create short code for a long URL, redirect quickly.
* NF: very low latency redirect (<50ms), high read throughput, high availability, eventual consistency ok for creation.
* Scale: ~millions of redirects/day.

**ASCII**

```
Client -> CDN / NGINX -> API Gateway -> Shortener Service -> Cache(Redis) -> DB(Postgres/Dynamo)
                                         ↘ Metrics/Logging
```

**Components**

* API (create, lookup)
* ID generator (Base62, incremental with sharding or hash + collision resolution)
* DB (primary store)
* Redis (hot cache)
* Worker for analytics & cleanup

**Data model**

```sql
urls (
  short_code varchar PK,
  long_url text,
  user_id int,
  created_at timestamp,
  expire_at timestamp NULL,
  clicks bigint
)
```

**Data flow**

1. Create: client POST `/shorten` → API validates → generate `short_code`
2. Persist to DB (transaction). Optionally write to cache.
3. Redirect: client hits `/s/{short_code}` → NGINX -> service -> check Redis

   * Cache hit: return redirect (HTTP 301)
   * Cache miss: query DB, populate Redis, redirect
4. Analytics: increment click counters in async worker (batch to DB)

**Scaling**

* Read-heavy: horizontally scale stateless API + Redis cluster + read replicas for DB or use DynamoDB for infinite scale.
* Partition short codes by prefix to scale writes.

**Failures**

* Redis miss OK.
* DB write failure: retry with idempotency (client token) and return 5xx.
* Short-code collisions: detect and regenerate.

**Caching & Consistency**

* TTL on cache; eventual consistency acceptable for analytics.
* Use cache aside pattern.

**Monitoring**

* Latency (P95), cache hit ratio, error rate, create/sec, redirects/sec.

**Python tech**

* FastAPI, Uvicorn, aioredis, SQLAlchemy/asyncpg or boto3 for DynamoDB.
* Hashids/Base62 libs.

**Interview talking points**

* Tradeoffs: fixed-length vs incremental IDs, using Redis vs CDN for redirects, supporting custom aliases, deletion/expiry policies, analytics pipeline.

---

# 2) Rate Limiter (API-level)

**Goal**

* Enforce limits per user/API key (e.g., 100 req/min), protect services.

**ASCII**

```
Client -> API Gateway (Nginx/Envoy) -> RateLimiter (Redis) -> Service
```

**Components**

* API Gateway + middleware
* Rate limiter storage (Redis, ZK less common)
* Algorithms: Token bucket, Leaky bucket, Sliding window log/count

**Data model**

* Redis keys: `rate:{user_id}` storing tokens or timestamped counters (sorted set or counter+TTL)

**Flow**

1. Request arrives; gateway calls rate-limiter check.
2. Use LUA script in Redis to atomically:

   * Check tokens; if available, decrement and allow.
   * Else deny (429).
3. If allowed, forward request.

**Scaling**

* Use Redis Cluster; run limiter as middleware in API gateway for local short-circuit.
* For global limits across regions, use central Redis or approximate via local + periodic sync.

**Failures**

* Redis down: either fail-open (not recommended) or fail-closed; prefer degrade to conservative limit or use local fallback with higher false positives.

**Caching & Consistency**

* Strict atomicity required → use Redis LUA scripts.

**Monitoring**

* Rejections/sec, avg tokens, latency added by limiter.

**Python tech**

* FastAPI middleware, aioredis, implement Lua scripts via `redis-py`.

**Talking points**

* Algorithm choice (token-bucket vs sliding window) and why (smooth bursts vs precise).

---

# 3) Notification System (Email/SMS/Push)

**Goal**

* Deliver notifications reliably and scalably with retries.

**ASCII**

```
Client -> Notification API -> Queue(Kafka/RabbitMQ) -> Worker Pool -> 3rd-party (Twilio, SendGrid)
                                     ↓
                                 DB (status)
```

**Components**

* API to enqueue notifications
* Message broker for decoupling and scaling
* Workers (Celery/async) for sending & retry
* Provider adapters & backoff
* DB for audit/status

**Data model**

```sql
notifications(id, to, type, payload, status, attempts, next_retry_at, created_at)
```

**Flow**

1. Enqueue job (write DB + push to queue).
2. Worker consumes: pick job, call provider API.
3. On success: mark DB success, emit event.
4. On failure: increment attempts, schedule retry (exponential backoff). On max attempts → mark failed.

**Scaling**

* Increase workers, partition queue by provider or tenant.
* Use idempotent send (dedupe via message id).

**Failures**

* Provider 5xx: retry with backoff.
* Provider rate limits: worker respects `Retry-After` header and pushes job to delayed queue.

**Caching**

* Not needed for delivery; cache provider metadata or templates.

**Monitoring**

* Delivery rate, failure rate, avg send latency, queue lag.

**Python tech**

* FastAPI + Celery/RabbitMQ or Faust for Kafka; `httpx` or `aiohttp` for provider calls.

**Talking points**

* Ensure idempotency, MVC of retry policy, and dead-letter queue design.

---

# 4) E-commerce (small Amazon)

**Goal**

* Browse/catalog, add to cart, checkout, orders, inventory consistency.

**ASCII**

```
Client -> API Gateway -> {Search, Catalog, Cart, Order, Payment} 
                    ↘ Event Bus (Kafka) -> Inventory / Fulfillment / Notification
```

**Components**

* Product catalog, search (ElasticSearch), cart (Redis), inventory (Postgres/NoSQL), order service, payment gateway, event bus.

**Schemas (samples)**

* `products(id, sku, name, desc, price, stock)`
* `orders(id, user_id, items[], status, created_at)`

**Flow (checkout)**

1. User initiates checkout.
2. Order Service: create pending order, attempt inventory reservation (atomic or via distributed lock).
3. Payment service: charge user (3rd-party).
4. On success: finalize order → decrement stock, publish `order_placed` event.
5. Workers: fulfillment, shipping, notifications.

**Scaling**

* Use read replicas for product reads, sharded order DB by user_id, Redis for carts.
* Inventory is critical: use optimistic locking (version columns) or a dedicated inventory service with strong consistency.

**Failures**

* Payment success but DB failure: use two-phase commit-ish flow or rely on compensating transactions (refund).
* Inventory overcommit: use reservation layer + periodic reconciliation.

**Caching**

* Product pages cached at CDN/Redis. Cart in Redis with TTL.

**Monitoring**

* Checkout conversion, payment failure rates, inventory mismatch counts, queue lag.

**Python tech**

* FastAPI microservices, SQLAlchemy, Celery/Kafka, ElasticSearch client.

**Talking points**

* Strong vs eventual consistency on inventory, order idempotency, transactional outbox pattern for events.

---

# 5) Logging System (ELK-like)

**Goal**

* Ingest, process, index, and query logs reliably.

**ASCII**

```
App -> FluentBit -> Kafka -> Log Processor -> ElasticSearch -> Kibana
                          ↘ Cold Storage (S3)
```

**Components**

* Agents (Fluentd/FluentBit), message queue (Kafka), processors (parsers/enrichers), indexer (Elasticsearch), long-term storage (S3).

**Flow**

1. Agent collects logs from apps.
2. Sends to Kafka for durability.
3. Consumers parse/enrich and index into ES.
4. Archive raw logs to S3.

**Scaling**

* Kafka partitions, multiple consumer groups, ES cluster with shard strategy.

**Failures**

* Backpressure: Kafka retention protects ingestion; if ES slow, queue backs up; implement circuit breakers & throttling.

**Monitoring**

* Ingestion rate, indexing latency, query latency, storage size.

**Python tech**

* Log collectors (not Python), processing pipelines can be Python workers (confluent-kafka + logstash-like processors).

**Talking points**

* Indexing strategy and TTL, cost optimization (hot/warm/cold storage), schema-less vs structured logs.

---

# 6) Real-time Chat (WhatsApp-like)

**Goal**

* Real-time message delivery, at-least-once or exactly-once semantics for user experience.

**ASCII**

```
Client <--> WebSocket Gateway -> Chat Service -> Message Store (Cassandra) 
                            ↘ Pub/Sub (Redis/Kafka) -> Delivery Workers -> Offline Queue
```

**Components**

* WebSocket gateway, message service, durable message store (Cassandra), pub/sub for routing, delivery workers, push notification service.

**Schema**

* `messages(id, chat_id, sender, content, ts, delivered_to[])`

**Flow**

1. Sender sends message over websocket.
2. Gateway forwards to Chat Service which persist message (append-only).
3. Chat Service publishes to pub/sub topic for recipient(s).
4. Delivery worker pushes to connected clients; if offline, push via mobile push and keep as undelivered.

**Scaling**

* Partition chats by chat_id across nodes; use stateless gateways behind LB.
* Cassandra for high write throughput and predictable latency.

**Failures**

* Gateway disconnects: client reconnect logic with exponential backoff and resume using last seen message ID.
* Message duplication: use sequence numbers for idempotency.

**Consistency**

* Eventual consistency for read receipts; store authoritative in DB for reconciliation.

**Monitoring**

* Message latency, delivery success %, connection count, consumer lag.

**Python tech**

* FastAPI or Sanic for websocket gateway; aioredis or confluent-kafka for pub/sub; use gRPC between services.

**Talking points**

* Choosing between PoD (push vs pull), persistent storage design (Cassandra vs DynamoDB), and end-to-end encryption considerations.

---

# 7) File Storage (Google Drive-like)

**Goal**

* Upload/download large files, support resumable uploads, strong durability.

**ASCII**

```
Client -> Upload API -> Chunker -> Object Store (S3/MinIO) 
                     -> Metadata DB -> CDN for downloads
```

**Components**

* Upload service (handles chunking), object storage, metadata DB, background integrity checks, CDN for read.

**Schema**

* `files(id, owner, metadata, chunk_ids[], size, checksum)`

**Flow**

1. Initiate upload → get upload-id.
2. Client uploads chunks (each chunk PUT to pre-signed S3 URL).
3. On final chunk, Upload service verifies checksums, writes metadata to DB.
4. Download: generate pre-signed URL or serve via CDN.

**Scaling**

* Object storage scales out (S3).
* Metadata DB can be sharded.

**Failures**

* Partial uploads: expire incomplete uploads, cleanup async.
* Corrupt chunk: retry chunk upload; verify checksum.

**Caching**

* CDN for frequently downloaded files.

**Monitoring**

* Upload success rate, storage cost, read throughput.

**Python tech**

* FastAPI for control plane, boto3 for S3 interactions, Celery for cleanup/verification.

**Talking points**

* Choosing chunk size tradeoffs, resumable upload semantics, deduplication, encryption at rest.

---

# 8) Payment System (UPI/Bank-level)

**Goal**

* Secure, ACID-like transactions, idempotent, strong auditing.

**ASCII**

```
Client -> Payment API -> Auth Service -> Ledger DB (Postgres) -> Bank/Network
                                     ↘ Event Bus -> Reconciliation
```

**Components**

* Auth, Payment Gateway, Ledger DB, Settlement subsystem, Fraud detection, Audit logs.

**Schema**

* `transactions(id, from_account, to_account, amount, status, created_at)`

**Flow**

1. Initiate payment: authenticate, validate balance.
2. Create transaction record (pending), attempt debit (reserve funds).
3. Call external bank network (sync/async).
4. On success: mark completed, publish event for settlement.
5. On failure: rollback (release reservation) and notify user.

**Scaling**

* Use sharded ledger DB or logical partitioning; strong consistency needed → Postgres with SERIALIZABLE or two-phase commit patterns for cross-shard.

**Failures**

* Network timeout after debit: implement idempotency, transaction reconciliation, and human ops tools.

**Security**

* TLS, tokenization, HSM for keys, PCI compliance where required.

**Monitoring**

* Failure rates, reconciliation mismatch, fraud signals.

**Python tech**

* FastAPI service layer, SQLAlchemy with Postgres, Celery for async settlement.

**Talking points**

* ACID vs eventual consistency tradeoffs, reconciliations, dispute flows.

---

# 9) Redis-based Cache System (generic)

**Goal**

* Reduce DB load and latency with cache-aside pattern.

**ASCII**

```
Client -> App -> Redis -> DB
```

**Components**

* Redis cluster, app cache logic, fallbacks, TTL policies.

**Flow**

1. Read: check Redis; miss → DB read → populate Redis.
2. Write: write DB then invalidate cache or update cache (write-through or write-around patterns).

**Scaling**

* Redis Cluster with key-based sharding; use consistent hashing for memcached style.

**Failure**

* Redis failover: use Redis Sentinel or managed service.
* Cache stampede: use mutex locks or probabilistic early refresh.

**Monitoring**

* Hit ratio, eviction rate, latency.

**Python tech**

* aioredis, redis-py, use cachelib or custom decorators.

**Talking points**

* Invalidation strategies, cache warming, multi-layer caching.

---

# 10) Authentication (Login / Signup / JWT)

**Goal**

* Secure authentication with stateless tokens and optional revocation.

**ASCII**

```
Client -> Auth Service -> User DB (Postgres) 
                     ↘ Token Store (Redis for blacklist)
```

**Components**

* Signup, login, token issuance (JWT), refresh tokens, logout/blacklist, password reset.

**Schema**

* `users(id, email, password_hash, salt, created_at)`

**Flow**

1. Signup: hash password (bcrypt/scrypt/argon2) + store salted hash.
2. Login: validate credentials → issue JWT (short TTL) + refresh token (longer TTL saved in DB/Redis).
3. Request: API validates JWT signature & claims.
4. Logout: revoke refresh token (delete) and optionally add to JWT blacklist until expiry.

**Scaling**

* Auth service stateless; store refresh tokens in Redis for revocation scalability.

**Failures**

* Token compromise: rotate signing keys and provide key-rotation strategy (kid header).
* Password brute force: rate limit login attempts.

**Monitoring**

* Failed logins, token issuance, blacklist size.

**Python tech**

* FastAPI Auth libs (fastapi-jwt-auth), passlib for hashing, PyJWT/cryptography.

**Talking points**

* Token revocation, refresh token security, biometric/MFA flows.

---

# 11) Task Queue (Celery-like)

**Goal**

* Execute background jobs reliably and at scale.

**ASCII**

```
Client -> API -> Broker(RabbitMQ/Redis/Kafka) -> Worker Pool -> Results Store (DB/Redis)
```

**Components**

* Broker, worker fleet, scheduler, results store, monitoring.

**Flow**

1. API pushes job to broker.
2. Worker consumes, executes task; updates status.
3. For long jobs, use heartbeats and progress reporting.

**Scaling**

* Add workers, partition queues by task type/priority.

**Failures**

* Worker crash: broker redelivers (use ack/nack).
* Idempotency required for replays.

**Monitoring**

* Queue depth, worker count, task durations, failure rates.

**Python tech**

* Celery (RabbitMQ/Redis), Dramatiq, or custom asyncio workers. Use `flower` or Prometheus exporters.

**Talking points**

* Exactly-once vs at-least-once, task ordering, scheduling, rate-limited workers.

---

# 12) Video Streaming Platform (YouTube)

**Goal**

* Upload, transcode, store, and stream with adaptive bitrate.

**ASCII**

```
Uploader -> Transcoder -> Object Store (S3) -> CDN -> Client (HLS/DASH)
                 ↘ Metadata DB -> Search/Recommendations
```

**Components**

* Upload service, transcoder (FFmpeg workers), HLS/DASH packager, CDN, manifest generation.

**Flow**

1. Upload video → store raw.
2. Trigger transcoding pipeline to generate multi-resolution renditions and HLS segments + manifests.
3. Store outputs in S3, push to CDN.
4. Client requests manifest and segments from CDN; ABR switches quality.

**Scaling**

* Transcoding autoscale; chunked uploads for parallelism.

**Failures**

* Transcoder failure: retry job or mark for manual review; use idempotent job IDs.

**Monitoring**

* Transcode success rate, CDN cache hit, segment latency.

**Python tech**

* Control plane in FastAPI; Celery/Kubernetes jobs for transcoding; use boto3.

**Talking points**

* Offline vs live streaming differences, DRM support, storage cost and retention policies.

---

# 13) Ride-Hailing (Uber-like)

**Goal**

* Real-time driver matching, low-latency geolocation updates.

**ASCII**

```
Client -> API Gateway -> Matching Service -> Drivers (via WebSocket/PubSub)
                 ↘ Location Service -> Spatial DB
```

**Components**

* Location ingestion, matching engine, route service, pricing, billing.

**Data model**

* `drivers(id, location, status, rating)`
* `rides(id, rider, driver, status, route)`

**Flow**

1. Driver publishes location every 1–5s.
2. Rider requests ride: matching service queries nearby drivers via spatial index (geohash/R-tree).
3. Assign driver, push notifications; handle cancellations and reassign.

**Scaling**

* Partition city by regions; run matching per region.
* Use in-memory geospatial indices (Redis GEO or PostGIS).

**Failures**

* Stale location: heartbeat and TTL.
* Split brain: ensure single assignment via distributed locks.

**Monitoring**

* Match time, acceptance rate, ETA accuracy.

**Python tech**

* FastAPI, aioredis GEO, PostGIS for persistent geodata.

**Talking points**

* Real-time constraints, region sharding, surge pricing algorithms.

---

# 14) Feed System (Twitter/Instagram)

**Goal**

* Provide personalized feeds with low-latency reads.

**ASCII**

```
User -> Feed API -> (Fan-out on write OR Fan-out on read) -> Storage (Redis / Cassandra) -> Client
```

**Options**

* Fan-out-on-write: when a user posts, push to followers' feeds (fast reads, expensive writes).
* Fan-out-on-read: compute feed at read time (cheap writes, expensive reads).

**Components**

* Timeline service, fan-out worker, storage for timelines, ranking service.

**Data model**

* `posts(post_id, author, content, ts)`
* `user_timeline(user_id) -> sorted list`

**Flow (fan-out-on-write)**

1. Post -> persist -> fetch followers -> push post_id to each follower's timeline (Redis list).
2. Read -> serve from timeline (cached), apply ranking.

**Scaling**

* For celebrities with millions of followers use hybrid approach: push to some, compute for others on read (special casing).

**Failures**

* Partial push failure: use retry and reconciliation batch jobs.

**Monitoring**

* Feed freshness, fan-out throughput, read latency.

**Python tech**

* FastAPI, Redis for timelines, Celery for fan-out.

**Talking points**

* Tradeoffs between read vs write amplification; ranking model integration.

---

# 15) Search System

**Goal**

* Index documents and serve queries with relevance & speed.

**ASCII**

```
Crawler -> Indexer -> Search Engine (Elasticsearch) -> API -> Client
```

**Components**

* Crawler, parser, indexer, search cluster, ranking & scoring.

**Data model**

* Inverted index (handled by ES).

**Flow**

1. Crawl documents → extract text & metadata.
2. Index into ES with analyzers (tokenization, stemming).
3. Query: parse user query, run multi-field matching, apply ranking & filters.

**Scaling**

* ES shard strategy by index/time/tenant; horizontal scaling for indexing & query.

**Failures**

* Index corruption: replicas & snapshots.

**Monitoring**

* Query latency, index refresh time, cluster health.

**Python tech**

* Scrapy for crawling, `elasticsearch-py` for indexing.

**Talking points**

* Relevance tuning, stop words, synonyms, and near real-time indexing tradeoffs.

---

# 16) Online Code Runner (LeetCode)

**Goal**

* Execute user code in sandboxed containers, return test results.

**ASCII**

```
Client -> API -> Judge Queue -> Sandbox Workers (Docker) -> Results Store
```

**Components**

* Submission API, scheduler, sandbox (container/VM), security (resource limits), results DB.

**Flow**

1. Submit code → create job in queue with testcases.
2. Scheduler assigns job to sandbox; container runs with time/mem limits.
3. Capture stdout, stderr, exit code; compare against expected, return feedback.

**Scaling**

* Autoscale sandboxes; warm pool of containers for low latency.

**Failures**

* Infinite loop/timeouts: enforce time limits and kill container.
* Malicious code: strict seccomp, network disabled.

**Monitoring**

* Job throughput, avg run time, error rates.

**Python tech**

* FastAPI for submissions, use Docker SDK or Firecracker for light sandboxes.

**Talking points**

* Security and multi-tenant isolation, deterministic execution for reproducible tests.

---

# 17) Monitoring System (Prometheus/Grafana)

**Goal**

* Collect metrics & visualize them for alerting.

**ASCII**

```
App -> /metrics -> Prometheus (scrape) -> Long-term storage -> Grafana
```

**Components**

* Instrumentation, Prometheus server, alertmanager, Grafana, remote-write storage.

**Flow**

1. Apps expose metrics endpoints.
2. Prometheus scrapes at intervals, stores time-series.
3. Alerts configured in Prometheus/Alertmanager.

**Scaling**

* Federated Prometheus or remote-write to Cortex/Thanos for scale.

**Failures**

* Scrape overload: tune scrape intervals & targets.

**Monitoring**

* Scrape success/latency, alert error rates.

**Python tech**

* `prometheus_client` for instrumentation.

**Talking points**

* Retention vs cost, high cardinality metrics concerns.

---

# 18) Pub/Sub Messaging System

**Goal**

* Durable pub/sub with at-least-once delivery, multiple subscribers.

**ASCII**

```
Publisher -> Broker (Kafka) -> Topic -> Consumer Groups
```

**Components**

* Brokers (Kafka), producers, consumer groups, retention & compaction policies.

**Flow**

1. Producer publishes to topic; broker persists to partition log.
2. Consumers poll by offset; commit offsets.
3. Retries handled by consumer seeking to earlier offset.

**Scaling**

* Add brokers & partitions.

**Failures**

* Broker down -> replication; need ISR for durability.

**Monitoring**

* Consumer lag, broker throughput, partition leader availability.

**Python tech**

* `confluent-kafka` or `kafka-python`.

**Talking points**

* Exactly-once semantics using Kafka transactions, vs at-least-once with idempotent consumers.

---

# 19) Order Tracking (Food Delivery)

**Goal**

* End-to-end flow from order placement to delivery with live tracking.

**ASCII**

```
Client -> Order Service -> Restaurant -> Rider Assignment -> Rider App (GPS) -> Tracking Service -> Client
```

**Components**

* Order service, dispatch (assign rider), route & ETA service, tracking service, notifications.

**Flow**

1. Order placed -> restaurant accepted -> dispatch finds nearest rider -> assign and notify.
2. Rider updates location -> tracking service updates order status & ETA.
3. Delivery completes -> mark delivered and trigger rating.

**Scaling**

* Partition by region, scale dispatch per city.

**Failures**

* Rider cancels: fallback to reassign with retry & compensation (delay notice to user).

**Caching**

* Use Redis for current order states.

**Monitoring**

* Delivery time, cancellation rate, assignment latency.

**Python tech**

* FastAPI services, Redis, Postgres, geospatial libs.

**Talking points**

* SLA guarantees, rider incentive algorithms, fallback strategies.

---

# 20) CI/CD Pipeline

**Goal**

* Automate build, test, and deploy on code changes.

**ASCII**

```
Git Push -> CI Server -> Build -> Test -> Artifact Store -> CD -> Deploy to Env
```

**Components**

* CI runner, artifact repo, test runners, deployment pipelines, rollback mechanisms.

**Flow**

1. Commit triggers pipeline.
2. Pipeline runs unit/integration tests, builds Docker image, pushes to registry.
3. CD triggers deployment to staging, runs smoke tests, then deploy to prod (canary/blue-green).

**Scaling**

* Fleet of runners; isolated containers for concurrent builds.

**Failures**

* Test flakiness: quarantine flaky tests, re-run policies.

**Monitoring**

* Build success rate, deployment time, rollback occurrences.

**Python tech**

* GitHub Actions, GitLab CI, or self-hosted runner with Dockerized steps.

**Talking points**

* Canary vs blue-green deployments, artifact immutability, secret management.

---

# 21) Recommendation System (Netflix-like)

**Goal**

* Deliver personalized recommendations based on behavior.

**ASCII**

```
Event Stream -> Feature Store -> Model Training -> Ranking Service -> API -> Client
```

**Components**

* Event ingestion, offline model training, online feature store, ranking API.

**Flow**

1. Collect user events (views, ratings).
2. Offline: train collaborative filtering / matrix factorization / deep models.
3. Online: compute candidate set (retrieval) and rank with model & business rules.
4. Serve personalized list via API.

**Scaling**

* Use feature caches, precompute top-k per user for fast-read.

**Failures**

* Model serving outage: fallback to popularity-based recommendations.

**Monitoring**

* CTR of recommendations, model drift, latency.

**Python tech**

* PySpark/Beam for offline, TensorFlow/PyTorch for models, FastAPI for serving with caching.

**Talking points**

* Cold start, diversity vs relevance tradeoff, A/B testing of models.

---

# 22) Multi-tenant SaaS

**Goal**

* Isolate tenants while sharing infrastructure.

**ASCII**

```
Client -> Auth -> API -> Tenant Router -> Services -> DB (shared or per-tenant)
```

**Components**

* Tenant router, per-tenant configuration, storage isolation choice (shared schema, separate schema, separate DB).

**Data model choices**

* Shared DB with `tenant_id` column (cheap), or separate DB per tenant (strong isolation).

**Flow**

1. On request, identify tenant via token/hostname.
2. Apply tenant-specific features & rate-limits.

**Scaling**

* Move heavy tenants to separate DBs; pool resources.

**Failures**

* Noisy neighbor: monitor resource usage, enforce quotas, circuit breakers.

**Monitoring**

* Per-tenant latency, CPU/memory usage.

**Python tech**

* FastAPI middleware for tenant resolution, SQLAlchemy multi-bind.

**Talking points**

* Tradeoffs of isolation levels, migration strategies between models.

---

# 23) API Gateway

**Goal**

* Single entrypoint for auth, routing, rate-limit, metrics, and aggregation.

**ASCII**

```
Client -> API Gateway (Auth, RateLimit, Routing, Logging) -> Microservices
```

**Components**

* Auth, routing, throttling, caching, circuit-breaker, analytics.

**Flow**

1. Gateway authenticates request, enforces policies, routes to backend service.
2. Aggregation: coalesce multiple backend calls if needed.

**Scaling**

* Stateless gateways behind LB; use service mesh for deeper routing.

**Failures**

* Gateway down -> global outage: use multiple gateways in different AZs & health checks.

**Monitoring**

* Latency added by gateway, error percentage, throughput.

**Python tech**

* Use Envoy/NGINX for production; Python for custom gateway if needed (FastAPI + uvicorn).

**Talking points**

* Implementing cross-cutting concerns and where to place them (gateway vs service).

---

# 24) Real-time Dashboard (Stock Dashboard)

**Goal**

* Stream high-frequency updates to many clients in real-time.

**ASCII**

```
Market Feed -> Ingest -> Stream Processor (Kafka/Redis Streams) -> WebSocket Server -> Clients
```

**Components**

* Ingest, processing (aggregate/minute), pub/sub, websocket servers, throttling.

**Flow**

1. Ingest live ticks, push to stream platform.
2. Process and emit updates to subscribers via WebSockets.
3. Clients subscribe to subset of symbols.

**Scaling**

* Partition by symbol; scalable WebSocket gateways.

**Failures**

* Data spikes: backpressure and aggregation to reduce bandwidth.

**Monitoring**

* Update latency, message loss, connection counts.

**Python tech**

* FastAPI with websockets, aiokafka for stream consumption.

**Talking points**

* How to handle huge fanout, rate limiting per connection, applying compression.

---

# 25) Booking System (Movie Tickets)

**Goal**

* Seats selection with locking and final booking.

**ASCII**

```
Client -> SeatService -> LockService (Redis) -> Payment -> Confirm -> Persist
```

**Components**

* Seat inventory, lock service, payment, order finalizer.

**Schema**

* `seats(show_id, seat_no, status, lock_owner, lock_expiry)`

**Flow**

1. User opens seat map; seats read from DB (cached).
2. On select, lock seats in Redis with short TTL (60s).
3. User pays; on payment success, persist seat status to DB (atomic) and release lock.
4. If TTL expires, lock auto-releases.

**Scaling**

* Partition shows/theaters; locks per show.

**Failures**

* Payment timeouts: release locks to avoid deadlock.
* Double booking: transactional write with `WHERE status='available'` and rows affected check.

**Monitoring**

* Lock contention, booking success rate, seat race conditions.

**Python tech**

* FastAPI, Redis for locks, Postgres with transactions.

**Talking points**

* Locking strategies, optimistic vs pessimistic, handling high concurrency for popular shows.

---