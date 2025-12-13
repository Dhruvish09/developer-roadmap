# 💾 MySQL Interview Practice – Real-World Questions & Answers

---

### ✅ 1. What is the SQL query used for creating a database and a table?

```sql
CREATE DATABASE company;
USE company;

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    salary DECIMAL
);
```

---

### ✅ 2. Create a table with the same structure of another table (no data)?

```sql
CREATE TABLE department_copy AS
SELECT * FROM department WHERE 1=2;
```

---

### ✅ 3. Create a table with the same structure and data of another table?

```sql
CREATE TABLE Emp
SELECT * FROM Employee;
```

---

### ✅ 4. Find the 2nd / 3rd / nth highest salary?

```sql
-- Option 1: Nested MAX
SELECT MAX(Salary) FROM Employee
WHERE Salary < (
    SELECT MAX(Salary) FROM Employee
    WHERE Salary < (
        SELECT MAX(Salary) FROM Employee
    )
);

-- Option 2: OFFSET
SELECT Salary FROM Employee 
ORDER BY Salary DESC
LIMIT 1 OFFSET 2; -- 3rd highest (OFFSET is 0-based)
```

---

### ✅ 5. Find employees who also hold managerial positions?

```sql
SELECT * FROM Employees 
WHERE Employee_ID IN (SELECT Manager_ID FROM Employees);
```

---

### ✅ 6. Find names of employees that begin with ‘A’?

```sql
SELECT Name FROM Employee WHERE Name LIKE 'A%';
```

---

### ✅ 7. Display the current date?

```sql
SELECT CURRENT_DATE();
```

---

### ✅ 8. Fetch alternate records from a table?

```sql
SELECT * FROM Employee WHERE id % 2 = 0;
```

---

### ✅ 9. Fetch common records from two tables?

```sql
SELECT * FROM Employee
INNER JOIN Skill ON Employee.Skill_ID = Skill.ID;
```

---

### ✅ 10. Remove duplicate rows in a table?

```sql
DELETE E1 FROM Employee E1
INNER JOIN Employee E2 
WHERE 
    E1.id < E2.id AND 
    E1.Name = E2.Name;
```

---

### ✅ 11. Find the nth record from a table?

```sql
SELECT * FROM Employee LIMIT 1 OFFSET 10;
```

---

### ✅ 12. Find the first 5 records from a table?

```sql
SELECT * FROM Employee ORDER BY ID LIMIT 5;
```

---

### ✅ 13. Find the last 5 records from a table?

```sql
SELECT * FROM Employee ORDER BY ID DESC LIMIT 5;

-- Or sorted in ascending order
SELECT * FROM (
    SELECT * FROM Employee ORDER BY ID DESC LIMIT 5
) AS last5
ORDER BY ID;

-- Or using MAX
SELECT * FROM Employee 
WHERE ID > (SELECT MAX(ID) - 5 FROM Employee);
```

---

### ✅ 14. Find the first or last record from a table?

**First Record:**

```sql
SELECT * FROM Employee LIMIT 1;
SELECT * FROM Employee WHERE ID = (SELECT MIN(ID) FROM Employee);
```

**Last Record:**

```sql
SELECT * FROM Employee ORDER BY ID DESC LIMIT 1;
SELECT * FROM Employee WHERE ID = (SELECT MAX(ID) FROM Employee);
```

---

### ✅ 15. Find distinct records without using `DISTINCT` keyword?

**Using GROUP BY:**

```sql
SELECT dept_id FROM Employee GROUP BY dept_id;
```

**Using UNION:**

```sql
SELECT dept_id FROM Employee
UNION
SELECT dept_id FROM Employee;
```

---

### ✅ 16. Maximum salary of each department?

```sql
SELECT dept_id, MAX(salary)
FROM Employee
GROUP BY dept_id;
```

---

### ✅ 17. Department-wise employee count (sorted)?

```sql
SELECT dept_id, COUNT(*) AS Count
FROM Employee
GROUP BY dept_id
ORDER BY Count ASC;
```

---

### ✅ 18. Change the datatype of a column?

```sql
ALTER TABLE Employee MODIFY manager_id BIGINT;
```

---

### ✅ 19. Difference between Unique Key, Primary Key and Foreign Key?

* **Unique Key**
  Ensures uniqueness for a column. Allows one `NULL`.

* **Primary Key**
  Combination of `UNIQUE + NOT NULL`. Only one per table.

* **Foreign Key**
  References a key in another table to enforce referential integrity.

---

### ✅ 20. `UNION` vs `UNION ALL`

* `UNION` removes duplicates.
* `UNION ALL` keeps all rows (including duplicates).

---

### ✅ 21. Cartesian Join (Cross Join)

Returns every combination between two tables.

```sql
SELECT * FROM table1
CROSS JOIN table2;
```

---

### ✅ 22. Difference: Full Outer Join vs UNION ALL

* **Full Outer Join**
  Returns all rows from both tables with `NULL`s where no match.

* **UNION ALL**
  Combines result sets with duplicates, doesn’t match rows.

---

### ✅ 23. Get only customers who made transactions in **both 2013 and 2023**

```sql
SELECT customer_id
FROM transactions
WHERE YEAR(transaction_date) IN (2013, 2023)
GROUP BY customer_id
HAVING COUNT(DISTINCT YEAR(transaction_date)) = 2;
```
--- 

### 24. Write a query to get 2nd highest salary.

```sql
SELECT salary
FROM employee
ORDER BY salary DESC
LIMIT 1 OFFSET 1;  -- OFFSET 1 skips the highest, gives 2nd highest
```
---

### 25. Find Duplicates records count

```sql
SELECT name, COUNT(*) AS cnt
FROM employees
GROUP BY name
HAVING COUNT(*) > 1;
```
---

### 26. Get department-wise highest salary employee

Tables:

`employees(emp_id, emp_name, salary, dept_id)`
`departments(dept_id, dept_name)`


```sql
SELECT d.dept_name, e.emp_name, e.salary
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.salary = (
    SELECT MAX(salary)
    FROM employees
    WHERE dept_id = e.dept_id
);
```ING COUNT(*) > 1;
```

---
