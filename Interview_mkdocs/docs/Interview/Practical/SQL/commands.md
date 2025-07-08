Here is a **MySQL Commands Cheat Sheet** in the **same format** — with command, description, and sample usage.

---

### 🛢️ MySQL Commands – Description + Example

| Command           | Description                               | Sample Usage              |
| ----------------- | ----------------------------------------- | ------------------------- |
| `CREATE DATABASE` | Creates a new database.                   | `CREATE DATABASE school;` |
| `DROP DATABASE`   | Deletes a database.                       | `DROP DATABASE school;`   |
| `USE`             | Selects a database to work with.          | `USE school;`             |
| `SHOW DATABASES`  | Lists all databases.                      | `SHOW DATABASES;`         |
| `SHOW TABLES`     | Lists all tables in the current database. | `SHOW TABLES;`            |

---

### 📐 Table Management

| Command          | Description                            | Sample Usage                                        |
| ---------------- | -------------------------------------- | --------------------------------------------------- |
| `CREATE TABLE`   | Creates a new table.                   | `CREATE TABLE students (id INT, name VARCHAR(50));` |
| `DROP TABLE`     | Deletes a table.                       | `DROP TABLE students;`                              |
| `ALTER TABLE`    | Modifies a table structure.            | `ALTER TABLE students ADD email VARCHAR(100);`      |
| `RENAME TABLE`   | Renames a table.                       | `RENAME TABLE students TO learners;`                |
| `TRUNCATE TABLE` | Removes all data, but keeps structure. | `TRUNCATE TABLE students;`                          |

---

### 📊 Data Manipulation (CRUD)

| Command       | Description                  | Sample Usage                                           |
| ------------- | ---------------------------- | ------------------------------------------------------ |
| `INSERT INTO` | Inserts data into a table.   | `INSERT INTO students (id, name) VALUES (1, 'Alice');` |
| `SELECT`      | Retrieves data from a table. | `SELECT * FROM students;`                              |
| `UPDATE`      | Updates existing records.    | `UPDATE students SET name='Bob' WHERE id=1;`           |
| `DELETE`      | Deletes records.             | `DELETE FROM students WHERE id=1;`                     |

---

### 🔍 Query Clauses

| Clause     | Description                  | Sample Usage                                          |
| ---------- | ---------------------------- | ----------------------------------------------------- |
| `WHERE`    | Filters records.             | `SELECT * FROM students WHERE id = 1;`                |
| `ORDER BY` | Sorts results.               | `SELECT * FROM students ORDER BY name ASC;`           |
| `GROUP BY` | Groups records.              | `SELECT dept, COUNT(*) FROM employees GROUP BY dept;` |
| `HAVING`   | Filters after grouping.      | `HAVING COUNT(*) > 2;`                                |
| `LIMIT`    | Restricts number of records. | `SELECT * FROM students LIMIT 5;`                     |

---

### 🔐 Constraints

| Constraint    | Description                              | Sample Usage                                       |
| ------------- | ---------------------------------------- | -------------------------------------------------- |
| `PRIMARY KEY` | Uniquely identifies each row.            | `id INT PRIMARY KEY`                               |
| `FOREIGN KEY` | Links to primary key in another table.   | `FOREIGN KEY (dept_id) REFERENCES departments(id)` |
| `UNIQUE`      | Ensures all values in column are unique. | `email VARCHAR(100) UNIQUE`                        |
| `NOT NULL`    | Column must have a value.                | `name VARCHAR(50) NOT NULL`                        |
| `DEFAULT`     | Sets a default value.                    | `status VARCHAR(20) DEFAULT 'active'`              |

---

### 🔄 Joins

| Join Type         | Description                                | Sample Usage                                     |
| ----------------- | ------------------------------------------ | ------------------------------------------------ |
| `INNER JOIN`      | Only matching records in both tables.      | `SELECT * FROM A INNER JOIN B ON A.id = B.a_id;` |
| `LEFT JOIN`       | All from left, matched from right.         | `SELECT * FROM A LEFT JOIN B ON A.id = B.a_id;`  |
| `RIGHT JOIN`      | All from right, matched from left.         | `SELECT * FROM A RIGHT JOIN B ON A.id = B.a_id;` |
| `FULL OUTER JOIN` | All records from both sides (via `UNION`). | Not native in MySQL (use `UNION` workaround)     |

---

### 🧠 Functions

| Function  | Description    | Sample Usage                         |
| --------- | -------------- | ------------------------------------ |
| `COUNT()` | Counts rows.   | `SELECT COUNT(*) FROM students;`     |
| `SUM()`   | Adds values.   | `SELECT SUM(salary) FROM employees;` |
| `AVG()`   | Average value. | `SELECT AVG(score) FROM tests;`      |
| `MAX()`   | Highest value. | `SELECT MAX(score) FROM tests;`      |
| `MIN()`   | Lowest value.  | `SELECT MIN(score) FROM tests;`      |

---