
# ✅ **🔶 COMPLETE PYTHON INTERVIEW SYNTAX & SNIPPETS**

### **Your One Complete Document (All Combined)**

---

# 1️⃣ PYTHON BASICS

### **Print**

```python
print("Hello")
```

### **Variables & Types**

```python
x = 10
name = "Dhruv"
pi = 3.14
flag = True
```

### **Type Casting**

```python
int("10")
float("10.5")
str(100)
list("abc")  # ['a', 'b', 'c']
```

### **Check type**

```python
type(x)
isinstance(x, int)
```

---

# 2️⃣ CONDITIONALS

```python
if a > b:
    pass
elif a == b:
    pass
else:
    pass
```

### **Inline if**

```python
result = "even" if x % 2 == 0 else "odd"
```

---

# 3️⃣ LOOPS

### **For Loop**

```python
for i in range(5):
    print(i)
```

### **While Loop**

```python
while n > 0:
    n -= 1
```

### **Loop Else**

```python
for x in items:
    if x == 5:
        break
else:
    print("No break executed")
```

---

# 4️⃣ DATA STRUCTURES

## **✔ LIST**

```python
lst = [1,2,3]
lst.append(4)
lst.remove(2)
lst.pop()
lst.sort()
```

### **List slicing**

```python
lst[1:4]
lst[::-1]  # reverse
```

---

## **✔ TUPLE**

```python
t = (1,2,3)
t[0]
```

Immutable!

---

## **✔ SET**

```python
s = {1,2,3}
s.add(4)
s.remove(2)
s.union({5})
s.intersection({2,3})
```

---

## **✔ DICTIONARY**

```python
d = {"a": 1, "b": 2}
d["a"]
d.get("c", 0)
d.keys()
d.values()
d.items()
```

---

# 5️⃣ COMPREHENSIONS

### **List**

```python
[x*x for x in range(5)]
```

### **Dict**

```python
{k: v*v for k, v in enumerate(range(4))}
```

### **Set**

```python
{x for x in [1,1,2,3]}
```

### **Generator Expression**

```python
(x*x for x in range(10))
```

---

# 6️⃣ FUNCTIONS

```python
def add(a, b):
    return a + b
```

### **Default args**

```python
def greet(name="Guest"):
    pass
```

### **Args / Kwargs**

```python
def test(*args, **kwargs):
    print(args, kwargs)
```

---

# 7️⃣ LAMBDA

```python
square = lambda x: x*x
```

Sorting with Lambda:

```python
sorted_lst = sorted(data, key=lambda x: x["age"])
```

---

# 8️⃣ DECORATORS

```python
def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@my_decorator
def hello():
    print("Hello")
```

---

# 9️⃣ GENERATORS

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1
```

---

# 🔟 FILE HANDLING

```python
with open("file.txt", "r") as f:
    data = f.read()
```

---

# 1️⃣1️⃣ ERROR HANDLING

```python
try:
    risky()
except ValueError:
    pass
except Exception as e:
    print(e)
finally:
    print("cleanup")
```

---

# 1️⃣2️⃣ CLASSES & OOP

### **Basic**

```python
class Car:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        return "Driving"
```

### **Inheritance**

```python
class SportsCar(Car):
    def speed(self):
        return 200
```

### **Multiple Inheritance**

```python
class A: pass
class B: pass
class C(A, B): pass
```

### **Class & Static Methods**

```python
class Test:
    count = 0
    
    @classmethod
    def inc(cls):
        cls.count += 1
    
    @staticmethod
    def info():
        return "Static"
```

---

# 1️⃣3️⃣ PROPERTY Decorator

```python
class User:
    def __init__(self, age):
        self._age = age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, val):
        self._age = val
```

---

# 1️⃣4️⃣ IMPORTS

```python
import math
from os import path
from functools import lru_cache
```

---

# 1️⃣5️⃣ MULTITHREADING

```python
import threading

def work():
    print("thread")

t = threading.Thread(target=work)
t.start()
```

---

# 1️⃣6️⃣ MULTIPROCESSING

```python
from multiprocessing import Process

def task():
    print("Process")

p = Process(target=task)
p.start()
```

---

# 1️⃣7️⃣ ASYNC / AWAIT

```python
import asyncio

async def work():
    print("Start")
    await asyncio.sleep(1)
    print("Done")

asyncio.run(work())
```

---

# 1️⃣8️⃣ CONTEXT MANAGER (WITH **enter** & **exit**)

```python
class MyCtx:
    def __enter__(self):
        print("Entered")
    def __exit__(self, *args):
        print("Exited")

