## **1. Strings**

| Exercise                  | Input                        | Output                   |
| ------------------------- | ---------------------------- | ------------------------ |
| Reverse string            | `"Python"`                   | `"nohtyP"`               |
| Palindrome check          | `"level"`                    | `True`                   |
| Count vowels & consonants | `"Interview"`                | `Vowels:4, Consonants:5` |
| Remove duplicates         | `"programming"`              | `"progamin"`             |
| Most frequent character   | `"mississippi"`              | `'i' appears 4 times`    |
| Extract numbers           | `"abc123xyz"`                | `"123"`                  |
| String formatting         | `"John"`, `30`               | `"Name: John, Age:30"`   |
| Replace substring         | `"I like Java"` → `"Python"` | `"I like Python"`        |
| Strip whitespaces         | `"  hello  "`                | `"hello"`                |
| Convert cases             | `"Python"`                   | `"PYTHON", "python"`     |
| Count words               | `"This is a test"`           | `4`                      |
| Find substring index      | `"Interview"` → `"view"`     | `2`                      |

---

## **2. Lists & Tuples**

| Exercise                           | Input                 | Output                |
| ---------------------------------- | --------------------- | --------------------- |
| Remove duplicates                  | `[1,2,2,3,4,4,5]`     | `[1,2,3,4,5]`         |
| Sort list of tuples by 2nd element | `[(1,3),(2,1),(4,2)]` | `[(2,1),(4,2),(1,3)]` |
| Flatten nested list                | `[1,[2,3],[4,[5,6]]]` | `[1,2,3,4,5,6]`       |
| List comprehension even numbers    | `[1,2,3,4,5,6]`       | `[2,4,6]`             |
| Sum elements                       | `[1,2,3,4,5]`         | `15`                  |
| Max & min                          | `[10,20,5,40]`        | `Max:40, Min:5`       |
| Concatenate lists                  | `[1,2] + [3,4]`       | `[1,2,3,4]`           |
| Tuple unpacking & swap             | `a=5,b=10`            | `a=10,b=5`            |
| Reverse list                       | `[1,2,3,4]`           | `[4,3,2,1]`           |
| Count occurrence                   | `[1,2,2,3,2]` → `2`   | `3`                   |

---

## **3. Dictionaries**

| Exercise                         | Input                          | Output                |
| -------------------------------- | ------------------------------ | --------------------- |
| Count frequency in list          | `['a','b','a','c','b','a']`    | `{'a':3,'b':2,'c':1}` |
| Merge dictionaries               | `{'a':1,'b':2}, {'b':3,'c':4}` | `{'a':1,'b':3,'c':4}` |
| Key with max value               | `{'a':10,'b':25,'c':15}`       | `'b'`                 |
| Nested dictionary access         | `{'a':{'b':2}}`                | `2`                   |
| Dictionary comprehension squares | `[1,2,3]`                      | `{1:1,2:4,3:9}`       |
| Swap keys & values               | `{'x':1,'y':2}`                | `{1:'x',2:'y'}`       |
| Sort dictionary by value         | `{'a':2,'b':1,'c':3}`          | `{'b':1,'a':2,'c':3}` |
| Get keys as list                 | `{'a':1,'b':2}`                | `['a','b']`           |
| Merge & sum values if duplicate  | `{'a':1}, {'a':3,'b':2}`       | `{'a':4,'b':2}`       |

---

## **4. Sets**

| Exercise                    | Input                 | Output                                      |
| --------------------------- | --------------------- | ------------------------------------------- |
| Union & Intersection        | `A={1,2,3},B={2,3,4}` | `Union={1,2,3,4}, Intersection={2,3}`       |
| Symmetric difference        | `A={1,2,3},B={3,4,5}` | `{1,2,4,5}`                                 |
| Remove duplicates from list | `[1,2,2,3,3,3]`       | `{1,2,3}`                                   |
| Subset / superset           | `A={1,2},B={1,2,3}`   | `True`                                      |
| Add & remove element        | `A={1,2}`             | After add 3 → `{1,2,3}`, remove 2 → `{1,3}` |

