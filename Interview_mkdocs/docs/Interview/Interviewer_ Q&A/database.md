## 1. **What is Composite Key**

**Definition:**
A composite key is a key created using two or more columns to uniquely identify a record when a single column is not enough..

It is used when **one column is not enough** to uniquely identify a record.

✅ Easy Real-World Example:

Think of **students and courses**:

* One student can enroll in **many courses**
* One course can have **many students**

So, neither `student_id` nor `course_id` alone is unique.

But **together they are unique** ✅

✅ SQL Example:

```sql
CREATE TABLE enrollment (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id)
);
```

✅ Sample Data:

| student_id | course_id |
| ---------- | --------- |
| 1          | 101       |
| 1          | 102       |
| 2          | 101       |

➡️ Here, the combination of `student_id + course_id` is always unique.



## 2. **How to Optimize Slow SQL Queries?**

1. **Add indexes**
2. **Avoid `SELECT *`**
3. **Use `LIMIT`**
4. **Normalize tables**
5. **Avoid subqueries → use JOINs**
6. **Use proper WHERE filters**
7. **Check query with `EXPLAIN`**

**1. Add Indexes**

Indexes make searching faster.
Without index → full table scan.
With index → fast lookup.

---

**2. Avoid `SELECT *`**

Only select required columns.
Less data → faster query → less network load.

---

**3. Use `LIMIT`**

Do not fetch thousands of rows if not needed.
Use `LIMIT 50` or pagination.
Reduces processing time.

---

**4. Normalize Tables**

Store data in proper related tables.
Avoid repeating large data → smaller table → faster query.

---

**5. Avoid Subqueries → Use JOIN**

Subqueries often run multiple times.
JOINs are optimized by SQL engine.
Fewer scans → faster response.

---

**6. Use Proper WHERE Filters**

Filter early using indexed columns.
SQL engine scans fewer rows.

---

**7. Use `EXPLAIN`**

Shows how the query is executed.
Helps find:

* missing indexes
* full scans
* inefficient joins

---



## 3. ACID Properties

**ACID** ensures **safe and reliable database transactions**.

* **Atomicity** → All or nothing (no partial update)
* **Consistency** → Data rules must be followed
* **Isolation** → Transactions don’t interfere with each other
* **Durability** → Committed data is permanently saved

### 🎯 One-line Interview Answer

> ACID properties ensure that database transactions are reliable, consistent, isolated from each other, and permanently stored.