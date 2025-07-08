# 🧠 Python Web Frameworks: Fastapi Interview Guide

---

## 📌 Table of Contents

### FastAPI

1. FastAPI Basics
2. Request Handling
3. Dependency Injection
4. Background Tasks & Middleware
5. Security & Validation
6. Async Support & Performance
---

## ⚡ FASTAPI SECTION

### 1. What is FastAPI?

**Ans:**
FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.

---

### 2. How to create a simple API in FastAPI?

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI"}
```

---

### 3. How does FastAPI handle async and await?

**Ans:**
FastAPI supports asynchronous endpoints out-of-the-box using Python's `async` and `await`, allowing high-performance I/O-bound operations.

---

### 4. What are Pydantic Models in FastAPI?

**Ans:**
Pydantic is used in FastAPI to define request and response schemas with data validation.

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
```

---

### 5. What is Dependency Injection in FastAPI?

**Ans:**
FastAPI supports dependency injection for request handling, authentication, and reusable logic using the `Depends` function.

```python
from fastapi import Depends

def get_token(token: str):
    return token

@app.get("/secure")
def secure_endpoint(token: str = Depends(get_token)):
    return {"token": token}
```

---

### 6. How to handle background tasks in FastAPI?

**Ans:**
Using `BackgroundTasks` for tasks that can be run after a response is sent:

```python
from fastapi import BackgroundTasks

@app.post("/send-email")
def send_email(background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email_function)
    return {"message": "Email will be sent"}
```

---

### 7. How does FastAPI perform automatic data validation?

**Ans:**
FastAPI uses Pydantic to validate request bodies, query parameters, and path variables automatically based on Python types.

---

### 8. How to use Middleware in FastAPI?

**Ans:**
Middleware can be added using `@app.middleware("http")` decorator.

```python
@app.middleware("http")
async def log_requests(request, call_next):
    response = await call_next(request)
    return response
```

---

### 9. How does FastAPI support OpenAPI & Swagger Docs?

**Ans:**
FastAPI auto-generates Swagger and ReDoc UI from route and type definitions.

* Swagger: `/docs`
* ReDoc: `/redoc`

---

### 10. What are some performance benefits of FastAPI?

**Ans:**

* Built on Starlette and Pydantic
* Asynchronous support with `async/await`
* Automatic validation and serialization
* Auto-documentation

---