---

## **5. Functions & Lambda**

| Exercise                       | Input                    | Output                        |
| ------------------------------ | ------------------------ | ----------------------------- |
| Factorial recursive            | `5`                      | `120`                         |
| Fibonacci series               | `7`                      | `[0,1,1,2,3,5,8]`             |
| Prime check                    | `17`                     | `True`                        |
| Lambda filter even             | `[1,2,3,4,5,6]`          | `[2,4,6]`                     |
| Map square                     | `[1,2,3]`                | `[1,4,9]`                     |
| Reduce sum                     | `[1,2,3,4]`              | `10`                          |
| Decorator logger               | `function print("Hi")`   | `Function executed: print_hi` |
| Recursive sum of list          | `[1,2,3,4]`              | `10`                          |
| Palindrome function            | `"racecar"`              | `True`                        |
| Function with *args & **kwargs | `sum_all(1,2,3,x=4,y=5)` | `Sum=15`                      |

---

## **6. File Handling & JSON**

| Exercise        | Input               | Output                         |
| --------------- | ------------------- | ------------------------------ |
| Read text file  | `"sample.txt"`      | `Contents of file`             |
| Write text file | `"Hello World"`     | File contains `"Hello World"`  |
| Append file     | `"New Line"`        | File updated with `"New Line"` |
| Count lines     | `"sample.txt"`      | `Lines: 10`                    |
| Read JSON       | `'{"name":"John"}'` | `{'name':'John'}`              |
| Write JSON      | `{'x':1}`           | File contains `{"x":1}`        |

---

## **7. Object-Oriented Programming (OOP)**

| Exercise               | Input                   | Output                           |
| ---------------------- | ----------------------- | -------------------------------- |
| Create class & object  | `Person("John",30)`     | `Person: John, Age:30`           |
| Magic method **str**   | `print(Person)`         | `"Person: John, Age:30"`         |
| Inheritance            | `class Student(Person)` | `Student object inherits Person` |
| Class & static methods | `Person.info()`         | `"This is Person class"`         |
| Property decorator     | `person.age`            | `30`                             |
| Operator overloading   | `p1+p2`                 | `Sum of ages / combined object`  |
| Encapsulation          | `_salary=5000`          | Access via getter/setter         |

---

## **8. Iterators & Generators**

| Exercise             | Input                     | Output         |
| -------------------- | ------------------------- | -------------- |
| Iterator example     | `iter([1,2,3])`           | `1,2,3`        |
| Generator Fibonacci  | `n=5`                     | `[0,1,1,2,3]`  |
| Infinite generator   | `start=0`                 | `0,1,2,...`    |
| Generator expression | `[x*x for x in range(5)]` | `[0,1,4,9,16]` |
| Yield squares        | `5`                       | `0,1,4,9,16`   |

---

## **9. Error Handling & Logging**

| Exercise            | Input                  | Output                                   |
| ------------------- | ---------------------- | ---------------------------------------- |
| Try/Except          | `int("abc")`           | `ValueError handled`                     |
| Multiple exceptions | `int("a") / 0`         | `ValueError & ZeroDivisionError handled` |
| Custom exception    | `raise MyError()`      | `"Custom Exception Raised"`              |
| Assertion           | `x=5, assert x>10`     | `AssertionError`                         |
| Logging info        | `logging.info("Test")` | `"INFO: Test"`                           |
| Context manager     | `with open("f") as f:` | `File auto-closed`                       |

---

## **10. Modules & Misc**

| Exercise               | Input                       | Output                    |
| ---------------------- | --------------------------- | ------------------------- |
| Random choice          | `[1,2,3]`                   | `1 or 2 or 3`             |
| Date difference        | `'2026-01-01','2026-02-01'` | `31 days`                 |
| Collections Counter    | `[1,2,2,3,3,3]`             | `Counter({3:3,2:2,1:1})`  |
| itertools combinations | `[1,2,3],2`                 | `[(1,2),(1,3),(2,3)]`     |
| Threading example      | `function print("Hi")`      | `"Hi"` in separate thread |
| Timeit performance     | `sum(range(100))`           | Execution time in seconds |


