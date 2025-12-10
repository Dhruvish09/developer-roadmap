## 1. **What is Composite Key**

**Definition:**
A composite key is a key created using two or more columns to uniquely identify a record when a single column is not enough..

It is used when **one column is not enough** to uniquely identify a record.

### ✅ Easy Real-World Example:

Think of **students and courses**:

* One student can enroll in **many courses**
* One course can have **many students**

So, neither `student_id` nor `course_id` alone is unique.

But **together they are unique** ✅

### ✅ SQL Example:

```sql
CREATE TABLE enrollment (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id)
);
```

### ✅ Sample Data:

| student_id | course_id |
| ---------- | --------- |
| 1          | 101       |
| 1          | 102       |
| 2          | 101       |

➡️ Here, the combination of `student_id + course_id` is always unique.

