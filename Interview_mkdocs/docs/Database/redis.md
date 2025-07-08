# 🔁 Flow 1: Redis Basics — What, Why & Where?

**Goal:** Understand what Redis is and why it's used.

# 🧠 What is Redis?

* Full form: **Remote Dictionary Server**
* It’s a **key-value store**, but more powerful than simple caching.
* Data is stored in **RAM (memory)** → extremely fast!

### 💥 Why use Redis?

* Super fast for reads/writes (in microseconds!)
* Great for:

  * Caching
  * Session storage
  * Queues (pub/sub)
  * Leaderboards
  * Analytics

### 🔧 Where is Redis used?

* In backend servers, APIs, real-time apps, microservices, and IoT systems.

---

## 💾 Flow 2: Redis Data Types — What Can It Store?

**Goal:** Learn how Redis is more than just key-value strings.

### 🧱 Data Types Supported:

| Type           | Example Use Case                     |
| -------------- | ------------------------------------ |
| **String**     | `user:1 → "John"`                    |
| **List**       | Task queue → `["task1", "task2"]`    |
| **Set**        | Unique tags → `{"a", "b"}`           |
| **Hash**       | User profile → `{name:John, age:30}` |
| **Sorted Set** | Leaderboard scores                   |
| **Stream**     | Real-time event logs                 |
| **Geo**        | Store location coordinates           |

---

## 🧩 Flow 3: Redis in Microservices

**Goal:** Use Redis in microservices to reduce latency and database load.

### 🧪 Problem:

* Microservices need to share session data or caching.
* Database is slow for frequent reads.

### 🚀 Solution with Redis:

* Use Redis as a **shared in-memory cache** or **data layer**.
* Helps in:

  * Caching user sessions
  * Reducing DB hits
  * Queuing tasks
  * Rate limiting

---

## 🧬 Flow 4: Data Persistence in Redis

**Goal:** Make sure Redis doesn’t lose data on restart/crash.

### 🧪 Problem:

RAM is volatile. What if Redis server crashes?

### ✅ Solutions:

| Method                    | Description                         |
| ------------------------- | ----------------------------------- |
| **Snapshotting** (`.rdb`) | Saves full DB every few seconds     |
| **AOF** (`.aof`)          | Saves every operation as it happens |

👉 Both files are stored in directories like `/var/lib/redis`.

### 🔁 If Redis Restarts:

* It loads `.rdb` or replays `.aof` to recover all data.

---

## 🧬 Flow 5: Redis Replica & High Availability

**Goal:** Ensure Redis is not a single point of failure.

### 🧪 Problem:

What if Redis server crashes? We lose data access.

### ✅ Solution: Replication

* Set up **primary (master)** → read/write
* Set up **replica (slave)** → read-only
* Replicas **auto-sync** from primary

👥 Multiple replicas = handle more traffic & failover safety

---

## 🌍 Flow 6: Scaling Redis — Clustering & Sharding

**Goal:** Handle large datasets and traffic.

### 🧪 Problem:

Redis has memory limit. One server can't handle 100GB+.

### ✅ Solution: Sharding via Redis Cluster

* **Split data** into multiple shards
* Each shard has:

  * One **primary**
  * One or more **replicas**

### 🗂 Example:

```
Cluster:
  Shard A → keys (a, b)
  Shard B → keys (c, d)
  Shard C → keys (e, f)
```

➡️ Each shard only handles part of data → uses less memory.

---

## 🌐 Flow 7: Redis for Global Access (Active-Active)

**Goal:** Make Redis available globally with write support.

### 🧪 Problem:

Users are worldwide. One Redis server causes latency.

### ✅ Solution: Active-Active Deployment

* Redis is deployed in **multiple regions**
* Each region:

  * Accepts **read and write**
  * Syncs with others using **CRDT (conflict-free replicated data types)**

🛠 CRDT ensures no conflict between updates from different users.

---

## 💸 Flow 8: Redis on Flash (Memory + SSD)

**Goal:** Reduce Redis memory costs.

### 🧪 Problem:

RAM is expensive. What if dataset is too big?

### ✅ Solution: Redis on Flash

* **Hot data (used frequently)** → stays in RAM
* **Warm/cold data (less used)** → moved to SSD

➡️ You save money while keeping fast access to important data.

---

## 🧱 Flow 9: Redis in Kubernetes

**Goal:** Use Redis in cloud-native, scalable environments.

### 🧪 Problem:

How do we run Redis in Kubernetes?

### ✅ Solution:

* Use **Redis Helm Chart** or **Redis Operator**
* Attach **Persistent Volume (EBS, SSD)** for `.rdb` and `.aof`
* Benefits:

  * Autoscaling
  * Health checks
  * Infrastructure as code

---

## 🧰 Flow 10: Redis Modules for Advanced Use

