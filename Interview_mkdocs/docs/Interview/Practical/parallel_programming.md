

# 🔄 Difference Between Multiprocessing, Multithreading, and Async/Await

| Concept             | Runs on       | Best for                                 | Parallelism Type | Real World Use Case Example         |
| ------------------- | ------------- | ---------------------------------------- | ---------------- | ----------------------------------- |
| **Multiprocessing** | Multiple CPUs | CPU-bound tasks (e.g., image processing) | True Parallelism | Video rendering, ML training        |
| **Multithreading**  | Single CPU    | I/O-bound tasks (e.g., file, network)    | Concurrency      | Web scraping, file downloads        |
| **Async/Await**     | Single CPU    | High I/O-bound, many tasks               | Cooperative      | Web APIs, chat apps, async scraping |

---

## 🧠 1. MULTIPROCESSING

### 🔹Concept:

* Spawns **separate processes**, each with its **own memory**.
* Best for **CPU-bound** tasks (heavy computations).

### ▶️ Execution Flow:

Each process runs **independently and truly in parallel**.

```
Main Process
 ├─ Process 1: Task A (CPU-bound)
 ├─ Process 2: Task B (CPU-bound)
 └─ Process 3: Task C (CPU-bound)
```

### 🐍 Python Example:

```python
import multiprocessing
import time

def heavy_task(name):
    print(f"{name} started")
    time.sleep(2)
    print(f"{name} finished")

if __name__ == "__main__":
    processes = []
    for i in range(3):
        p = multiprocessing.Process(target=heavy_task, args=(f"Process {i+1}",))
        p.start()
        processes.append(p)
    
    for p in processes:
        p.join()
```

### 🌍 Real-World Use Case:

* **Video Encoding**: Each core can encode one part of a video file.
* **Machine Learning**: Train different models in parallel.

---

## 🧵 2. MULTITHREADING

### 🔹Concept:

* Multiple threads **within the same process**.
* Shares memory space.
* Ideal for **I/O-bound** tasks (e.g., reading files, making HTTP calls).

### ▶️ Execution Flow:

Threads are **concurrent**, but not parallel due to GIL (Global Interpreter Lock in CPython).

```
Main Thread
 ├─ Thread 1: Download file A (waits on I/O)
 ├─ Thread 2: Download file B (waits on I/O)
 └─ Thread 3: Download file C (waits on I/O)
```

### 🐍 Python Example:

```python
import threading
import time

def download_file(name):
    print(f"{name} started")
    time.sleep(2)  # Simulates download
    print(f"{name} finished")

threads = []
for i in range(3):
    t = threading.Thread(target=download_file, args=(f"Thread {i+1}",))
    t.start()
    threads.append(t)

for t in threads:
    t.join()
```

### 🌍 Real-World Use Case:

* **Web scraping** multiple pages at once.
* **Parallel file downloads** in a browser.

---

## ⚡ 3. ASYNC-AWAIT (Asynchronous Programming)

### 🔹Concept:

* Uses **single-threaded event loop**.
* Tasks give control back to the loop when waiting (non-blocking).
* Great for **thousands of I/O-bound tasks**.

### ▶️ Execution Flow:

All tasks run in a **non-blocking manner** within a single thread.

```
Event Loop
 ├─ Task A: Await response → gives control back
 ├─ Task B: Await response → gives control back
 └─ Task C: Await response → gives control back
```

### 🐍 Python Example:

```python
import asyncio

async def fetch_data(name):
    print(f"{name} started")
    await asyncio.sleep(2)
    print(f"{name} finished")

async def main():
    tasks = [fetch_data(f"Task {i+1}") for i in range(3)]
    await asyncio.gather(*tasks)

asyncio.run(main())
```

### 🌍 Real-World Use Case:

* **Async API calls** in modern web frameworks (FastAPI, aiohttp).
* **Chat apps**, **real-time dashboards**, **stock market feeds**.

---

## ✅ Summary

| Feature     | Multiprocessing    | Multithreading       | Async/Await          |
| ----------- | ------------------ | -------------------- | -------------------- |
| Best for    | CPU-bound tasks    | I/O-bound tasks      | Many I/O tasks       |
| Uses        | Multiple processes | Threads in 1 process | Event loop           |
| Parallelism | True               | Pseudo (GIL limited) | Cooperative          |
| Memory      | Separate           | Shared               | Shared (single loop) |
| Example Use | Video encoding     | File download        | Web API calls        |
