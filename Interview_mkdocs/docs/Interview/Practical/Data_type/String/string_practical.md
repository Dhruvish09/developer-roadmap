# 🧵 Python String Practicals – Interview Friendly

---

## 1️⃣ Reverse a String

```python
def reverse_string(my_string):
    res = ""
    for i in my_string:
        res = i + res
    return res

print("Reversed String:", reverse_string("Dhruvish patel"))
```

---

## 2️⃣ Count the Number of Vowels in a String

```python
def count_vowels(input_string):
    vowels = "aeiouAEIOU"
    return sum(1 for char in input_string if char in vowels)

print("Count of vowels:", count_vowels("Dhruvish patel"))
```

---

## 3️⃣ Find the Most Frequent Character in a String

```python
def most_frequent(my_string):
    freq = {}
    for char in my_string.replace(" ", ""):
        freq[char] = freq.get(char, 0) + 1
    return max(freq, key=freq.get)

print("Most frequent character:", most_frequent("DDhruvish patel"))
```

---

## 4️⃣ Find All Most Frequent Characters

```python
def all_max_frequent(input_string):
    freq = {}
    max_freq = 0
    for char in input_string:
        freq[char] = freq.get(char, 0) + 1
        max_freq = max(max_freq, freq[char])
    return [k for k, v in freq.items() if v == max_freq]

print("All most frequent characters:", all_max_frequent("Dhruvish from ahmedabad"))
```

---

## 5️⃣ Remove All Duplicates from a String

```python
def remove_duplicate(my_string):
    result = ""
    for char in my_string:
        if char not in result:
            result += char
    return result

print("Without duplicates:", remove_duplicate("Dhruvish pattel"))
```

---

## 6️⃣ Remove First Duplicate Only

```python
def remove_first_duplicate(string):
    seen = set()
    result = ''
    duplicate_skipped = False
    for char in string:
        if char not in seen:
            seen.add(char)
            result += char
        elif not duplicate_skipped:
            duplicate_skipped = True
        else:
            result += char
    return result

print(remove_first_duplicate("abcddefgghijjd"))  # 'abcdefgghijjd'
```

---

## 7️⃣ Capitalize First Letter in Each Word

```python
def capitalize_words(sentence):
    return ' '.join(word.capitalize() for word in sentence.split())

print(capitalize_words("dhruvish Patel from ahmedabad"))
```

### 🌀 Alternate Method

```python
print("dhruvish Patel from ahmedabad".title())
```

---

## 8️⃣ Count Occurrences of a Specific Substring

```python
def count_substring(string, substring):
    return string.count(substring)

print(count_substring("Hello, world! The world is round.", "world"))
```

---

## 9️⃣ First Non-Repeated Character

```python
def first_non_repeated_char(s):
    freq = {}
    for char in s:
        freq[char] = freq.get(char, 0) + 1
    for char in s:
        if freq[char] == 1:
            return char
    return None

print("First non-repeated character:", first_non_repeated_char("Dhruvish Patel"))
```

---

## 🔟 First 2 and Last 2 Characters of a String

```python
def format_string(s):
    return s[:2] + s[-2:] if len(s) >= 2 else ''

print(format_string("w3resource"))  # 'w3ce'
print(format_string("w3"))         # 'w3w3'
print(format_string(" w"))         # ''
```

---

## 1️⃣1️⃣ Swap First Two Characters of Two Strings

```python
def chars_mix_up(a, b):
    return b[:2] + a[2:] + " " + a[:2] + b[2:]

print(chars_mix_up('abc', 'xyz'))  # 'xyc abz'
```

---

## 1️⃣2️⃣ Append 'ing' or 'ly' Based on Conditions

```python
def modify_string(s):
    if len(s) < 3:
        return s
    if s.endswith("ing"):
        return s + "ly"
    return s + "ing"

print(modify_string("abc"))     # abcing
print(modify_string("string"))  # stringly
```

---

## 1️⃣3️⃣ Remove Character at Specific Index

```python
def remove_char_at_index(s, n):
    return s[:n] + s[n+1:]

print(remove_char_at_index("Dhruvish", 2))  # 'Dhrvvish'
```

---

## 1️⃣4️⃣ Swap First and Last Characters

```python
def swap_first_last(s):
    return s[-1] + s[1:-1] + s[0] if len(s) > 1 else s

print(swap_first_last("Dhruvish"))  # 'hhruvisD'
```

---

## 1️⃣5️⃣ Remove Characters at Odd Indexes

```python
def remove_odd_indices(s):
    return ''.join([char for i, char in enumerate(s) if i % 2 == 0])

print(remove_odd_indices("Dhruvish"))  # 'Druvh'
```


---

## 1️⃣6 Write a function that returns the longest substring without repeating characters.

```python
def longest_unique_substring(s):
    char_set = set()
    left = 0
    max_sub = ""

    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1

        char_set.add(s[right])

        if right - left + 1 > len(max_sub):
            max_sub = s[left:right + 1]

    return max_sub

print(longest_unique_substring("abcabcbb"))
```