**Goal:** Extend Redis capabilities

| Module          | Use Case                     |
| --------------- | ---------------------------- |
| RedisJSON       | Store structured JSON data   |
| RedisGraph      | Handle graph relationships   |
| RedisTimeSeries | Time-series data (IoT, logs) |
| RediSearch      | Full-text search             |

👉 Just install the module and use advanced queries directly in Redis!

---

## Flow 11: 🔁 Redis Failover — Easy Flow (When Primary Crashes)

### 🎯 Scenario:

* **Primary A** handles data for **slots 0–5000**
* Primary A crashes ❌

---

### 🧠 Step-by-Step Process:

```
📦 Primary A (Slots: 0–5000)
       |
       🔻
💥 Primary A Crashes!
       |
       👀 Redis Cluster detects failure (via heartbeat/gossip)
       |
       📋 Check available replicas of Primary A:
            - Replica A1 (most recent data, offset: 99)
            - Replica A2 (slightly behind, offset: 95)
       |
       🗳 Redis starts election among replicas
       |
       🥇 Replica A1 is selected (most up-to-date)
       |
       🔄 Cluster promotes Replica A1 ➝ Becomes new **Primary A**
       |
       🌍 Cluster updates routing info (re-assigns slot ownership)
       |
       🚀 Clients now send requests to **Replica A1 (new Primary)**
```


---

## Flow 12:🔗 Redis Cluster Architecture — Cluster, Sharding, and Replica

```
                         🔗 Redis Cluster
        ┌────────────────────┬────────────────────┬────────────────────┐
        ▼                    ▼                    ▼
   🟥 Primary Node A     🟥 Primary Node B     🟥 Primary Node C         ← Shards (Data is split)
 (Handles Slots 0–5460) (Handles Slots 5461–10922) (Handles Slots 10923–16383)
        │                    │                    │
        │                    │                    │
  ┌─────┴─────┐        ┌─────┴─────┐        ┌─────┴─────┐
  ▼           ▼        ▼           ▼        ▼           ▼
🟦 Replica A1 🟦 Replica A2   🟦 Replica B1 🟦 Replica B2   🟦 Replica C1 🟦 Replica C2    ← Replicas (Backup of each shard)
```

---

### ✔️ How It Works:

1. **Cluster** organizes all nodes and manages the slot distribution.
2. **Shards (Primary Nodes)** split the data across nodes using hash slots.
3. **Replicas** are backups of each shard to ensure high availability.
4. If any primary fails → a replica is promoted → no data loss or downtime.

---

## 📦 Real-Life Analogy

> Think of Redis Cluster like a global warehouse system:

* 📦 **Cluster** = Company with 3 warehouses (India, Europe, US)
* 📚 **Shards** = Each warehouse stores different product categories
* 📋 **Replica** = Backup warehouse in case one burns down
* 🚚 Delivery (key) is routed based on category (hash slot) to correct warehouse

---

## ✅ Summary Table

| Term          | What It Means                                | Purpose                               |
| ------------- | -------------------------------------------- | ------------------------------------- |
| **Cluster**   | Group of Redis nodes                         | Distributes load and data             |
| **Shard**     | A part of the total dataset (a primary node) | Makes Redis horizontally scalable     |
| **Replica**   | Backup copy of a shard                       | Provides fault tolerance and failover |
| **Hash Slot** | Bucket (0–16383) to map keys to shards       | Enables automatic key distribution    |

---


## 🐍 Flow 13: Python + Redis Example

**Goal:** Learn how to use Redis with Python in real life.

### ✅ Step 1: Install Redis client

```bash
pip install redis
```

### ✅ Step 2: Use in Python code

```python
import redis

# Connect to Redis
r = redis.Redis(host='localhost', port=6379, db=0)

# Store a value
r.set("user:1", "Alice")

# Get the value
print(r.get("user:1").decode())  # Output: Alice

# Add items to a list
r.rpush("tasks", "task1", "task2")

# Read the list
tasks = r.lrange("tasks", 0, -1)
print([t.decode() for t in tasks])  # ['task1', 'task2']
```

---

## 🔚 Final Summary (All Flows at a Glance)

| Flow | Title                            |
| ---- | -------------------------------- |
| 1    | Redis Basics                     |
| 2    | Redis Data Types                 |
| 3    | Redis in Microservices           |
| 4    | Persistence (AOF & Snapshotting) |
| 5    | Replication & HA                 |
| 6    | Clustering & Sharding            |
| 7    | Global Active-Active Deployment  |
| 8    | Redis on Flash                   |
| 9    | Kubernetes Deployment            |
| 10   | Redis Modules                    |
| 11   | Redis Failover                   |
| 12   | Redis Cluster Architecture       |
| 13   | Redis with Python                |

---