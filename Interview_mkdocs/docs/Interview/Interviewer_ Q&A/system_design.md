## 1. How a Rate Limiter Works (Simple Explanation)

Step 1: Decide the Limit

Define:

* Number of requests → e.g., **100 requests**
* Time window → e.g., **per 1 minute**

---

Step 2: Identify the Client

Use a unique identifier:

* IP address
* User ID
* API key

Example keys:

```
user:123
ip:192.168.1.1
```

---

Step 3: Store Request Count

Use fast storage:

| Storage type | Use case                     |
| ------------ | ---------------------------- |
| In-memory    | Single server only           |
| Redis ✅      | Best for distributed systems |

Redis structure:

```
key   = user:123
value = request_count
TTL   = time window
```

---

Step 4: Increment Per Request

On every request:

1. Increase the counter
2. Check if it exceeds the defined limit

If it exceeds:
➡️ Return **HTTP 429 – Too Many Requests**

---

Step 5: Auto Reset

Redis uses **TTL (Time-To-Live)** to automatically delete the key after the time window, so the counter resets automatically.

---

✅ Perfect Interview Answer for Rate Limiter

> I implement rate limiting by defining a limit such as 100 requests per minute, identifying users by IP or user ID, storing counters in Redis, and incrementing them per request. If the limit is exceeded, I return HTTP 429. Redis TTL automatically resets the counter after the time window.

---

## 2. How do you scale a Python backend system?

1. **Horizontal scaling with load balancer**
2. **Caching (Redis)**
3. **Queues (Celery / RabbitMQ)**
4. **Database scaling (read/write replicas)**
5. **Containerization + Kubernetes**
6. **Pagination**

---

**1. Horizontal Scaling With Load Balancer**

Add multiple backend servers and put a load balancer ina front.
Distributes traffic → handles more users without overloading one server.

---

**2. Use Caching (Redis)**

Cache frequently requested API data or DB results.
Reduces database load → improves speed → handles more traffic.

---

**3. Use Queues (Celery / RabbitMQ)**

Move heavy or long tasks (emails, reports, AI tasks) to background workers.
Main API server stays fast and free to handle user requests.

---

**4. Split Database → Read/Write Replicas**

One DB for writes, multiple DBs for reads.
Helps scale high read traffic easily.

---

**5. Use Docker + Kubernetes**

Run your app in containers.
Kubernetes auto-scales pods based on CPU/memory → handles traffic spikes automatically.

---

**6. Use Pagination**

Never return huge datasets in one API call.
Less data → less memory → faster API → better scalability.

---


## 3. Explain your project architecture.

Client → API Gateway → Django/FastAPI → Service Layer → Repository Layer → MySQL/Mongo
Caching Layer: Redis  
Async Tasks: Celery + Redis  
Deployment: Docker → Nginx → Gunicorn/Uvicorn


What major challenges did you solve recently?