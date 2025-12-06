# 🚦 **1. SUBROUTINE (Normal Function) — One Road, One Car**

### **Flow**

```
Main Program
   |
   --> call function A
           |
           --> function B
                |
                return to A
           |
       return to Main
```

### **Meaning**

* Executes **top → bottom**.
* Only **one function runs at a time**.
* Cannot pause in the middle.
* No switching between functions.

### **Example**

```python
def sub():
    print("Run completely")
```

📌 **Mental model:**
➡️ *One straight road. One car. No overtaking.*

---

# 🌀 **2. COROUTINE — Function That Can PAUSE & RESUME**

### **Flow**

```
Main Program
   |
   --> coroutine A starts
           |
           yield (pause here)
           |
   (control returns to Main)
   |
Main resumes coroutine A later
           |
           continues from where paused
```

### **Meaning**

* Provides **cooperative multitasking**.
* Can **pause (yield)** and **resume**.
* Not automatic; you must resume manually.

### **Example**

```python
def coroutine():
    yield "Paused here"
```

📌 **Mental model:**
➡️ *A car stops on the road, waits, then continues later.*

---

# ⚙️ **3. CONCURRENCY — Switching Tasks Without Waiting**

### **Flow**

```
Task A runs
    |
    (task waits for I/O)
    |
Switch to Task B
    |
Task B waits
    |
Switch back to Task A
```

### **Meaning**

* Helps when tasks **wait for I/O** (API calls, DB, file read).
* Python can **interleave** tasks.
* Doesn’t run two CPU-heavy tasks at the same time — that’s parallelism.

📌 **Mental model:**
➡️ *One worker doing many tasks by switching whenever one is waiting.*

---

# 🔑 **4. async / await — Keywords to Create & Manage Coroutines**

### **Flow**

```
async def taskA():
   await something  --> pause here
                      |
Main loop moves to taskB
                      |
TaskA resumes when result is ready
```

### **Meaning**

* `async` creates a **coroutine function**.
* `await` **pauses** execution until awaited work completes.
* Python switches to another task while waiting.

### **Example**

```python
async def download():
    await network_call()
```

📌 **Mental model:**
➡️ *“await” = pause and give chance to others.*

---

# 🧠 **5. asyncio Module — The Manager (Event Loop)**

### **Flow**

```
Event Loop
    |
    |-- schedules coroutine A
    |
    |-- coroutine A hits await -> paused
    |
    |-- schedules coroutine B
    |
    |-- coroutine B completes
    |
    |-- returns to coroutine A
```

### **Meaning**

* Central brain that manages all async coroutines.
* Switches tasks when they are **waiting**.
* Provides:

  * `asyncio.create_task()`
  * `asyncio.run()`
  * Event loop
  * Awaitable I/O functions

### **Example**

```python
import asyncio

async def main():
    task1 = asyncio.create_task(job1())
    task2 = asyncio.create_task(job2())
    await task1
    await task2

asyncio.run(main())
```

📌 **Mental model:**
➡️ *Event loop = traffic controller that decides which task runs next.*

---

# 🎯 **ALL CONCEPTS IN ONE FLOW**

```
Subroutine → runs one function fully.

Coroutine → can pause and resume manually.

Concurrency → multiple tasks switch when waiting (not at same time).

async/await → special syntax to write coroutines easily.

asyncio → event loop manages async switching automatically.
```

---