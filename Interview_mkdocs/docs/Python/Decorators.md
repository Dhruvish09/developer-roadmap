# 🎀 Python Decorators – Simple Guide

---

## ✅ Definition

A **decorator** is a function that **adds extra functionality** to another function **without changing its code**.

> 💡 Think of a decorator like **adding toppings to a pizza** — the base remains the same, but you add flavor (extra behavior)!

---

## 🧱 Basic Syntax

```python
def decorator_function(original_function):
    def wrapper():
        print("Extra code before")
        original_function()
        print("Extra code after")
    return wrapper

@decorator_function
def say_hello():
    print("Hello!")

say_hello()
```

🔸 Output:

```
Extra code before
Hello!
Extra code after
```

---

## 🛠️ Real-World Use Cases

| Use Case          | What Decorator Does                          |
| ----------------- | -------------------------------------------- |
| ✅ Logging         | Logs function calls                          |
| ⏱️ Timing         | Measures function execution time             |
| 🔒 Authentication | Checks user login before running a function  |
| ❌ Error Handling  | Catches and handles exceptions automatically |

---

## 🔁 Example 1: Logging Decorator

```python
def log_decorator(func):
    def wrapper():
        print(f"Calling {func.__name__}")
        func()
        print(f"Finished {func.__name__}")
    return wrapper

@log_decorator
def greet():
    print("Hi there!")

greet()
```

---

## ⏱️ Example 2: Timing Decorator

```python
import time

def timer_decorator(func):
    def wrapper():
        start = time.time()
        func()
        end = time.time()
        print(f"Took {end - start:.2f} seconds")
    return wrapper

@timer_decorator
def slow_function():
    time.sleep(2)
    print("Done")

slow_function()
```

---

## 🔄 Example 3: Decorator with Arguments

```python
def repeat(n):
    def decorator(func):
        def wrapper():
            for _ in range(n):
                func()
        return wrapper
    return decorator

@repeat(3)
def hello():
    print("Hello!")

hello()
```

---

## 🔄 Example : Decorator for Rate limit using redis

```python
import time
import redis

# Connect to Redis (Make sure your Redis server is running!)
db = redis.Redis(host='localhost', port=6379, decode_responses=True)

def rate_limit(max_calls, timespan):
    def decorator(func):
        def wrapper(*args, **kwargs):
            key = f"limit:{func.__name__}"
            now = time.time()

            # 1. Delete timestamps older than the window (e.g., older than 60s)
            db.zremrangebyscore(key, 0, now - timespan)

            # 2. Check if we are still under the limit
            if db.zcard(key) < max_calls:
                db.zadd(key, {str(now): now}) # Log this call
                return func(*args, **kwargs)
            
            # 3. Otherwise, block
            print(f"❌ Limit reached! (Max {max_calls} calls per {timespan}s)")
        
        return wrapper
    return decorator

# --- Usage ---
@rate_limit(max_calls=5, timespan=60)
def access_system():
    print("✅ Success: System accessed.")

# Test it
access_system()
```

---

## 🔄 Example : Decorator for Rate limit using local system

```python
import time

def rate_limit(max_calls, window):
    users = {}

    def decorator(func):
        def wrapper(user_id):
            now = int(time.time())  # use integer seconds
            count, start = users.get(user_id, (0, now))

            # reset window if expired
            if now - start >= window:
                count, start = 0, now

            # check limit
            if count >= max_calls:
                print(f"❌ User {user_id}: limit exceeded")
                return

            # update count
            users[user_id] = (count + 1, start)
            return func(user_id)

        return wrapper
    return decorator

@rate_limit(max_calls=2, window=10)  # max 2 calls per 10 seconds
def hello(user_id):
    print(f"✅ User {user_id}: access allowed")

hello("user1")
hello("user1")
hello("user1")  # blocked
hello("user1")  # blocked

```
---


## ✅ Summary

| Concept          | Description                      |
| ---------------- | -------------------------------- |
| `@decorator`     | Adds functionality to a function |
| `def wrapper()`  | Wraps the original function      |
| `return wrapper` | Returns the modified behavior    |
