## 1. API is taking 5 seconds. What will you check?

1️⃣ **Database queries**

* Check slow queries
* Add proper **indexes**
* Avoid `SELECT *`

2️⃣ **Caching**

* Use **Redis** for repeated data

3️⃣ **Payload size**

* Reduce large request/response data
* Use pagination

4️⃣ **Async / Background tasks**

* Move heavy work to **Celery / async**

5️⃣ **External calls**

* Check slow third-party APIs

---

## 2. In production you see database load increasing. What will you check first?


1️⃣ **Long-running / slow queries**

* Identify queries taking most time

2️⃣ **Missing indexes**

* Check frequent `WHERE`, `JOIN`, `ORDER BY` columns

3️⃣ **Too many joins**

* Optimize or denormalize if needed

4️⃣ **High API call volume**

* Same queries executed repeatedly → add caching

5️⃣ **Database analysis tools**

* Use `EXPLAIN / EXPLAIN ANALYZE`
* Use `pg_stat_statements`

---

## 3. Suppose you get **500 Internal Server Error**. How will you debug?

1️⃣ **Check logs first**

* Application logs
* Server logs
* Stack trace / error message

2️⃣ **Reproduce the issue**

* Try same request in **local or staging**

3️⃣ **Validate inputs**

* Check request data, headers, payload

4️⃣ **Exception handling**

* Add proper `try/except`
* Log the exact error

5️⃣ **Enable debug logging**

* Temporarily increase log level (not in prod response)

---

## 4. How do you handle **millions of records** in Python?

1️⃣ **Use generators**

* Avoid loading everything into memory
* Process records one by one

2️⃣ **Batch processing**

* Read and process data in chunks
* Useful for DB and file processing

3️⃣ **Streaming**

* Stream data from files, APIs, or DB cursors
* No full data load in RAM

4️⃣ **Parallel processing**

* Use **multiprocessing** for CPU-heavy tasks
* Use async for I/O-bound tasks

4️⃣ **Pagination**

* create pagination for show the records
---

## 5. Suppose your **API is failing under high load**. What steps will you take?

1️⃣ **Increase workers**

* Scale app processes (Gunicorn / Uvicorn workers)

2️⃣ **Horizontal scaling**

* Add more instances behind a **load balancer**

3️⃣ **Add caching (Redis)**

* Cache frequent API responses and DB queries

4️⃣ **Use async / background tasks**

* Move heavy work to **Celery / queues**

5️⃣ **Optimize database**

* Indexing, query optimization, read replicas

6️⃣ **Use queues for heavy tasks**

* Prevent request blocking

---

## 6. How do you deploy a Python project in production?

1️⃣ **Docker container**

* Package app + dependencies for consistent environment

2️⃣ **Web server + app server**

* **Nginx** as reverse proxy
* **Gunicorn/Uvicorn** to run Python app

3️⃣ **Environment variables**

* Store secrets, API keys, config outside code

4️⃣ **CI/CD pipeline**

* Automate build, test, and deploy using GitHub Actions / Jenkins

5️⃣ **Logging & Monitoring**

* Use logs (ELK, Sentry) and metrics (Prometheus, Grafana)

---

## 7. What major challenges did you solve recently?

```
A key API used to take 2–3 seconds.  
I optimized by:
• Adding select_related / prefetch_related  
• Redis caching  
• DB indexing on frequently queried columns  
• Moving heavy logic to Celery tasks  
API time improved from 2.8s → 180ms.

```

## 8. How do you handle failures in microservices?

```
Retry  
Circuit breaker  
Fallback  
Message queues  
```

## 9. What will you do if DB CPU utilization is very high?
```
Check long-running queries  
Add indexes  
Enable slow query log  
Sharding / read replica  
```

## 10. How do you expose a large CSV file via API?

Stream response  
Do not load entire file into memory  

## 11. How do you handle sudden traffic spiking 10x?

1️⃣ **Horizontal Scaling**

* Add more app servers behind a **load balancer** to distribute traffic

2️⃣ **Increase Workers / Threads**

* Scale Gunicorn/Uvicorn workers or async workers to handle more concurrent requests

3️⃣ **Caching**

* Use **Redis / CDN** to serve frequently requested data without hitting the database

4️⃣ **Queue Heavy Tasks**

* Move non-critical or CPU-intensive tasks to **Celery / message queues**

5️⃣ **Database Optimization**

* Use **read replicas**, indexing, and optimized queries to reduce DB load

6️⃣ **Rate Limiting / Throttling**

* Prevent abuse and protect the system from being overwhelmed

7️⃣ **Monitoring & Auto-scaling**

* Use monitoring tools (Prometheus/Grafana) and **auto-scaling policies** in cloud environments

---

🎯 Short Interview Answer (15 sec)

> I handle sudden traffic spikes by scaling horizontally with load balancers, adding workers, caching frequently requested data, moving heavy tasks to queues, optimizing the database, and implementing rate limiting. Monitoring and auto-scaling ensure system stability under high load.

---

## 12. How do you safely deploy a backend application?

1️⃣ **Use version control & CI/CD**

* Automated build, test, and deployment pipelines
* Run unit and integration tests before deploy

2️⃣ **Environment separation**

* Separate **dev / staging / production** environments
* Deploy to staging first

3️⃣ **Containerization**

* Use **Docker** for consistent and repeatable builds

4️⃣ **Zero-downtime deployment**

* Use **blue-green** or **rolling deployments**
* Ensure health checks before routing traffic

5️⃣ **Environment variables & secrets**

* Store secrets securely (env vars, secret manager)

6️⃣ **Database migrations**

* Apply migrations carefully and backward-compatible
* Take backups before changes

7️⃣ **Monitoring & rollback**

