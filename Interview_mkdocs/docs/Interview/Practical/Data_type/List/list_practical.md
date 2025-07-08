# 🧠 Python List Practicals for Interview

---

## 📋 Practical List Overview

1. Modify List by Inserting/Removing Elements
2. Add Elements to a List at Specific Indices
3. Pythonic Element Exclusion – List Comprehension vs Iterative Removal
4. Swap Two Elements Using `enumerate`
5. Extract Every 3rd Element from a List
6. Get Sum of Even and Odd Numbers in a List
7. Find the Smallest Positive Number in a List
8. Find Maximum and Minimum Values in a List
9. Remove Duplicate Values from a List
10. Remove Duplicates Using List Comprehension
11. Find Non-Repetitive Elements (Without Using `count`)
12. List Element Rotation Program (By Index)
13. List Comprehension Examples
14. Flatten a Nested List (Two Approaches)
15. Sort List Without Using `sort()` (Quicksort)
16. Sort Elements in List Using Decorator
17. Generate Fibonacci Series Using List
18. Implement Binary Search Algorithm

---

## 1️⃣ Modify List by Inserting/Removing Elements

```python
my_list = [1, 2, 3, 4, 5]
my_list.insert(2, 10)
my_list.remove(3)
del my_list[0]
print("List after modifications:", my_list)
```

---

## 2️⃣ Add Elements to a List at Specific Indices

```python
original_list = [10, 20, 30, 40, 50]
elements_to_add = [15, 25]
indices_to_add = [2, 4]

for index, element in zip(indices_to_add, elements_to_add):
    original_list.insert(index, element)

print("List after adding elements:", original_list)
```

---

## 3️⃣ Pythonic Element Exclusion – List Comprehension vs Iterative Removal

```python
my_list = [32, 4, 12, 5, 7, 6, 8, 9]
new_list = [4, 6]

# Using list comprehension
result = [value for value in my_list if value not in new_list]
print("Result using List Comprehension:", result)

# Iterative removal
for i in new_list:
    my_list.remove(i)

print("Result after Iterative Removal:", my_list)
```

---

## 4️⃣ Swap Two Elements Using `enumerate`

```python
def swapvalue(lst, pos1, pos2):
    for i, x in enumerate(lst):
        if i == pos1:
            element1 = x
        if i == pos2:
            element2 = x
    lst[pos1] = element2
    lst[pos2] = element1
    return lst

my_list = [61, 24, 12, 16]
print(swapvalue(my_list, 0, 1))  # Swap first and second element
```

---

## 5️⃣ Extract Every 3rd Element from a List

```python
my_list = [1, 2, 54, 22, 44, 5, 13, 23, 3]
result = [val for i, val in enumerate(my_list, start=1) if i % 3 == 0]
print("Every 3rd element:", result)
```

---

## 6️⃣ Get Sum of Even and Odd Numbers in a List

```python
def odd_even_sum(lst):
    even_sum = sum(i for i in lst if i % 2 == 0)
    odd_sum = sum(i for i in lst if i % 2 != 0)
    return f"Even Sum: {even_sum}", f"Odd Sum: {odd_sum}"

original_list = [10, 19, 30, 40, 53, 60, 70, 80]
even, odd = odd_even_sum(original_list)
print(even, odd)
```

---

## 7️⃣ Find the Smallest Positive Number in a List

```python
a = [2, 3, 4, 1, 32, 31]
small = None
for num in a:
    if num > 0 and (small is None or num < small):
        small = num
print("Smallest positive number:", small)
```

---

## 8️⃣ Find Maximum and Minimum Values in a List

```python
my_list = [1, 2, 4, 12, 45, 32, 4, 36, 6]
maximum = minimum = my_list[0]
for i in my_list:
    if i > maximum:
        maximum = i
    if i < minimum:
        minimum = i
print(f"Max: {maximum}, Min: {minimum}")
```

---

## 9️⃣ Remove Duplicate Values from a List

```python
my_list = [1, 2, 4, 3, 5, 6, 2, 9, 9, 4, 2, 5, 7, 8]
new_list = []
for i in my_list:
    if i not in new_list:
        new_list.append(i)
print("List without duplicates:", new_list)
```

---

## 🔟 Remove Duplicates Using List Comprehension

```python
my_list = [2, 3, 36, 6, 3, 6, 8, 9, 8, 5, 9, 6, 9, 3]
new_list = []
[new_list.append(x) for x in my_list if x not in new_list]
print("Clean list:", new_list)
```

---

## 1️⃣1️⃣ Find Non-Repetitive Elements (Without Using `count`)

```python
def find_unique(lst):
    count = {}
    for i in lst:
        count[i] = count.get(i, 0) + 1
    return [k for k, v in count.items() if v == 1]

my_list = [1, 2, 3, 4, 2, 3, 5, 6, 7, 7, 8]
print("Non-repetitive elements:", find_unique(my_list))
```

---

## 1️⃣2️⃣ List Element Rotation Program (By Index)

```python
def rotate_list(lst, n):
    return lst[-n:] + lst[:-n]

my_list = [1, 2, 3, 4, 5, 6]
print(rotate_list(my_list, 2))
```

---

## 1️⃣3️⃣ List Comprehension Examples

```python
my_list = [2, 3, 4, 5, 6, 7, 8, 9]
print([x**2 for x in my_list])           # Squares
print([x for x in my_list if x % 2 == 0])  # Even
print([x for x in my_list if x % 2 != 0])  # Odd
print([x for x in my_list if x % 3 == 0])  # Div by 3

nested = [[1, 2], [3, 4], [5, 6]]
print([x for sub in nested for x in sub])

words = ["apple", "banana", "cherry"]
print([w[0] for w in words])  # First letters
```

---

## 1️⃣4️⃣ Flatten a Nested List (Two Approaches)

```python
# Manual flatten
def manual_flatten(lst):
    flat = []
    for i in lst:
        if isinstance(i, list):
            for j in i:
                if isinstance(j, list):
                    flat.extend(j)
                else:
                    flat.append(j)
        else:
            flat.append(i)
    return flat

# Recursive flatten
def flatten_recursive(lst):
    flat = []
    for i in lst:
        if isinstance(i, list):
            flat.extend(flatten_recursive(i))
        else:
            flat.append(i)
    return flat

my_list = [10, 20, [30, 40, [50, 60, 70], 80], 50, 60, [12, 13], 70]
print(manual_flatten(my_list))
print(flatten_recursive(my_list))
```

---

## 1️⃣5️⃣ Sort List Without Using `sort()` (Quicksort)

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr)//2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

unsorted = [3, 6, 8, 10, 1, 2, 1]
print("Sorted:", quicksort(unsorted))
```

---

## 1️⃣6️⃣ Sort Elements in List Using Decorator

```python
def sort_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return sorted(result) if isinstance(result, list) else result
    return wrapper

@sort_decorator
def get_numbers(lst):
    return lst

print(get_numbers([3, 2, 4, 6, 3, 56, 7, 8, 5, 3]))
```

---

## 1️⃣7️⃣ Generate Fibonacci Series Using List

```python
def fibbo(n):
    series = [0, 1]
    for _ in range(2, n):
        series.append(series[-1] + series[-2])
    return series

print("Fibonacci Series:", fibbo(5))
```

---

## 1️⃣8️⃣ Implement Binary Search Algorithm

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

sorted_list = [1, 3, 5, 7, 9, 11, 13]
print("Target found at index:", binary_search(sorted_list, 7))
```