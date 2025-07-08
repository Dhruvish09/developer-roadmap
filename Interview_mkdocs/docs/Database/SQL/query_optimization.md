# 🔥 What is Query Optimization?

Making SQL queries run **faster** and **use fewer resources**.

---

# ✅ Step-by-Step Guide:

### 🔹 Step 1: **Use Only Required Columns**

**❌ Bad:**

```sql
SELECT * FROM employees;
```

**✅ Good:**

```sql
SELECT name, salary FROM employees;
```

---

### 🔹 Step 2: **Use Index on WHERE Column**

**❌ Slow:**

```sql
SELECT * FROM employees WHERE department_id = 5;
```

**✅ Add Index:**

```sql
CREATE INDEX idx_dept ON employees(department_id);
```

---

### 🔹 Step 3: **Avoid Functions in WHERE**

**❌ Slow:**

```sql
SELECT * FROM users WHERE YEAR(join_date) = 2024;
```

**✅ Fast:**

```sql
SELECT * FROM users WHERE join_date BETWEEN '2024-01-01' AND '2024-12-31';
```

---

### 🔹 Step 4: **Use JOIN Instead of Subquery**

**❌ Slow:**

```sql
SELECT name FROM employees
WHERE department_id IN (SELECT id FROM departments WHERE name = 'Sales');
```

**✅ Fast:**

```sql
SELECT e.name FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE d.name = 'Sales';
```

---

### 🔹 Step 5: **Use LIMIT with Big Tables**

**❌ Bad:**

```sql
SELECT * FROM logs ORDER BY created_at DESC;
```

**✅ Good:**

```sql
SELECT * FROM logs ORDER BY created_at DESC LIMIT 100;
```

---

### 🔹 Step 6: **Use EXPLAIN to Debug**

Check how query runs:

```sql
EXPLAIN SELECT * FROM employees WHERE department_id = 5;
```

It tells:

* Is index used?
* Is full table scan happening?

---

## ✅ In Short:

| Step | Tip                               |
| ---- | --------------------------------- |
| 1    | Select only needed columns        |
| 2    | Create index on search columns    |
| 3    | Don’t use functions in WHERE      |
| 4    | Use JOINs instead of subqueries   |
| 5    | Use LIMIT for large data          |
| 6    | Use `EXPLAIN` to check query plan |

---
