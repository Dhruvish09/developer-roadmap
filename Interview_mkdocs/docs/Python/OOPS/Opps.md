# 🧠 Python OOP Concepts – Explained Simply with Examples

---

## 🧱 1. **Class & Object**

### ✅ Concept:

* A **class** is a blueprint.
* An **object** is an actual thing created from the blueprint.

### 🔍 Example:

```python
class Car:
    def start(self):
        print("Car started")

# Object creation
my_car = Car()
my_car.start()
```

### ✅ Output:

```
Car started
```



---

## ⚙️ 2. **Constructor (`__init__`)**

### ✅ Concept:

* Special method called **automatically** when an object is created.
* Used to initialize values.

### 🔍 Example:

```python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, I’m {self.name}")

p = Person("Alice")
p.greet()
```

### ✅ Output:

```
Hello, I’m Alice
```

### 🧩 Problem:

Create a `Book` class that stores title and author and prints them.

### ✅ Solution:

```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def info(self):
        print(f"{self.title} by {self.author}")

b = Book("1984", "George Orwell")
b.info()
```

### ✅ Output:

```
1984 by George Orwell
```

---

## 🔐 3. **Encapsulation**

### ✅ Concept:

* Hiding internal details using **private variables/methods**.
* Achieved using `self.__var` (double underscore).

### 🔍 Example:

```python
class BankAccount:
    def __init__(self):
        self.__balance = 0  # private

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

acct = BankAccount()
acct.deposit(500)
print(acct.get_balance())  # 500
```

### ✅ Output:

```
500
```

### 🧩 Problem:

Restrict direct access to a student's marks and allow only through method.

### ✅ Solution:

```python
class Student:
    def __init__(self):
        self.__marks = 0

    def set_marks(self, m):
        self.__marks = m

    def get_marks(self):
        return self.__marks

s = Student()
s.set_marks(90)
print(s.get_marks())
```

### ✅ Output:

```
90
```

---

## 🎭 4. **Abstraction**

### ✅ Concept:

* Hiding complex logic; **showing only what's necessary**.
* Done using **abstract classes** (`abc` module).

### 🔍 Example:

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, r):
        self.r = r

    def area(self):
        return 3.14 * self.r * self.r

c = Circle(5)
print(c.area())
```

### ✅ Output:

```
78.5
```

### 🧩 Problem:

Create an abstract `Appliance` class with method `turn_on()`.

### ✅ Solution:

```python
from abc import ABC, abstractmethod

class Appliance(ABC):
    @abstractmethod
    def turn_on(self):
        pass

class Fan(Appliance):
    def turn_on(self):
        print("Fan is ON")

f = Fan()
f.turn_on()
```

### ✅ Output:

```
Fan is ON
```

> We can implement the class directly without `ABC`, but `ABC` and `@abstractmethod` are used to enforce a contract. They ensure that every subclass must implement required methods. This prevents silent bugs and improves code safety in large-scale applications.

---

## 🔄 5. **Inheritance**

### ✅ Concept:

* A child class **inherits** properties from a parent class.

### 🔍 Example:

```python
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

d = Dog()
d.speak()
```

### ✅ Output:

```
Dog barks
```

---

## 🧬 6. **Polymorphism**

### ✅ Concept:

* Same method name, **different behavior**.
* Achieved via:

  * Method Overriding
  * Duck Typing

### 🔍 Example (Overriding):

```python
class Bird:
    def sound(self):
        print("Chirp")

class Duck(Bird):
    def sound(self):
        print("Quack")

b = Duck()
b.sound()  # Quack
```

### ✅ Output:

```
Quack
```

### 🔍 Example (Duck Typing):

```python
class Cat:
    def speak(self):
        print("Meow")

class Dog:
    def speak(self):
        print("Bark")

def animal_sound(animal):
    animal.speak()

animal_sound(Cat())
animal_sound(Dog())
```

### ✅ Output:

```
Meow
Bark
```

---

## 📚 Summary Table

| Concept       | Purpose                       | Keyword/Tool             | Example Class   |
| ------------- | ----------------------------- | ------------------------ | --------------- |
| Class/Object  | Blueprint vs Instance         | `class`, `object`        | `Car`, `Person` |
| Constructor   | Init values on creation       | `__init__()`             | `Person("Bob")` |
| Encapsulation | Hide sensitive data           | `__var`, methods         | `BankAccount`   |
| Abstraction   | Show essential, hide details  | `ABC`, `@abstractmethod` | `Shape`         |
| Inheritance   | Reuse behavior from parent    | `class Child(Parent)`    | `Dog(Animal)`   |
| Polymorphism  | Same interface, different use | Override, Duck Typing    | `speak()`       |

---


## 7. Instance Method vs `@classmethod` vs `@staticmethod`

1️⃣ **Instance Method**

Why / When to use :--

* When you need to work with **object (instance) data**
* Uses `self`

```python
class User:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello {self.name}"
```

---

2️⃣ **@classmethod**

Why / When to use:-- 

* When logic is related to the **class**, not a single object
* Used for:

  * Factory methods
  * Modifying class variables
* Uses `cls`

```python
class User:
    user_count = 0

    def __init__(self):
        User.user_count += 1

    @classmethod
    def total_users(cls):
        return cls.user_count
```

✔ Can access **class variables**
✔ Cannot access instance data directly

---

3️⃣ **@staticmethod**

👉 Utility function inside a class

Why / When to use:--

* When method:

  * Does NOT need `self`
  * Does NOT need `cls`
* Just logically belongs to the class

```python
class MathUtils:
    @staticmethod
    def add(a, b):
        return a + b
```

✔ No access to instance or class data
✔ Just a helper function

---

🔥 What if I **don’t use** `@staticmethod` or `@classmethod`?

❌ Case 1: Not using `@staticmethod`

```python
class Math:
    def add(a, b):   # ❌ error
        return a + b

Math.add(2, 3)
```

❌ Error because Python expects `self`

✔ Fix → use `@staticmethod`

---

❌ Case 2: Not using `@classmethod`

```python
class User:
    count = 0

    def total(cls):   # ❌ wrong
        return cls.count
```

❌ `cls` is not automatically passed

✔ Fix → use `@classmethod`

---