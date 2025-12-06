# 🚀 **DSA for Python Developers**


# 🎯 LIST OF DSAL INTERVIEW QUESTIONS

1. **Two Sum** → Hash map, O(1) lookup
2. **Reverse Linked List** → 3 pointers
3. **Valid Parentheses** → Stack
4. **Merge Two Sorted Lists** → Two pointers
5. **Binary Search** → Mid logic
6. **BFS / DFS** → Queue / Recursion
7. **Level Order Traversal** → BFS + queue
8. **Longest Common Prefix** → shrink prefix
9. **Find Missing Number** → sum formula
10. **Move Zeroes** → two pointer
11. **Sliding Window Max** → deque
12. **Longest Substring Without Repeat** → set + window
13. **Frequency Count** → Counter
14. **Rotate Array** → reverse technique
15. **Kth Largest Element** → min-heap

**(Explanation + Practical Questions + Clean Solutions)**

---

# 1️⃣ **Arrays / Lists**

### ✅ **What it is**

Ordered collection, fast indexing (O(1)), dynamic resizing.

### 🎯 **When used**

* Sliding window
* Searching
* Two pointer problems

---

### ⭐ **Interview Question: Two Sum**

**Find 2 numbers whose sum equals target.**

#### ✔️ Approach

Use a hash map to store seen numbers.

#### ✔️ Code

```python
def twoSum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        if target - n in seen:
            return [seen[target - n], i]
        seen[n] = i
```

---

### ⭐ **Interview Question: Move Zeroes**

Place all zeroes at end without changing non-zero order.

```python
def moveZeroes(nums):
    pos = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[pos] = nums[i]
            pos += 1
    while pos < len(nums):
        nums[pos] = 0
        pos += 1
```

---

### ⭐ **Interview Question: Rotate Array**

Rotate right by `k`.

```python
def rotate(nums, k):
    k %= len(nums)
    nums.reverse()
    nums[:k] = reversed(nums[:k])
    nums[k:] = reversed(nums[k:])
```

---

---

# 2️⃣ **Strings**

### 🚀 **When used**

* Palindromes
* Substring problems
* Pattern matching

---

### ⭐ **Interview Question: Longest Substring Without Repeating Characters**

#### ✔️ Approach

Use sliding window + set.

```python
def lengthOfLongestSubstring(s):
    seen = set()
    l = res = 0
    for r in range(len(s)):
        while s[r] in seen:
            seen.remove(s[l])
            l += 1
        seen.add(s[r])
        res = max(res, r-l+1)
    return res
```

---

### ⭐ **Interview Question: Longest Common Prefix**

```python
def longestCommonPrefix(strs):
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
        if not prefix:
            return ""
    return prefix
```

---

---

# 3️⃣ **Hash Map / Hashing**

### 🚀 Why important?

Most asked DSA tool for Python developer (dict & set)
Used for fast lookup: O(1)

---

### ⭐ **Interview Question: Count Frequency of Elements**

```python
from collections import Counter
freq = Counter([1,2,2,3,3,3])
```

---

### ⭐ **Missing Number (0 to n)**

```python
def missingNumber(nums):
    n = len(nums)
    return n*(n+1)//2 - sum(nums)
```

---

---

# 4️⃣ **Stack**

### 🚀 Used for

* Valid parentheses
* Undo/Redo
* DFS

---

### ⭐ **Interview Question: Valid Parentheses**

```python
def isValid(s):
    stack = []
    pairs = {')':'(', ']':'[', '}':'{'}
    for ch in s:
        if ch in "([{":
            stack.append(ch)
        else:
            if not stack or stack.pop() != pairs[ch]:
                return False
    return not stack
```

---

---

# 5️⃣ **Queue (BFS)**

### 🚀 Used for

* BFS in trees & graphs
* Level-order traversal

---

### ⭐ **Level Order Traversal (Tree BFS)**

```python
from collections import deque

def levelOrder(root):
    if not root: return []
    q = deque([root])
    result = []

    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        result.append(level)
    return result
```

---

---

# 6️⃣ **Linked List**

### 🚀 Why used?

Efficient insert/delete
Used in interviews frequently.

---

### ⭐ **Interview Question: Reverse Linked List**

```python
def reverseList(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev
```

---

### ⭐ **Merge Two Sorted Lists**

```python
def mergeTwoLists(l1, l2):
    dummy = tail = ListNode()
    while l1 and l2:
        if l1.val < l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 or l2
    return dummy.next
```

---

---

# 7️⃣ **Trees (DFS + BFS)**

### 🚀 Traversal Types

* **DFS:** Preorder, Inorder, Postorder
* **BFS:** Level order

---

### ⭐ **Binary Tree DFS Example**

```python
def dfs(root):
    if not root:
        return
    dfs(root.left)
    dfs(root.right)
```

---

---

# 8️⃣ **Graphs**

### 🚀 Why used?

Used to solve real-world problems:

* Routes
* Networks
* Connected components

---

### ⭐ **Graph BFS / DFS**

```python
def bfs(graph, start):
    from collections import deque
    q = deque([start])
    visited = set([start])

    while q:
        node = q.popleft()
        for nei in graph[node]:
            if nei not in visited:
                visited.add(nei)
                q.append(nei)
```

---

---

# 9️⃣ **Heaps (Priority Queue)**

### 🚀 Why used?

* Kth largest element
* Scheduling
* Streams

---

### ⭐ **Kth Largest Element**

```python
import heapq

def findKthLargest(nums, k):
    heap = []
    for n in nums:
        heapq.heappush(heap, n)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]
```

---

---

# 🔟 **Binary Search**

### 🚀 Why used?

* Fast searching in sorted array
* O(log n)

---

### ⭐ **Binary Search Code**

```python
def binarySearch(arr, target):
    l, r = 0, len(arr)-1
    while l <= r:
        mid = (l+r)//2
        if arr[mid] == target:
            return mid
        if target < arr[mid]:
            r = mid - 1
        else:
            l = mid + 1
    return -1
```

---

---

# 1️⃣1️⃣ **Sliding Window**

### 🚀 Why used?

Used for:

* sum of window
* longest substring
* max in window

---

### ⭐ **Sliding Window Maximum**

```python
from collections import deque

def maxSlidingWindow(nums, k):
    q = deque()
    res = []

    for i, n in enumerate(nums):
        while q and nums[q[-1]] < n:
            q.pop()

        q.append(i)

        if q[0] == i-k:
            q.popleft()

        if i >= k-1:
            res.append(nums[q[0]])
    return res
```

---

---

# 1️⃣2️⃣ **Dynamic Programming (DP)**

### 🚀 Key idea

Solve small subproblems → store results → reuse → O(n)

---

### ⭐ **Fibonacci Using DP**

```python
from functools import lru_cache

@lru_cache(None)
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
```

---