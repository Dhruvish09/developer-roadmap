# ✅ MySQL & SQL Interview Guide (Markdown)

---

## 🔹 1. What is MySQL?

MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for managing and manipulating databases.

---

## 🔹 2. What is a Database?

A database is an organized collection of structured information or data, typically stored electronically in a computer system.

---

## 🔹 3. What is DBMS?

DBMS (Database Management System) is software that allows users to define, create, maintain, and control access to databases.

---

## 🔹 4. What is a Relational Database?

A relational database stores data in tables (rows and columns) and defines relationships between those tables using keys.

---

## 🔹 5. SQL Table Creation Examples

### Without Constraints:

```sql
CREATE TABLE users (
  id INT UNSIGNED,
  name VARCHAR(100),
  email VARCHAR(150),
  password VARCHAR(100),
  mobile VARCHAR(15),
  gender ENUM('M','D','Y'),
  dob DATE,
  status BOOLEAN,
  user_detail_id INT UNSIGNED,
  FOREIGN KEY (user_detail_id) REFERENCES user_details(id)
);
```

### With Constraints:

```sql
CREATE TABLE student (
  id INT NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  age TINYINT CHECK (age >= 18),
  status BOOLEAN DEFAULT 1
);
```

---

## 🔹 6. Insert Data

```sql
INSERT INTO users (id, name, email, mobile, gender, dob, status)
VALUES
(2, 'Maitri', 'patelmaitri612000@gmail.com', '6353573222', 'F', '2000-01-09', 1),
(3, 'Kanan', 'patelkanan@gmail.com', '8488861415', 'F', '2000-02-06', 1);
```

---

## 🔹 7. Select Data

```sql
SELECT * FROM users WHERE gender = 'F';
SELECT name AS 'Username', email, mobile FROM users WHERE gender = 'F';
```

---

## 🔹 8. Update & Delete Data

```sql
UPDATE student SET age = 25 WHERE id = 4;
DELETE FROM student WHERE id = 4;
DELETE FROM student WHERE id IN (4,5,6);
```

---

## 🔹 9. SQL Operators

```sql
-- IN
SELECT * FROM users WHERE gender IN ('M','F');
-- NOT IN
SELECT * FROM users WHERE gender NOT IN ('M','F');
-- BETWEEN
SELECT * FROM students WHERE age BETWEEN 10 AND 20;
-- NOT BETWEEN
SELECT * FROM students WHERE age NOT BETWEEN 10 AND 20;
```

---

## 🔹 10. LIKE Operator

```sql
-- % Wildcard
SELECT * FROM users WHERE name LIKE 'a%';   -- starts with 'a'
SELECT * FROM users WHERE name LIKE '%a';   -- ends with 'a'
SELECT * FROM users WHERE name LIKE '%a%';  -- contains 'a'
SELECT * FROM users WHERE name LIKE 'a%o';  -- starts with 'a' and ends with 'o'

-- _ Wildcard
SELECT * FROM Customers WHERE city LIKE '_n%';
SELECT * FROM Customers WHERE city LIKE 'n_%';
SELECT * FROM Customers WHERE city LIKE 'n__%';
SELECT * FROM Customers WHERE city LIKE 'L_nd__';
```

---

## 🔹 11. ORDER BY & DISTINCT

```sql
SELECT * FROM users ORDER BY name ASC;
SELECT DISTINCT gender FROM users;
```

---

## 🔹 12. NULL and NOT NULL

```sql
SELECT * FROM users WHERE mobile IS NULL;
SELECT * FROM users WHERE mobile IS NOT NULL;
```

---

## 🔹 13. LIMIT and OFFSET

```sql
SELECT * FROM users LIMIT 5;
SELECT * FROM users ORDER BY name DESC LIMIT 5;
SELECT * FROM users LIMIT 5 OFFSET 0;
SELECT * FROM users LIMIT 5 OFFSET 1;
```

---

## 🔹 14. Aggregate Functions

```sql
SELECT COUNT(name) FROM users;
SELECT SUM(age) FROM student;
SELECT AVG(age) FROM student;
SELECT MIN(age) FROM student;
SELECT MAX(age) FROM student;
```

---

## 🔹 15. COMMIT and ROLLBACK

* **COMMIT** saves changes permanently.
* **ROLLBACK** undoes changes since the last commit.

---

## 🔹 16. Primary Key & Foreign Key Example

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

## 🔹 17. SQL Joins

### INNER JOIN

```sql
SELECT * FROM students
INNER JOIN city ON students.city_id = city.id;
```

### LEFT JOIN

```sql
SELECT * FROM students
LEFT JOIN city ON students.city_id = city.id;
```

### RIGHT JOIN

```sql
SELECT * FROM students
RIGHT JOIN city ON students.city_id = city.id;
```

### FULL JOIN

(Not supported in MySQL, use UNION workaround)

### SELF JOIN

Used when a table references itself.

---

## 🔹 18. TRUNCATE vs DELETE vs DROP

* **DELETE**: Deletes rows (can rollback)
* **TRUNCATE**: Deletes all rows (no rollback)
* **DROP**: Deletes table structure

---

## 🔹 19. SQL Constraints

* NOT NULL
* UNIQUE
* CHECK
* DEFAULT
* PRIMARY KEY
* FOREIGN KEY
* INDEX

---

## 🔹 20. SQL Language Subsets

### DDL – Data Definition Language:

* CREATE, DROP, ALTER, TRUNCATE

### DML – Data Manipulation Language:

* SELECT, INSERT, UPDATE, DELETE

### DCL – Data Control Language:

* GRANT, REVOKE

### TCL – Transaction Control Language:

* COMMIT, ROLLBACK, SAVEPOINT

---

## 🔹 21. Types of Relationships in SQL

* One-to-One
* One-to-Many
* Many-to-One
* Many-to-Many
* Self-Referencing

---

## 🔹 22. RDBMS vs DBMS

* **DBMS**: No relational model (e.g., file systems)
* **RDBMS**: Uses relational model with tables and keys (e.g., MySQL, PostgreSQL)

---

## 🔹 23. NULL vs Zero vs Blank Space

* NULL: Unknown or missing value
* Zero: Numeric value
* Blank space: Textual/character field

---

## 🔹 24. What is Normalization?

Normalization is the process of organizing data to reduce redundancy and improve integrity.

---

## 🔹 25. What is Denormalization?

Denormalization is the process of introducing redundancy for better performance and reduced complexity.

---

## 🔹 26. What is ACID Property?

*(Expand if needed)*

---

## 🔹 27. GROUP BY vs HAVING

```sql
SELECT customer_id, SUM(quantity) AS total_quantity
FROM orders
GROUP BY customer_id
HAVING SUM(quantity) > 100;
```

---

## 🔹 28. Multi-table SQL Examples

*(Create examples of multi-table queries using JOINs, subqueries, etc.)*

---

## 🔹 29. Real-World Challenge in a Project

> Describe a specific SQL or backend challenge, and how you solved it (e.g., optimizing complex JOINs, building materialized views, partitioning, etc.)

---

## 🔹 30. Project Architecture Explanation

> Add a diagram or markdown layout for how components like Kafka, databases, microservices, and caching systems work together in your backend setup.

---

## 🔹 31. Why JWT Token is Not Fully Secure?

* Stored in localStorage – vulnerable to XSS attacks
* No built-in token revocation mechanism
* Exposed in every request

Use HTTPS, short expiration, refresh tokens, and avoid storing sensitive data inside JWT payload.

---
