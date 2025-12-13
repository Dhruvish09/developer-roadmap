## 1. Does Uvicorn Use Multithreading or Multiprocessing?

**By default**

* Uvicorn runs as a **single process**
* It uses an **async event loop**, not threads

**To run multiple processes**

```bash
uvicorn project.asgi:application --workers 4
```

This creates **4 worker processes**.

**Simple meaning (for interview)**

> More workers = more processes = more requests handled in parallel.

---

✅ How Django Database Queries Work With Uvicorn

Uvicorn itself is **async**, but Django ORM is **synchronous**.

| Component        | How it runs                   |
| ---------------- | ----------------------------- |
| Uvicorn          | Async (event loop, fast I/O)  |
| Django views     | Sync or Async                 |
| Database queries | Run in **threads internally** |

---

✅ Interview One-Line Answers

**Q: Is Uvicorn multi-threaded?**
👉 No. It is single-threaded and scales using **multiple processes**.

**Q: How many DB connections are used?**
👉 One database connection per **process (worker)**.

---

## 2. What Is a REST API?

A **REST API** is a way for applications to talk to each other using **HTTP methods** such as:

* `GET` → Read data
* `POST` → Create data
* `PUT` → Update data
* `DELETE` → Remove data

Data is typically exchanged in **JSON format**.

✅ **Interview one-liner:**

> A REST API allows different applications to communicate over HTTP using standard methods and JSON.

---

## 3. How do you optimize slow Django APIs?


**How to Optimize Slow Django APIs**

1. **Use `select_related` & `prefetch_related`**
2. **Add database indexes**
3. **Use Redis caching**
4. **Use pagination**
5. **Reduce number of queries**
6. **Use asynchronous views**
7. **Use `EXPLAIN()` to analyze slow queries**


**1. `select_related` & `prefetch_related`**

Reduces N+1 queries.
Fetch related data in fewer queries → faster API.

---

**2. Add Database Indexes**

Index columns used in filters.
DB finds data faster → avoids full table scan.

---

**3. Use Redis Caching**

Store frequently used data in memory.
Avoid hitting DB every time → instant response.

---

**4. Use Pagination**

Do not return 10,000 rows at once.
Return data in chunks (page 1, page 2…).
Reduces load and speeds up API.

---

**5. Reduce Number of Queries**

Avoid loops making queries.
Combine queries or use annotations.

---

**6. Use Asynchronous Views**

For I/O-bound tasks (API calls, file operations).
Allows Django to handle more requests at once.

---

**7. Use `EXPLAIN()`**

Check why a query is slow.
Helps identify missing indexes or heavy joins.

---

## 4. How do you secure a REST API?

1. **JWT/Auth Tokens**
2. **HTTPS**
3. **Rate Limiting**
4. **Input Validation**
5. **CORS**
6. **Refresh Tokens**
7. **Role-Based Access Control (RBAC)**

---

**1. JWT / Auth Tokens**

Use JWT or OAuth tokens instead of sessions.
Every request must include a valid token → prevents unauthorized access.

---

**2. HTTPS**

Encrypts all API traffic.
Prevents attackers from reading or modifying data in transit.

---

**3. Rate Limiting**

Limits how many requests a user can make.
Stops brute-force attacks and API abuse.

---

**4. Input Validation**

Validate all data coming from clients.
Stops SQL injection, XSS, and malicious payloads.

---

**5. CORS**

Restricts which frontend domains can call your API.
Blocks unauthorized websites from accessing API.

---

**6. Refresh Tokens**

Short-lived access tokens + long-lived refresh tokens.
If access token is stolen, damage is limited.

---

**7. Role-Based Access Control**

Limit access based on user roles (admin, user, manager).
Ensures only authorized people can perform sensitive operations.

---

## 5. How do you optimize Django ORM queries?


1️⃣ **`select_related`**

* Fetch **related objects in a single SQL JOIN**
* Best for **ForeignKey / OneToOneField**

```python
books = Book.objects.select_related('author').all()
```

2️⃣ **`prefetch_related`**

* Fetch **many-to-many or reverse FK relationships efficiently**
* Reduces N+1 query problem

```python
books = Book.objects.prefetch_related('tags').all()
```

3️⃣ **`values` / `values_list`**

* Fetch **only required fields** instead of full model objects
* Reduces memory usage

```python
Book.objects.values_list('title', 'author__name')
```

4️⃣ **`annotate` / `aggregate`**

* Perform **database-side calculations**
* Avoids extra Python processing

```python
from django.db.models import Count
authors = Author.objects.annotate(book_count=Count('book'))
```

5️⃣ **Indexing**

* Add **database indexes** on frequently queried fields
* Improves lookup and filter performance

6️⃣ **Queryset caching**

* Cache **frequently used querysets** in Redis / memcached
* Reduces repeated DB hits

---

## 6. How do you implement authentication in Django/FastAPI?

1️⃣ **Session-Based Authentication** (Classic, Django default)

* Stores user session on the **server** and session ID in **browser cookies**
* Good for web apps with **server-rendered pages**
* Django Example:

```python
# settings.py
MIDDLEWARE = ['django.contrib.sessions.middleware.SessionMiddleware']
# login
from django.contrib.auth import authenticate, login
user = authenticate(username='user', password='pass')
login(request, user)
```

2️⃣ **JWT (JSON Web Token)** (Stateless, modern API)

* Token contains user info, sent with every request (Authorization header)
* Backend does **not store session**
* Suitable for **REST APIs / mobile apps**
* FastAPI Example:

```python
from fastapi_jwt_auth import AuthJWT
token = AuthJWT.create_access_token(subject=user.id)
# send token in Authorization header
```

3️⃣ **OAuth2 / Third-Party Login**

* Standard protocol for **login via Google, GitHub, etc.**
* Provides secure delegated access
* FastAPI Example:

```python
from fastapi.security import OAuth2PasswordBearer
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
```

---