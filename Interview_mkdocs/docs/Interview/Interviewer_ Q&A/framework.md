## 1. Does Uvicorn Use Multithreading or Multiprocessing?

### **By default**

* Uvicorn runs as a **single process**
* It uses an **async event loop**, not threads

### **To run multiple processes**

```bash
uvicorn project.asgi:application --workers 4
```

This creates **4 worker processes**.

### **Simple meaning (for interview)**

> More workers = more processes = more requests handled in parallel.

---

### ✅ How Django Database Queries Work With Uvicorn

Uvicorn itself is **async**, but Django ORM is **synchronous**.

| Component        | How it runs                   |
| ---------------- | ----------------------------- |
| Uvicorn          | Async (event loop, fast I/O)  |
| Django views     | Sync or Async                 |
| Database queries | Run in **threads internally** |

---

### ✅ Interview One-Line Answers

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