with MyCtx():
    pass
```

---

# 1️⃣9️⃣ ITERATOR PROTOCOL

```python
class Counter:
    def __init__(self, n):
        self.n = n

    def __iter__(self):
        return self

    def __next__(self):
        if self.n <= 0:
            raise StopIteration
        val = self.n
        self.n -= 1
        return val
```

---

# 2️⃣0️⃣ LRU CACHE

```python
from functools import lru_cache

@lru_cache(maxsize=100)
def api_call(x):
    return x*x
```

---

# 2️⃣1️⃣ ENUM

```python
from enum import Enum

class Status(Enum):
    ACTIVE = 1
    BLOCKED = 2
```

---

# 2️⃣2️⃣ DATACLASS

```python
from dataclasses import dataclass

@dataclass
class Product:
    name: str
    price: float
```

---

# 2️⃣3️⃣ TYPE HINTING

```python
def add(a: int, b: int) -> int:
    return a + b
```

---

# 2️⃣4️⃣ UNIT TESTING

```python
import unittest

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(2+3, 5)
```

---

# 2️⃣5️⃣ JSON Handling

```python
import json

json.dumps(obj)
json.loads(text)
```

---

# 2️⃣6️⃣ TIME & DATE

```python
from datetime import datetime
now = datetime.now()
```

---

# 2️⃣7️⃣ LOGGING

```python
import logging

logging.basicConfig(level=logging.INFO)
logging.info("Info log")
```

---

# 2️⃣8️⃣ REGEX

```python
import re

re.findall(r"\d+", "abc123")
```

---

# 2️⃣9️⃣ VENV

```bash
python -m venv env
source env/bin/activate
```

---

# 3️⃣0️⃣ REAL SCENARIO TRICKY QUESTIONS (4 YEARS EXPERIENCE)

### **1. Remove duplicates but keep order**

```python
seen = set()
result = []
for x in lst:
    if x not in seen:
        seen.add(x)
        result.append(x)
```

### **2. Flatten list**

```python
flat = [x for sub in lst for x in sub]
```

### **3. Reverse dict**

```python
rev = {v: k for k, v in d.items()}
```

### **4. Merge two dicts**

```python
final = {**d1, **d2}
```

### **5. Sort by multiple keys**

```python
sorted(data, key=lambda x: (x["age"], x["name"]))
```

### **6. Detect duplicates in list**

```python
dupes = [x for x in lst if lst.count(x) > 1]
```

### **7. File read line-by-line (memory safe)**

```python
for line in open("file.txt"):
    print(line.strip())
```

### **8. Retry mechanism**

```python
import time
for _ in range(3):
    try:
        risky()
        break
    except:
        time.sleep(2)
```

---

# 3️⃣1️⃣ What is the output of the following:

```python
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

**A.** `[1, 2, 3]`
**B.** `[1, 2, 3, 4]`
**C.** Error
**D.** `[4, 1, 2, 3]`

✅ **Correct Answer: B**

---

```python
def add(num, lst=[]):
    lst.append(num)
    return lst

print(add(10))
print(add(20, []))
print(add(30))
```

**A.** `[10]`, `[20]`, `[30]`
**B.** `[10]`, `[20]`, `[10, 30]`
**C.** `[10]`, `[20]`, `[10]`
**D.** Error

✅ **Correct Answer: B**

---

```python
x = [[0]] * 3
x[0][0] = 99
print(x)
```

### **Correct Output:**

```
[[99], [99], [99]]
```

Because all three sublists reference the **same object**.

---

```python
def func(nums=[]):
    nums.append(1)
    return nums

print(func())
print(func())
```

### **Answer:**

```
[1]
[1, 1]
```

Because `nums` default list is shared across calls.


---

```python
x = [10, 20, 30]
y = x[:]
y[0] = 99

print(x)
print(y)
```

### **Answer:**

```
[10, 20, 30]
[99, 20, 30]
```

Shallow copy works.

--- 

```python
a = (1, 2, 3)
b = (1, 2, 3)

print(a is b)
print(a == b)
```

### **Answer:**

```
False
True
```

Immutable objects can have different memory addresses but same value.

---

## 🔹 1. List / Tuple Slicing

```python
a = [10, 20, 30, 40, 50, 60]
```

