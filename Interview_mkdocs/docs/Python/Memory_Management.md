# 🧠 Python Memory Management – Made Simple

---

## ✅ Definition

**Memory Management** in Python is the process of:

> **Allocating**, **tracking**, and **freeing memory** used by variables and objects in your program.

Python handles this **automatically** using:

* **Reference counting**
* **Garbage collection**
* **Private memory manager (PyMalloc)**

---

## 🔁 Workflow

### 📦 How memory is managed:

1. **You create an object** → Python assigns memory
2. **Multiple variables can point to the same object**
3. When **no variable points to the object**, Python deletes it (Garbage Collection)

---

## ⚙️ Key Concepts

| Term                   | Meaning                                                        |
| ---------------------- | -------------------------------------------------------------- |
| **Reference Count**    | Number of variables referring to an object                     |
| **Garbage Collection** | Automatic cleanup of unused objects                            |
| **PyMalloc**           | Python’s built-in allocator (manages memory blocks internally) |

---

## 💼 Use Cases

| Use Case                | Memory Feature Used                  |
| ----------------------- | ------------------------------------ |
| Avoid memory leaks      | Use `del`, avoid circular references |
| Handle large data files | Use generators, lazy loading         |
| Release memory early    | Use `del`, context managers          |
| Debug memory issues     | Use `gc` module                      |

---

## 🧪 Examples

---

### ✅ 1. Reference Counting

```python
a = [1, 2, 3]
b = a  # Now ref count is 2
del a  # Ref count is 1
del b  # Ref count is 0 → garbage collected
```

---

### ✅ 2. Checking Reference Count

```python
import sys

x = "hello"
print(sys.getrefcount(x))  # Shows number of references
```

---

### ✅ 3. Manual Garbage Collection

```python
import gc

gc.collect()  # Manually run garbage collection
```

---

### ✅ 4. Memory Efficient Generator

```python
def generate_numbers():
    for i in range(1000000):
        yield i

nums = generate_numbers()  # Uses very little memory
```

---

## 🎯 Best Practices

| Task                 | Best Practice                          |
| -------------------- | -------------------------------------- |
| Avoid memory leaks   | Break circular references              |
| Handle large data    | Use generators (`yield`)               |
| Release memory early | Use `with open(...)` (context manager) |
| Analyze memory       | Use tools like `tracemalloc`, `gc`     |

---

## 🧠 Summary

| Concept            | What It Does                                |
| ------------------ | ------------------------------------------- |
| Reference Counting | Tracks how many variables use an object     |
| Garbage Collector  | Frees memory when ref count = 0             |
| Generators         | Save memory by yielding one value at a time |
| PyMalloc           | Internal memory allocator used by Python    |

---