* Monitor logs, metrics, and errors after deploy
* Roll back quickly if issues occur

---

### 🎯 Short Interview Answer (10–15 sec)

> I deploy backend applications safely using CI/CD pipelines, Docker, separate environments, zero-downtime deployment strategies, secure environment variables, careful database migrations, and continuous monitoring with quick rollback support.

---

## 13. What will you check if a memory leak happens in Python?


1️⃣ **Long-lived objects**

* Check for objects that **never get garbage collected**
* Example: global lists, caches, or class-level references

2️⃣ **Circular references**

* Objects referencing each other preventing GC
* Python usually handles with `gc` module, but some custom objects may leak

3️⃣ **Large data structures**

* Lists, dicts, or DataFrames growing continuously

4️⃣ **External resources**

* Open files, sockets, or database connections not closed properly

5️⃣ **Profiling tools**

* Use **`tracemalloc`** or **`memory_profiler`** to identify memory usage
* Example:

```python
import tracemalloc

tracemalloc.start()
# Run your code
print(tracemalloc.get_traced_memory())
tracemalloc.stop()
```

6️⃣ **Third-party libraries**

* Ensure they are not **retaining references** or leaking memory

---

## 14. How to migrate from Monolithic to Microservices?

1️⃣ **Analyze & Identify Boundaries**

* Identify **modules or domains** that can be independent services
* Example: User Management, Payment, Notifications

2️⃣ **Define APIs**

* Each microservice exposes **well-defined APIs**
* Use REST or gRPC for communication

3️⃣ **Database Strategy**

* Decide between **shared DB** initially or **database per service**
* Gradually move to **decoupled databases**

4️⃣ **Implement Incrementally**

* Start with one module → convert to microservice
* Keep the monolith running during migration

5️⃣ **Communication & Messaging**

* Use **message brokers** like RabbitMQ, Kafka, or Redis Pub/Sub
* For async or event-driven communication

6️⃣ **Service Discovery & Load Balancing**

* Use tools like **Kubernetes, Consul, or Nginx**
* Enables services to find each other dynamically

7️⃣ **Monitoring & Logging**

* Implement **centralized logging** and metrics for all microservices
* Use ELK, Prometheus, Grafana

8️⃣ **CI/CD & Deployment**

* Deploy microservices independently using **Docker / Kubernetes / CI pipelines**

---

## 15. Which logs do you keep in production?

1️⃣ **Application Logs**

* Info, warnings, errors from your app
* Example: API request logs, exceptions, and stack traces

2️⃣ **Access Logs**

* Track who accessed what and when
* Useful for security and auditing

3️⃣ **Database Logs**

* Slow queries, connection issues, and errors

4️⃣ **Error / Exception Logs**

* Capture **uncaught exceptions** and stack traces for debugging

5️⃣ **Performance / Metrics Logs**

* Track latency, request count, memory/CPU usage

6️⃣ **Security Logs**

* Authentication failures, permission issues, suspicious activity

7️⃣ **Audit / Business Logs**

* Important business events (e.g., user created, payment processed)

---

## 16. How do you secure sensitive data?

1️⃣ **Encryption**

* **At rest:** Encrypt databases or files (AES, TDE)
* **In transit:** Use **TLS/HTTPS** for network communication

2️⃣ **Hashing (for passwords)**

* Use **strong, salted hashes** like **bcrypt, Argon2**
* Never store plain-text passwords

3️⃣ **Environment Variables / Secret Management**

* Store API keys, DB credentials securely
* Use **AWS Secrets Manager, Vault, or .env files**

4️⃣ **Access Control / RBAC**

* Restrict data access using **roles and permissions**
* Principle of **least privilege**

5️⃣ **Audit and Logging**

* Log access attempts without exposing sensitive data

6️⃣ **Data Masking / Tokenization**

* Mask sensitive fields in logs or responses
* Tokenize sensitive identifiers when needed

7️⃣ **Regular Security Practices**

* Keep dependencies updated, apply patches, and validate inputs

---

## 17. How do you recover from a server crash?

1️⃣ **Monitor & Detect**

* Use monitoring tools (Prometheus, Grafana, ELK) to detect crashes quickly

2️⃣ **Automatic Restart / Failover**

* Use process managers like **systemd, Supervisor**, or container orchestration (**Kubernetes, Docker Swarm**) to auto-restart services
* Use **load balancer** to redirect traffic to healthy instances

3️⃣ **Check Logs & Root Cause**

* Analyze **server logs, application logs, and error traces** to identify cause

4️⃣ **Database & Data Recovery**

* Ensure **database backups** are available
* Restore from **replicas or snapshots** if needed

5️⃣ **Deploy Hotfix or Rollback**

* Fix the issue and **redeploy**
* If necessary, **rollback** to the last stable version

6️⃣ **Prevent Future Crashes**

* Implement **alerts, auto-scaling, redundancy, and monitoring**
* Conduct **post-mortem analysis**

---

## 18. How will you preload data to reduce API calls?

1️⃣ **Cache Frequently Used Data**

* Use **Redis / Memcached** to store commonly accessed data
* Avoid repeated DB/API calls for the same data

2️⃣ **Eager Loading / Preloading in ORM**

* In Django: use `select_related` and `prefetch_related`
* Fetch related objects in **one query** instead of multiple

3️⃣ **Bulk Fetch / Batch Requests**

* Fetch data in **bulk** before serving API requests
* Example: get all user profiles for a page in **one query**

4️⃣ **Background Preloading**

* Use **Celery / scheduled tasks** to preload data into cache periodically

5️⃣ **Front-End Preloading / CDN**

* Serve static or semi-static data via **CDN** or prefetch in the frontend

---