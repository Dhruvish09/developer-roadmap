# ✅ PYTHON INTERVIEW Q\&A (THEORY)

---

## 🔹 1. Difference Between List and Dictionary

**List**: Ordered collection of items, indexed by integers.
**Dictionary**: Unordered collection of key-value pairs.

---

## 🔹 2. Difference Between `append()` and `extend()`

* `append()`: Adds a single element to the end of a list.
* `extend()`: Adds elements from another iterable to the end of the list.

---

## 🔹 3. Can We Use List/Tuple as Dict Key?

Only **immutable types** can be used as dictionary keys.

* ✅ Tuples can be keys (if they don’t contain mutable elements like lists).
* ❌ Lists can't be keys.

---

## 🔹 4. Why Python is Dynamically Typed? (Duck Typing)

* No need to declare variable types explicitly.
* Variables take type based on the assigned value at runtime.
* "If it walks like a duck and quacks like a duck, it's a duck."

---

## 🔹 5. Why Python is an Interpreted Language?

* Executes line-by-line using an interpreter.
* No separate compilation step.
* Errors stop execution immediately and show messages.

---

## 🔹 6. What is Lambda Function?

* Anonymous function defined with `lambda` keyword.
* Syntax: `lambda arguments: expression`

---

## 🔹 7. Call by Value vs Call by Reference in Python

* Python uses **Call by Object Reference**.
* Mutable types (like list) reflect changes, immutable types don’t.

---

## 🔹 8. What is MRO (Method Resolution Order)?

* Used in **multiple inheritance** to determine method lookup order.
* Python uses **C3 Linearization**: Bottom to top, left to right.

---

## 🔹 9. What If We Don’t Use `with` Statement for Files?

**With statement handles:**

* Automatic file closing via `__enter__()` and `__exit__()`.
* Without `with`, manual `close()` required.

---

## 🔹 10. What is OOPS in Python?

**Object-Oriented Programming System:**

* Concepts: Class, Object, Inheritance, Polymorphism, Encapsulation, Abstraction
* **Constructor:** `__init__()` method auto-runs when object created.

---

## 🔹 11. Authentication vs Authorization

* **Authentication**: Verify identity (e.g., login)
* **Authorization**: Grant access (e.g., admin role)
* Tools: JWT, RBAC

---

## 🔹 12. How Django Migrations Work?

1. Modify `models.py`
2. Run `makemigrations`
3. Review generated files
4. Run `migrate` to apply
5. Track with `showmigrations`
6. DB Schema Updated

---

## 🔹 13. Django ORM Working

* `Product.objects.all()` → Translates to `SELECT * FROM product`
* Converts Python code to SQL behind the scenes

---

## 🔹 14. ORM vs SQL

**ORM Pros:**

* Easy syntax, database portability
  **ORM Cons:**
* Slower for complex queries

**SQL Pros:**

* Faster, full control
  **SQL Cons:**
* Less portable, complex

---

## 🔹 15. Type of Django ORM

* Uses **Active Record Pattern**
* DB rows map to Python objects

---

## 🔹 16. What is Loading in SQL?

* Loading = Inserting external data into tables

---

## 🔹 17. What is Indexing in SQL?

* Speeds up data retrieval by indexing columns

---

## 🔹 18. JWT Token: What, Why, How?

**What**: JSON Web Token for authentication
**Why**: Stateless, secure, compact
**How it works:**

1. Header
2. Payload
3. Signature (encoded + signed)

---

## 🔹 19. What is Caching?

* Store data temporarily to avoid recalculation or re-fetching

---

## 🔹 20. `HttpResponse` vs `JsonResponse`

* `HttpResponse`: Send HTML/Plain Text
* `JsonResponse`: Send structured JSON data

---

## 🔹 21. What is Middleware?

* Middle layer between request & response
* Django Middleware Types:

  * `AuthenticationMiddleware`
  * `SessionMiddleware`
  * `CsrfViewMiddleware`

---

## 🔹 22. What is CSRF Token?

**CSRF = Cross Site Request Forgery**

* Protects from unauthorized actions by embedding a token in forms
* Validated server-side

---

## 🔹 23. Why Functions?

* Promote **abstraction**, **reusability**, and **scalability**

---

## 🔹 24. How to Handle DB Schema in Live Projects?

1. Use version control for schema (e.g., Flyway)
2. Always take backups
3. Test on staging before applying to production

---

## 🔹 25. Code First vs DB First

**Code First**:

* Write models → Generate DB via migrations

**DB First**:

* Start with DB schema → Generate code (models)

---

## 🔹 26. What is Microservice?

> *\[You can expand this section: A software design pattern...]*

---

## 🔹 27. Time Complexity vs Space Complexity

* Depends on project need
* Optimize for whichever is more critical

---

## 🔹 28. `range()` vs `xrange()`

**range** (Python 3): returns list
**xrange** (Python 2): returns generator (lazy loading)

---

## 🔹 29. `.py` vs `.pyc`

> *\[You can expand: `.py` is source, `.pyc` is compiled bytecode]*

---

## 🔹 30. Python: Interpreted or Compiled?

> *Python is interpreted; explain both types of execution environments.*

---

## 🔹 31. `a == b` vs `a is b`

* `==` checks **value equality**
* `is` checks **identity** (same memory address)

---

## 🔹 32. What is Substring?

* A part of a string extracted using slicing

---

## 🔹 33. How to Improve API Response Speed?

> *Add techniques: caching, async, DB indexing, pagination...*

---

## 🔹 34. IST to UTC Conversion

```python
from datetime import datetime
import pytz

ist = pytz.timezone('Asia/Kolkata')
utc = pytz.utc

dt = ist.localize(datetime.now())
print("UTC:", dt.astimezone(utc))
```
## 35. Deep copy vs Shallow Copy

**Shallow Copy**

* Copies **only the main object**
* **Nested objects are shared**
* Change in nested data affects both

```python
import copy

my_list = [1, 2, [3, 4], 5, 6]

shallow_copy = copy.copy(my_list)

# Change nested list
shallow_copy[2][0] = 99

print(my_list)        # [1, 2, [99, 4], 5, 6]
print(shallow_copy)   # [1, 2, [99, 4], 5, 6]  ← affected
```

---

**Deep Copy**

* Copies **main object + nested objects**
* Fully **independent copy**
* Changes do NOT affect each other

```python
import copy

my_list = [1, 2, [3, 4], 5, 6]

deep_copy = copy.deepcopy(my_list)

# Change nested list
deep_copy[2][0] = 99

print(my_list)      # [1, 2, [3, 4], 5, 6]
print(deep_copy)    # [1, 2, [99, 4], 5, 6]  ← not affected
```