---

# **🔥 Most Asked Practical Python Problems (Interview-Focused)**

| Problem                                       | Input                        | Expected Output                              |
| --------------------------------------------- | ---------------------------- | -------------------------------------------- |
| **Move all zeros to end**                     | `[0,1,0,3,12]`               | `[1,3,12,0,0]`                               |
| **Two-pointer: Two sum sorted array**         | `[1,2,3,4,6], target=6`      | `[1,3]` (indices or values adding to target) |
| **Reverse words in string**                   | `"the sky is blue"`          | `"blue is sky the"`                          |
| **Check anagram**                             | `"listen", "silent"`         | `True`                                       |
| **Longest substring without repeating chars** | `"abcabcbb"`                 | `3` (`"abc"`)                                |
| **Maximum sum subarray (Kadane)**             | `[-2,1,-3,4,-1,2,1,-5,4]`    | `6` (`[4,-1,2,1]`)                           |
| **Merge two sorted lists**                    | `[1,3,5], [2,4,6]`           | `[1,2,3,4,5,6]`                              |
| **Remove duplicates from sorted list**        | `[1,1,2,2,3]`                | `[1,2,3]`                                    |
| **Rotate array by k positions**               | `[1,2,3,4,5], k=2`           | `[4,5,1,2,3]`                                |
| **Check palindrome number**                   | `121`                        | `True`                                       |
| **Find first non-repeating char**             | `"swiss"`                    | `'w'`                                        |
| **Two-pointer: container with most water**    | `[1,8,6,2,5,4,8,3,7]`        | `49`                                         |
| **Intersection of two arrays**                | `[1,2,2,1], [2,2]`           | `[2,2]`                                      |
| **Sliding window max sum of size k**          | `[1,3,2,5,1], k=3`           | `Max sum=10` (`[3,2,5]`)                     |
| **Square sorted array**                       | `[-4,-1,0,3,10]`             | `[0,1,9,16,100]`                             |
| **Product of array except self**              | `[1,2,3,4]`                  | `[24,12,8,6]`                                |
| **Valid parentheses**                         | `"({[]})"`                   | `True`                                       |
| **Merge intervals**                           | `[[1,3],[2,6],[8,10]]`       | `[[1,6],[8,10]]`                             |
| **Top k frequent elements**                   | `[1,1,1,2,2,3], k=2`         | `[1,2]`                                      |
| **String to integer (atoi)**                  | `"  -42"`                    | `-42`                                        |
| **Longest common prefix**                     | `["flower","flow","flight"]` | `"fl"`                                       |
| **Subarray with given sum**                   | `[1,2,3,7,5], sum=12`        | `[2,3,7]`                                    |
| **Rotate matrix 90°**                         | `[[1,2],[3,4]]`              | `[[3,1],[4,2]]`                              |
| **Spiral matrix traversal**                   | `[[1,2,3],[4,5,6],[7,8,9]]`  | `[1,2,3,6,9,8,7,4,5]`                        |
| **Valid sudoku check**                        | `9x9 board`                  | `True/False`                                 |
| **Reverse linked list**                       | `1→2→3→None`                 | `3→2→1→None`                                 |
| **Detect cycle in linked list**               | `1→2→3→2`                    | `True`                                       |
| **Binary search**                             | `[1,2,3,4,5], target=3`      | `2` (index)                                  |
| **Find missing number in array**              | `[3,0,1]`                    | `2`                                          |
| **Find duplicates**                           | `[1,3,4,2,2]`                | `[2]`                                        |
| **Minimum window substring**                  | `"ADOBECODEBANC", "ABC"`     | `"BANC"`                                     |

---