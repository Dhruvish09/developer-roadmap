## 🧠 What is Redis?

Redis is a fast, in-memory database that stores data as key-value pairs. It is commonly used for caching, session storage, and background task management.

## 🛠️ Common Redis Use Cases

| Use Case                       | Why Redis?                               |
| ------------------------------ | ---------------------------------------- |
| 🔄 Caching                     | Speed up API/database responses          |
| 🧵 Pub/Sub messaging           | Real-time communication between services |
| 📬 Message Queue (with Celery) | For background jobs/tasks                |
| 🔐 Session storage             | Store user sessions or tokens securely   |
| 📊 Rate limiting               | Track and limit API requests per user    |


## 🧰 Tools Redis Works Well With

* 🔧 **Celery** (task queues)
* ⚙️ **FastAPI/Flask/Django** (web apps)
* 🗃️ **PostgreSQL/MySQL** (cache layer)
* 🎮 **Realtime apps** (e.g., chat, leaderboard)


## 🧠 What is Celery?

Celery is a powerful background task manager in Python. It helps you run time-consuming tasks outside your FastAPI app so your users don't have to wait.

## 🚀 Why Use Celery?

Use Celery when you want to:

    ✅ Send emails without blocking the user
    ✅ Run heavy tasks (like ML, file processing)
    ✅ Call APIs in background
    ✅ Schedule jobs (like cron tasks)


## ⚙️ How It Works

FastAPI ➡️ Redis Queue ➡️ Celery Worker

1. **FastAPI** sends a task to Celery.
2. **Celery** puts it into a queue using a **broker** (like Redis).
3. **Worker** picks it up and executes the task **in background**.


## ✅ Benefits of Celery

* No waiting for long tasks
* Clean separation of responsibilities
* Built-in support for retries, timeouts, and scheduling


## 💡 Common Use Cases

* 📧 Send emails or notifications
* 📦 Process uploaded files or images
* 🧠 Run ML predictions
* 🗓 Schedule daily/weekly reports
* 🔄 Sync with third-party APIs


## ✅ Celery Configs
| Config Option                                          | Matlab Kya Karta Hai?                                                           |
| ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| `task_track_started=True`                              | Task start hote hi uska status "STARTED" ho jata hai.                           |
| `task_acks_late=True`                                  | Task complete hone ke baad hi queue ko confirm karega (reliable retry ke liye). |
| `acks_on_failure_or_timeout=False`                     | Agar task fail ho ya timeout ho jaye to retry kare.                             |
| `task_expires=3600`                                    | Task 1 hour ke baad expire ho jaye agar run nahi hua.                           |
| `CELERY_TASK_ALWAYS_EAGER=True`                        | Testing ke liye: Task background me na jaake turant chale.                      |
| `CELERY_TASK_REJECT_ON_WORKER_LOST=True`               | Worker crash ho jaye to task retry ho.                                          |
| `worker_prefetch_multiplier=2`                         | Har worker ek baar me 2 task advance me le le.                                  |
| `worker_max_tasks_per_child=5`                         | Worker sirf 5 task kare, fir naye fresh worker ban jaye.                        |
| `broker_transport_options={'visibility_timeout': 300}` | Worker 5 min me task finish na kare to wapas queue me bhej do.                  |
