# 🧠 **System Design – Core Knowledge Map**

---

## ✅ 1. **Core Concepts**

| Concept                          | Description                                                                |
| -------------------------------- | -------------------------------------------------------------------------- |
| **Client-Server Model**          | Communication model between clients and centralized servers                |
| **REST vs. RPC vs. GraphQL**     | API communication styles and trade-offs                                    |
| **Microservices vs. Monoliths**  | Architecture patterns and scalability implications                         |
| **Sync vs. Async Communication** | Blocking vs. non-blocking data flows                                       |
| **Stateless vs. Stateful**       | Session management and implications on scaling                             |
| **Service Discovery**            | Dynamic detection of service locations (e.g., Consul, Eureka)              |
| **Load Balancing**               | Distributes traffic across services (e.g., Round-robin, Least Connections) |

---

## ✅ 2. **Scalability**

| Concept                             | Description                                                |
| ----------------------------------- | ---------------------------------------------------------- |
| **Horizontal vs. Vertical Scaling** | Scaling out vs. scaling up                                 |
| **Load Balancers**                  | Tools like **NGINX**, **HAProxy** for traffic distribution |
| **Sticky Sessions**                 | Maintain session affinity with specific servers            |
| **Sharding & Partitioning**         | Split data across databases/servers                        |
| **CDNs**                            | Cache static assets near the user for faster access        |

---

## ✅ 3. **Data Management**

| Concept                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| **SQL vs. NoSQL**                 | Relational (MySQL/PostgreSQL) vs. Document/Key-Value (MongoDB, DynamoDB) |
| **CAP Theorem**                   | Trade-off between Consistency, Availability, and Partition Tolerance     |
| **Replication**                   | Copying data across nodes for fault tolerance                            |
| **Eventual Consistency**          | Relaxed consistency model in distributed systems                         |
| **Indexing & Query Optimization** | Improve DB performance through optimized indexing                        |
| **Caching Strategies**            | Read-through, Write-through, Write-back strategies                       |

---

## ✅ 4. **Caching**

| Concept                | Description                         |
| ---------------------- | ----------------------------------- |
| **Caching Tools**      | **Redis**, **Memcached**            |
| **Cache Invalidation** | Strategies to keep cache fresh      |
| **Eviction Policies**  | **TTL**, **LFU**, **LRU**, **FIFO** |
| **CDN Edge Caching**   | Cache content at the network edge   |

---

## ✅ 5. **Message Queues & Async Processing**

| Concept                      | Description                                             |
| ---------------------------- | ------------------------------------------------------- |
| **Message Brokers**          | **RabbitMQ**, **Kafka**, **AWS SQS**                    |
| **Pub/Sub Pattern**          | Publisher-subscriber model for events                   |
| **Task Queues**              | Tools like **Celery**, **Dramatiq** for background jobs |
| **Dead Letter Queues (DLQ)** | Handle failed or undelivered messages                   |

---

## ✅ 6. **High Availability & Fault Tolerance**

| Concept                  | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| **Redundancy**           | Multiple instances to eliminate single points of failure |
| **Failover Mechanisms**  | Auto-switch to backup services                           |
| **Health Checks**        | Monitor service uptime                                   |
| **Auto Healing**         | Restart failed services automatically                    |
| **Graceful Degradation** | Maintain partial functionality on failure                |

---

## ✅ 7. **System Performance & Optimization**

| Concept                          | Description                                                    |
| -------------------------------- | -------------------------------------------------------------- |
| **Rate Limiting / Throttling**   | Control API usage per user/client                              |
| **Bulkhead Pattern**             | Isolate failures in a subset of the system                     |
| **Backpressure Handling**        | Prevent overload by signaling producers                        |
| **API Profiling / Benchmarking** | Measure performance using tools like Postman, Apache Benchmark |

---

## ✅ 8. **Security**

| Concept                | Description                                   |
| ---------------------- | --------------------------------------------- |
| **Authentication**     | OAuth2, JWT, API Keys                         |
| **Authorization**      | RBAC, ABAC models                             |
| **Transport Security** | HTTPS, TLS                                    |
| **Common Threats**     | SQL Injection, CSRF, XSS                      |
| **DDoS Protection**    | Rate limiting, Web Application Firewall (WAF) |
| **Encryption**         | Data encryption at rest & in transit          |

---

## ✅ 9. **API Design & Gateways**

| Concept                  | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| **API Specs**            | **OpenAPI / Swagger**                                    |
| **API Versioning**       | URI-based or Header-based version control                |
| **API Gateway**          | **Kong**, **AWS API Gateway** for routing and protection |
| **Rate Limiting & Auth** | Centralized control at gateway level                     |
| **Circuit Breakers**     | Prevent cascading failures (e.g., Netflix Hystrix)       |

---

## ✅ 10. **Observability**

| Concept        | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| **Monitoring** | **Prometheus**, **Grafana**, **CloudWatch**                         |
| **Logging**    | **ELK Stack**, **Loki**                                             |
| **Tracing**    | **Jaeger**, **Zipkin**, **OpenTelemetry**                           |
| **Alerting**   | On-call alerts with PagerDuty, Opsgenie, or Prometheus AlertManager |

---

## ✅ 11. **Design Patterns & Principles**

| Concept                       | Description                              |
| ----------------------------- | ---------------------------------------- |
| **12-Factor App**             | Modern web app development principles    |
| **Repository Pattern**        | Abstract DB access                       |
| **Dependency Injection**      | Decouple component dependencies          |
| **Classic Patterns**          | Singleton, Factory, Adapter, etc.        |
| **Event-driven Architecture** | Reactive systems powered by events       |
| **CQRS**                      | Command Query Responsibility Segregation |
| **Saga Pattern**              | Handle distributed transactions reliably |

---

## ✅ 12. **Distributed Systems Concepts**

| Concept                  | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| **Consensus Algorithms** | Raft, Paxos for leader election                              |
| **Leader Election**      | Ensures coordination in clusters                             |
| **Distributed Locks**    | **Redis**, **ZooKeeper** for critical section control        |
| **Quorum**               | Minimum required nodes for consistency                       |
| **Logical Clocks**       | **Vector Clocks**, **Lamport Timestamps** for event ordering |

---

## ✅ 13. **CI/CD & Deployment**

| Concept                   | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| **Docker & Compose**      | Containerize and manage services                         |
| **Kubernetes**            | Orchestrate and scale containers                         |
| **Helm**                  | K8s package manager                                      |
| **CI/CD Tools**           | GitHub Actions, GitLab CI, Jenkins                       |
| **Deployment Strategies** | Blue-Green, Canary Deployments                           |
| **IaC**                   | **Terraform**, **CloudFormation** for reproducible infra |

---

## ✅ 14. **Cloud Services Knowledge**

| Concept               | Description                                     |
| --------------------- | ----------------------------------------------- |
| **Cloud Platforms**   | **AWS**, **GCP**, **Azure**                     |
| **Core Services**     | EC2, S3, RDS, Lambda, API Gateway, SQS, SNS     |
| **Networking**        | VPC, Subnetting, Security Groups                |
| **Serverless Design** | Pay-per-execution via Lambda/Firebase Functions |

---