# 🔄 Python Generators & Iterators

---

## ✅ Definition

### 📌 **Iterator**:

An **iterator** is an object that can be looped through, one element at a time.

> Think of it like a **TV remote** — you press "next" to go to the next channel.

### 📌 **Generator**:

A **generator** is a special function that **remembers its state** and gives you one value at a time using the `yield` keyword.

> Think of it like a **water tap** — it gives water (data) only when asked.

---

## 🛠️ Common Methods

| Method / Concept | Description                                    |
| ---------------- | ---------------------------------------------- |
| `iter(obj)`      | Turns an iterable into an iterator             |
| `next(iterator)` | Gets the next value from an iterator           |
| `yield`          | Used in a generator function to return a value |

---

## 🔁 Iterator – Example

```python
nums = [1, 2, 3]
it = iter(nums)

print(next(it))  # 1
print(next(it))  # 2
print(next(it))  # 3
# print(next(it))  # Error: StopIteration
```

---

## ⚙️ Generator – Example

```python
def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

gen = count_up_to(3)

print(next(gen))  # 1
print(next(gen))  # 2
print(next(gen))  # 3
```

---

## 🧠 Use Cases

| Concept       | Real-World Use Case                             |
| ------------- | ----------------------------------------------- |
| **Iterator**  | Looping over items like list, tuple, file lines |
| **Generator** | Large data processing, streaming, lazy loading  |

---

### ✅ Generator Use Case: Reading a large file line by line

```python
def read_large_file(file_path):
    with open(file_path, "r") as file:
        for line in file:
            yield line

for line in read_large_file("bigfile.txt"):
    print(line.strip())
```

---

## 🔍 Differences Between Iterator & Generator

| Feature       | Iterator                  | Generator                             |
| ------------- | ------------------------- | ------------------------------------- |
| How to create | Using `iter()`            | Using `def` + `yield`                 |
| Memory usage  | Can be high (stores data) | Low (generates one at a time)         |
| State saving  | Manual                    | Automatic (resumes from last `yield`) |