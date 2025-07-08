# 🧠 Python List Methods Reference & Practice

## 📋 Common List Methods

| Method      | Description                                                     | Sample Usage                                              |
| ----------- | --------------------------------------------------------------- | --------------------------------------------------------- |
| `append()`  | Adds a single item to the end of the list.                      | `lst.append(4)` → `[3, 1, 2, 4]`                          |
| `extend()`  | Adds all elements of an iterable to the end.                    | `lst.extend([5, 6])` → `[3, 1, 2, 4, 5, 6]`               |
| `insert()`  | Inserts an item at a specific index.                            | `lst.insert(1, 10)` → `[3, 10, 1, 2, 4, 5, 6]`            |
| `remove()`  | Removes the first matching element.                             | `lst.remove(10)` → `[3, 1, 2, 4, 5, 6]`                   |
| `pop()`     | Removes and returns the item at the given index (default last). | `lst.pop()` → removes `6`, list becomes `[3, 1, 2, 4, 5]` |
| `index()`   | Returns the index of the first matching value.                  | `lst.index(4)` → `3`                                      |
| `count()`   | Returns the count of the value.                                 | `lst.count(2)` → `1`                                      |
| `sort()`    | Sorts the list in ascending order (in-place).                   | `lst.sort()` → `[1, 2, 3, 4, 5]`                          |
| `reverse()` | Reverses the list in-place.                                     | `lst.reverse()` → `[5, 4, 3, 2, 1]`                       |
| `copy()`    | Returns a shallow copy of the list.                             | `copy_lst = lst.copy()` → `[5, 4, 3, 2, 1]`               |
| `clear()`   | Removes all items from the list.                                | `lst.clear()` → `[]`                                      |

---

# 🎯 Python List Method Practice (Guess the Method)

> Try to guess which method solves each task below!

1. Add the number `4` to the end of the list `[3, 1, 2]` → `[3, 1, 2, 4]`
   ➤ **Method:** `append()`

2. Add the elements `[5, 6]` to `[3, 1, 2, 4]` → `[3, 1, 2, 4, 5, 6]`
   ➤ **Method:** `extend()`

3. Insert `10` at index `1` in `[3, 1, 2, 4, 5, 6]` → `[3, 10, 1, 2, 4, 5, 6]`
   ➤ **Method:** `insert()`

4. Remove `10` from `[3, 10, 1, 2, 4, 5, 6]` → `[3, 1, 2, 4, 5, 6]`
   ➤ **Method:** `remove()`

5. Remove and return the last element from `[3, 1, 2, 4, 5, 6]`
   ➤ **Method:** `pop()`

6. Get the index of element `4` in `[3, 1, 2, 4, 5]`
   ➤ **Method:** `index()`

7. Count how many times `2` appears in `[3, 1, 2, 4, 5]`
   ➤ **Method:** `count()`

8. Sort `[3, 1, 2, 4, 5]` in ascending order → `[1, 2, 3, 4, 5]`
   ➤ **Method:** `sort()`

9. Reverse `[1, 2, 3, 4, 5]` → `[5, 4, 3, 2, 1]`
   ➤ **Method:** `reverse()`

10. Make a shallow copy of `[5, 4, 3, 2, 1]`
    ➤ **Method:** `copy()`

11. Clear all elements from `[5, 4, 3, 2, 1]`
    ➤ **Method:** `clear()`

---

### 12. Remove the prefix `"un"` from the string `"unhappy"` → `"happy"`

➤ **Method:** `removeprefix()` (Python 3.9+)

```python
print("unhappy".removeprefix("un"))  # Output: 'happy'
```