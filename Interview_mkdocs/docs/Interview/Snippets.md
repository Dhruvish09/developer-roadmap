
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

# 3️⃣1️⃣ ADVANCED PYTHON TRICKS

### **Swap values**

```python
a, b = b, a
```

### **Unpacking**

```python
a, *rest = [1,2,3,4]
```

### **Ternary in loops**

```python
[x if x%2==0 else -x for x in range(10)]
```

### **Dictionary default**

```python
from collections import defaultdict
d = defaultdict(int)
d["x"] += 1
```