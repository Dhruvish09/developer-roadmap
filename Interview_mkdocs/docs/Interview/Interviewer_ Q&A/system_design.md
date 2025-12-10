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