# 🔧 Lambda & Functional Programming – Easy Guide

---

## ✅ What is a Lambda Function?

A **lambda** is a **small, one-line anonymous function** (no name) used when you need a quick function for a short task.

### 🧠 Syntax:

```python
lambda arguments: expression
```

### ✅ Example:

```python
add = lambda x, y: x + y
print(add(2, 3))  # Output: 5
```

---

## 🎯 When to Use Lambda?

* With functions like `map()`, `filter()`, `sorted()`, etc.
* When you need a function **for one-time use**

---

## 🔁 Functional Programming

Python supports **functional programming** using:

| Function   | Purpose                                  |
| ---------- | ---------------------------------------- |
| `map()`    | Apply a function to every item in a list |
| `filter()` | Keep items that return `True`            |
| `reduce()` | Combine all items to a single value      |
| `lambda`   | Create quick functions                   |

---

## 🔹 Examples

### ✅ 1. `map()` + lambda

```python
nums = [1, 2, 3]
squared = list(map(lambda x: x*x, nums))
print(squared)  # [1, 4, 9]
```

### ✅ 2. `filter()` + lambda

```python
nums = [1, 2, 3, 4]
even = list(filter(lambda x: x % 2 == 0, nums))
print(even)  # [2, 4]
```

### ✅ 3. `reduce()` + lambda

```python
from functools import reduce

nums = [1, 2, 3, 4]
total = reduce(lambda x, y: x + y, nums)
print(total)  # 10
```

---

## 🧠 Summary

| Concept    | Description                    |
| ---------- | ------------------------------ |
| `lambda`   | Short one-line function        |
| `map()`    | Apply function to all items    |
| `filter()` | Filter items using a condition |
| `reduce()` | Reduce list to a single value  |

---