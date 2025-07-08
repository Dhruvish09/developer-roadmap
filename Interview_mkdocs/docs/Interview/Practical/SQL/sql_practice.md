# 🧠 MySQL Interview Practice – Real-World Practical Tasks

---

### 📁 Database & Table Setup

1. **Create a database** called `"company"` and switch to it.
2. **Create a table** `"employees"` with columns:

   * `id` (INT, PRIMARY KEY)
   * `name` (VARCHAR)
   * `department_id` (INT)
   * `salary` (DECIMAL)
3. **Add a new column** `email` (VARCHAR) to the `"employees"` table.
4. **Rename** the `"employees"` table to `"staff"`.
5. **Remove all records** from the `"staff"` table without deleting the table itself.

---

### 👨‍💼 Data Manipulation

6. **Insert 3 staff records** into the `"staff"` table with different departments and salaries.
7. **Select all records** from the `"staff"` table where `department_id = 2`.
8. **Update salary** by 10% for employees in `department_id = 3`.
9. **Delete a staff record** where `name = "John Doe"`.
10. **Retrieve staff names** sorted by salary in descending order.

---

### 📊 Aggregations & Filtering

11. **Get the total number** of staff per department.
12. **Get the average salary** for `department_id = 1`, but only show if it's above `50000`.
13. **Limit the result** to top 5 highest earning staff.

---

### 🏢 Table Relationships & Constraints

14. **Create a `departments` table** with:

* `id` (INT, PRIMARY KEY)
* `name` (VARCHAR)

15. **Add a foreign key** from `staff.department_id` → `departments.id`.
16. **Ensure the `email` column** in `staff` is **unique**.
17. **Ensure the `name` column** in `staff` **cannot be NULL**.
18. **Set default value** of a new `status` column to `"active"` in `staff`.

---

### 🔗 Joins & Advanced Queries

19. **Join `staff` and `departments`** to display employee name with their department name.
20. **Show all departments**, even those without any employees (**LEFT JOIN**).
21. **Count how many employees** are in each department.
22. **Show the total salary payout** for each department.
23. **Find the highest salary** in the `staff` table.
24. **Show names of employees** with the **lowest salary**.
25. **Use `UNION`** to simulate **FULL OUTER JOIN** between `projects` and `staff_projects`.