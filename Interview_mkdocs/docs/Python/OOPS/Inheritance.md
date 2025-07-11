# 🧬 Python Inheritance – Full Guide (Easy to Understand)

---

## 🔰 What is Inheritance?

**Inheritance** allows a class (**child**) to use the **properties and methods** of another class (**parent**).
This promotes **code reuse** and helps build relationships between classes.

---

## 🧱 Why Use Inheritance?

✅ Avoid code duplication
✅ Reuse existing logic
✅ Create class hierarchies
✅ Easy to update and maintain

---

## 🔑 Syntax of Inheritance

```python
class Parent:
    # code

class Child(Parent):
    # inherits Parent's properties/methods
```

---

# 🧠 Types of Inheritance in Python

---

## 1. **Single Inheritance**

👉 One child class inherits from one parent class.

### ✅ Example:

```python
class Animal:
    def sound(self):
        print("Animal makes sound")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

d = Dog()
d.sound()  # From Animal
d.bark()   # From Dog
```

### 🖼️ Concept Diagram:

```
Animal ───▶ Dog
```

### ❓ Cross Questions:

* ✅ **Q:** Can the child class override a parent method?
  **A:** Yes, using the same method name.

* ✅ **Q:** Can the child use all methods of the parent?
  **A:** Yes, unless overridden.

* ✅ **Q:** What happens if the parent changes?
  **A:** All child classes will reflect the change if they don’t override it.
---

## 2. **Multiple Inheritance**

👉 A child class inherits from **more than one parent**.

### ✅ Example:

```python
class Father:
    def skills(self):
        print("Programming")

class Mother:
    def cooking(self):
        print("Cooking")

class Child(Father, Mother):
    def sports(self):
        print("Playing football")

c = Child()
c.skills()
c.cooking()
c.sports()
```

### 🖼️ Concept Diagram:

```
Father ─┐
        ├──▶ Child
Mother ─┘
```

### ❓ Cross Questions:

* ✅ **Q:** What if both parents have the same method?
  **A:** Python follows **Method Resolution Order (MRO)** — left to right.

* ✅ **Q:** Does Python support multiple inheritance directly?
  **A:** Yes.

* ✅ **Q:** How to resolve conflicts in method names?
  **A:** Use `super()` or explicit class call.

---

## 3. **Multilevel Inheritance**

👉 A child class inherits from a class that is **already derived from another class**.

### ✅ Example:

```python
class Grandparent:
    def origin(self):
        print("India")

class Parent(Grandparent):
    def surname(self):
        print("Patel")

class Child(Parent):
    def name(self):
        print("Dhruvish")

c = Child()
c.origin()
c.surname()
c.name()
```

### 🖼️ Concept Diagram:

```
Grandparent ─▶ Parent ─▶ Child
```

### ❓ Cross Questions:

* ✅ **Q:** How many levels of inheritance can Python handle?
  **A:** Technically unlimited, but usually 2–3 levels are practical.

* ✅ **Q:** Can the child access grandparent methods?
  **A:** Yes, unless overridden or hidden.

* ✅ **Q:** What happens if intermediate class overrides the method?
  **A:** The overridden method is used, unless the child overrides again.

---

## 4. **Hierarchical Inheritance**

👉 Multiple child classes inherit from the **same parent class**.

### ✅ Example:

```python
class Vehicle:
    def start(self):
        print("Engine started")

class Car(Vehicle):
    def drive(self):
        print("Driving a car")

class Bike(Vehicle):
    def ride(self):
        print("Riding a bike")

c = Car()
b = Bike()
c.start()
b.start()
```

### 🖼️ Concept Diagram:

```
       Vehicle
        /   \
     Car    Bike
```

### ❓ Cross Questions:

* ✅ **Q:** Can both child classes use the same parent method?
  **A:** Yes.

* ✅ **Q:** What if one child overrides the method?
  **A:** Only that child’s version will change.

* ✅ **Q:** Can you create an object of the parent class?
  **A:** Yes, unless it's abstract (using `abc` module).

---

## 5. **Hybrid Inheritance**

👉 A combination of more than one type of inheritance.

### ✅ Example (Multiple + Multilevel):

```python
class A:
    def method_a(self):
        print("A")

class B(A):
    def method_b(self):
        print("B")

class C:
    def method_c(self):
        print("C")

class D(B, C):
    def method_d(self):
        print("D")

obj = D()
obj.method_a()
obj.method_b()
obj.method_c()
obj.method_d()
```

### 🖼️ Concept Diagram:

```
   A ─▶ B ─┐
           ├──▶ D
       C ──┘
```

### ❓ Cross Questions:

* ✅ **Q:** Does Python handle hybrid inheritance?
  **A:** Yes, using **MRO**.

* ✅ **Q:** What’s the risk with hybrid inheritance?
  **A:** Method conflicts if multiple parents have the same method.

* ✅ **Q:** How can you resolve method conflicts?
  **A:** Using `super()` and MRO.

---

# ⚙️ `super()` Keyword

Used to call methods from the **parent class**.

### ✅ Example:

```python
class Parent:
    def show(self):
        print("Parent class")

class Child(Parent):
    def show(self):
        super().show()   # Call parent method
        print("Child class")

c = Child()
c.show()
```

### ❓ Cross Questions:

* ✅ **Q:** What if the parent method doesn't exist?
  **A:** `AttributeError` will be raised.

* ✅ **Q:** Is `super()` limited to only immediate parent?
  **A:** No, it follows the MRO chain.

---

# 📌 Method Overriding

Child class **overrides** a method from the parent with the **same name**.

```python
class Animal:
    def sound(self):
        print("Some sound")

class Cat(Animal):
    def sound(self):   # Overriding
        print("Meow")

c = Cat()
c.sound()  # Meow
```

### ❓ Cross Questions:

* ✅ **Q:** How do you access the parent’s version of the method?
  **A:** Use `super().method()`.

* ✅ **Q:** What happens if child doesn’t override?
  **A:** The parent’s method is used.

* ✅ **Q:** Can you override constructors (`__init__`)?
  **A:** Yes, and call parent constructor via `super().__init__()`.

---

# 🔎 Useful Functions

| Function                     | Description                             |
| ---------------------------- | --------------------------------------- |
| `super()`                    | Call parent class methods               |
| `isinstance(obj, Class)`     | Check if object is an instance of class |
| `issubclass(Class1, Class2)` | Check if Class1 is subclass of Class2   |

---

## 📖 Summary Table

| Type         | Description                   | Example Classes               |
| ------------ | ----------------------------- | ----------------------------- |
| Single       | One child inherits one parent | `Dog(**Animal**)`                 |
| Multiple     | One child, multiple parents   | `Child(Father, Mother)`       |
| Multilevel   | Chain of inheritance          | `Child(Parent(Grandparent))`  |
| Hierarchical | Multiple children, one parent | `Car(Vehicle), Bike(Vehicle)` |****
| Hybrid       | Mix of above types            | `D(B(A), C)`                  |

---