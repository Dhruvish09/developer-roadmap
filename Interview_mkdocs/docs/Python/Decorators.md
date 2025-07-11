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

## ✅ Summary

| Concept          | Description                      |
| ---------------- | -------------------------------- |
| `@decorator`     | Adds functionality to a function |
| `def wrapper()`  | Wraps the original function      |
| `return wrapper` | Returns the modified behavior    |
