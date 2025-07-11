# 🧠 Python **Metaprogramming** – Simplified Guide

---

## ✅ Definition

**Metaprogramming** means:

> Writing code that **modifies or generates other code** dynamically — often **at runtime**.

In Python, this includes:

* **Introspection** (checking types, attributes)
* **Decorators**
* **Metaclasses**
* **Dynamic attribute handling**

> Think of it like: "Code that writes or tweaks code."

---

## 🔁 Workflow

1. 👀 **Inspect**: Use functions like `type()`, `dir()`, `hasattr()` to examine objects
2. ✍️ **Modify**: Add or change functions/attributes dynamically
3. 🧱 **Wrap**: Use decorators to wrap or extend function behavior
4. 🏗️ **Control creation**: Use metaclasses to customize class behavior

---

## 💼 Use Cases

| Use Case                        | Technique                                     |
| ------------------------------- | --------------------------------------------- |
| Add behavior to functions       | Decorators                                    |
| Validate class definitions      | Metaclasses                                   |
| Log method calls dynamically    | Class decorators                              |
| Build API clients on the fly    | Dynamic class creation                        |
| Frameworks like Django, FastAPI | Use metaclasses and decorators under the hood |

---

## 🧪 Examples

---

### 1️⃣ **Introspection**

```python
x = [1, 2, 3]
print(type(x))         # <class 'list'>
print(dir(x))          # Lists all methods/attributes of list
```

---

### 2️⃣ **Function Decorator** (Metaprogramming)

```python
def logger(func):
    def wrapper():
        print(f"Calling {func.__name__}")
        func()
    return wrapper

@logger
def greet():
    print("Hello!")

greet()
```

---

### 3️⃣ **Dynamic Attribute Addition**

```python
class Person:
    pass

p = Person()
p.name = "Alice"  # Dynamically added
print(p.name)
```

---

### 4️⃣ **Metaclass Example** (Advanced)

```python
class Meta(type):
    def __new__(cls, name, bases, dct):
        print(f"Creating class {name}")
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=Meta):
    pass
```

---

## 🎯 When to Use Metaprogramming?

| Situation                              | Use Metaprogramming?    |
| -------------------------------------- | ----------------------- |
| You want to reduce repetitive code     | ✅ Yes (use decorators)  |
| You’re building a framework or library | ✅ Yes (use metaclasses) |
| You need dynamic, flexible behavior    | ✅ Yes                   |
| You're building simple scripts         | ❌ No (overkill)         |

---

## 🧠 Summary

| Feature       | Tool / Concept                 |
| ------------- | ------------------------------ |
| Introspection | `type()`, `dir()`, `getattr()` |
| Code wrapping | `@decorators`                  |
| Dynamic edits | `setattr()`, `__getattr__()`   |
| Class control | `metaclasses`                  |