| Code      | Explanation            | Output                     |
| --------- | ---------------------- | -------------------------- |
| `a[:]`    | Full copy              | `[10, 20, 30, 40, 50, 60]` |
| `a[::2]`  | Every 2nd element      | `[10, 30, 50]`             |
| `a[1::2]` | Every 2nd from index 1 | `[20, 40, 60]`             |
| `a[::-1]` | Reverse list           | `[60, 50, 40, 30, 20, 10]` |
| `a[1:4]`  | Index 1 → 3            | `[20, 30, 40]`             |
| `a[-3:]`  | Last 3 elements        | `[40, 50, 60]`             |
| `a[:-2]`  | All except last 2      | `[10, 20, 30, 40]`         |
| `a[::3]`  | Every 3rd element      | `[10, 40]`                 |

---

## 🔹 2. Set Operations (With Example)

```python
a = set("Hello")   # {'H','e','l','o'}
b = set("World")   # {'W','o','r','l','d'}
```

| Code     | Meaning              | Output                          |
| -------- | -------------------- | ------------------------------- |
| `a - b`  | In `a` not in `b`    | `{'H', 'e'}`                    |
| `b - a`  | In `b` not in `a`    | `{'W', 'r', 'd'}`               |
| `a & b`  | Common elements      | `{'l', 'o'}`                    |
| `a \| b` | Union (all unique)   | `{'H','e','l','o','W','r','d'}` |
| `a ^ b`  | Symmetric difference | `{'H','e','W','r','d'}`         |

---

## 🔹 3. List Reference vs Copy (VERY IMPORTANT 🔥)

```python
a = [1, 2, 3]
b = a
c = a[:]
```

| Expression | Result  |
| ---------- | ------- |
| `a is b`   | `True`  |
| `a is c`   | `False` |
| `a == c`   | `True`  |

```python
b.append(4)
print(a)   # [1, 2, 3, 4]
print(c)   # [1, 2, 3]
```

---

## 🔹 4. List Methods With Example

```python
a = [1, 2, 2, 3]
```

| Code              | Output / Effect      |
| ----------------- | -------------------- |
| `a.count(2)`      | `2`                  |
| `a.index(3)`      | `3`                  |
| `a.append(5)`     | `[1, 2, 2, 3, 5]`    |
| `a.extend([6,7])` | `[1, 2, 2, 3, 6, 7]` |
| `a.pop()`         | Removes last element |
| `a.remove(2)`     | Removes first `2`    |

---

## 🔹 5. Tuple / List Unpacking

```python
x = [1, 2, 3, 4, 5]
```

| Code           | Result                |
| -------------- | --------------------- |
| `a, b = 1, 2`  | `a=1, b=2`            |
| `a, *b = x`    | `a=1, b=[2,3,4,5]`    |
| `*a, b = x`    | `a=[1,2,3,4], b=5`    |
| `a, b, *c = x` | `a=1, b=2, c=[3,4,5]` |

---

## 🔹 6. List / Dict / Set Comprehension

```python
a = [1, 2, 3, 4]
```

| Code                           | Output                  |
| ------------------------------ | ----------------------- |
| `[x*x for x in a]`             | `[1, 4, 9, 16]`         |
| `[x for x in a if x % 2 == 0]` | `[2, 4]`                |
| `{x*x for x in a}`             | `{1, 4, 9, 16}`         |
| `{x: x*x for x in a}`          | `{1:1, 2:4, 3:9, 4:16}` |

---

## 🔹 7. Tricky but Common Python Snippets 😈

### 🔸 Mutable default argument

```python
def add(x, lst=[]):
    lst.append(x)
    return lst

add(1)  # [1]
add(2)  # [1, 2]  ❌ unexpected
```

### ✅ Correct way

```python
def add(x, lst=None):
    if lst is None:
        lst = []
    lst.append(x)
    return lst
```

---

## 🔹 8. List Multiplication Trap

```python
a = [[0]] * 3
a[0][0] = 1
print(a)  # [[1], [1], [1]] ❌
```

✅ Correct:

```python
a = [[0] for _ in range(3)]
```

---

## 🔹 9. `+` vs `+=`

```python
a = [1, 2]
b = a

a += [3]
print(b)  # [1, 2, 3]
```

```python
a = [1, 2]
b = a

a = a + [3]
print(b)  # [1, 2]
```

---

## 🔹 10. Your Example Revisited

```python
a = [(1,2,3,4), (33,22,11), 0, 4, 5]
a[::3]
```

➡ Output:

```python
[(1, 2, 3, 4), 4]
```

---