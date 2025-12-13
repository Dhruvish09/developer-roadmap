# MySQL Full Guide – Beginner to Intermediate

## 🧠 What is MySQL?

MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) to manage and manipulate data.

---

## 🧠 What is a Database?

A **database** is an organized collection of structured data, generally stored and accessed electronically.

---

## 🧠 What is DBMS?

**DBMS (Database Management System)** is software used to create and manage databases. It enables users to store, retrieve, and manipulate data efficiently.

---

## 🧠 What is a Relational Database?

A **Relational Database** stores data in tables with rows and columns and defines relationships among them using keys.

---

## 🧱 MySQL Constraints

* `NOT NULL`
* `UNIQUE`
* `DEFAULT`
* `CHECK`
* `FOREIGN KEY`
* `PRIMARY KEY`

---

## 📦 Create Table

```sql
CREATE TABLE users (
    id INT UNSIGNED,
    name VARCHAR(100),
    email VARCHAR(150),
    password VARCHAR(100),
    mobile VARCHAR(15),
    gender ENUM('M', 'D', 'Y'),
    dob DATE,
    status BOOLEAN,
    user_detail_id INT UNSIGNED,
    FOREIGN KEY (user_detail_id) REFERENCES user_details(id)
);

CREATE TABLE student (
    id INT NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    age TINYINT CHECK (age >= 18),
    status BOOLEAN DEFAULT 1
);
```

---

## 📥 Insert Data

```sql
INSERT INTO users (id, name, email, mobile, gender, dob, status)
VALUES
(2, 'Maitri', 'patelmaitri612000@gmail.com', '6353573222', 'F', '2000-01-09', 1),
(3, 'Kanan', 'patelkanan@gmail.com', '8488861415', 'F', '2000-02-06', 1);
```

---

## 📤 Select Data

```sql
SELECT * FROM users WHERE gender = 'F';
SELECT name AS Username, email, mobile FROM users WHERE gender = 'F';
```

---

## 🔧 Update and Delete Data

```sql
UPDATE student SET age = 25 WHERE id = 4;
DELETE FROM student WHERE id = 4;
DELETE FROM student WHERE id IN (4,5,6);
```

---

## 🔎 SQL Operators

### `IN` / `NOT IN`

```sql
SELECT * FROM users WHERE gender IN ('M','F');
SELECT * FROM users WHERE gender NOT IN ('M','F');
```

### `BETWEEN` / `NOT BETWEEN`

```sql
SELECT * FROM students WHERE age BETWEEN 10 AND 20;
SELECT * FROM students WHERE age NOT BETWEEN 10 AND 20;
```

---

## 🔍 LIKE Operator

* `%`: Zero or more characters
* `_`: Single character

```sql
SELECT * FROM users WHERE name LIKE 'a%';  -- Starts with "a"
SELECT * FROM users WHERE name LIKE '%a';  -- Ends with "a"
SELECT * FROM users WHERE name LIKE '%a%'; -- Contains "a"
SELECT * FROM users WHERE name LIKE 'a%o'; -- Starts with "a" and ends with "o"
```

---

## 🔢 ORDER BY and DISTINCT

```sql
SELECT * FROM users ORDER BY name ASC;
SELECT DISTINCT gender FROM users;
```

---

## ❓ NULL and NOT NULL

```sql
SELECT * FROM users WHERE mobile IS NULL;
SELECT * FROM users WHERE mobile IS NOT NULL;
```

---

## 🔢 LIMIT and OFFSET

```sql
SELECT * FROM users LIMIT 5;
SELECT * FROM users LIMIT 5 OFFSET 1;
```

---

## 🔣 Aggregate Functions

```sql
SELECT COUNT(name) FROM users;
SELECT SUM(age) FROM student;
SELECT AVG(age) FROM student;
SELECT MIN(age) FROM student;
SELECT MAX(age) FROM student;
```

---

## 🧾 COMMIT and ROLLBACK

* `COMMIT`: Saves all changes made in the transaction.
* `ROLLBACK`: Undoes all changes made in the current transaction.

---

## 🔑 Primary and Foreign Key

```sql
CREATE TABLE student (
    id INT NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    city_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (city_id) REFERENCES city(cid)
);
```

---

## 🔗 Joins

* **INNER JOIN**: Only matching rows
* **LEFT JOIN**: All from left + matches from right
* **RIGHT JOIN**: All from right + matches from left
* **FULL JOIN**: All rows from both
* **SELF JOIN**: Table joins with itself

```sql
SELECT * FROM students INNER JOIN city ON students.city_id = city.id;
```

---

## ❌ TRUNCATE, DELETE, DROP

```sql
DELETE FROM Emp;
TRUNCATE TABLE emp;
DROP TABLE emp;
```

---

## 🔒 SQL Constraints

* `NOT NULL`
* `CHECK`
* `DEFAULT`
* `INDEX`
* `UNIQUE`
* `PRIMARY`
* `FOREIGN`

---

## 📚 Subsets of SQL

* **DDL**: CREATE, ALTER, DROP, TRUNCATE
* **DML**: SELECT, INSERT, UPDATE, DELETE
* **DCL**: GRANT, REVOKE
* **TCL**: COMMIT, ROLLBACK, SAVEPOINT

---

## 🔄 Types of Relationships

* One-to-One
* One-to-Many / Many-to-One
* Many-to-Many
* Self-referencing

---

## 🧮 RDBMS vs DBMS

* RDBMS stores data in tables with relationships.
* DBMS does not enforce relationships.

---

## 🔍 NULL vs 0 vs Blank

* `NULL`: Unknown / no value
* `0`: Numeric value
* `' '`: Blank string (valid string)

---

## 🔧 Normalization

Minimizes redundancy. Forms:

* 1NF, 2NF, 3NF, BCNF, etc.

## 🔧 Denormalization

Adds redundancy for faster reads (opposite of normalization).

---

## 🧮 GROUP BY and HAVING

```sql
SELECT customer_id, SUM(quantity) as total_quantity
FROM orders
GROUP BY customer_id
HAVING SUM(quantity) > 100;
```

---

## 🗃️ Practice With Multiple Tables

Use JOINs, GROUP BY, subqueries, and filtering conditions across multiple tables to solve real-world queries.

---

## 🎯 Real Project Challenges

* **Explain big challenge faced in a project**
* **Draw implemented architecture (e.g. with Kafka)**

---

## 🔐 Why JWT Token Is Not Secure?

* It can be decoded (even if signed)
* If secret key is compromised, all tokens are exposed
* Long expiration tokens pose higher risks
* Doesn't support revocation (unless manually handled)