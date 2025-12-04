# ✅ **60+ MongoDB Practical Questions (Topic-wise)**

Each question forces you to write ↝ queries, aggregations, updates, joins, indexes, etc.

---

# **1. Database & Collection Operations**

1. Create a database named `companyDB` and switch to it.
2. Create a collection `employees` with no schema.
3. Drop a collection named `tempBackup`.
4. Show all collections inside your current database.

---

# **2. Insert Operations**

5. Insert one employee record with name, age, city, and salary.
6. Insert multiple employees with different cities and ages.
7. Insert 100 sample documents using a loop (mongo shell).

---

# **3. Find Queries**

8. Fetch all employees who live in `"Mumbai"`.
9. Fetch only `name` and `salary` fields for all employees.
10. Find employees having salary greater than 50,000.
11. Find employees who belong to either `"Delhi"` or `"Pune"`.
12. Find all employees except those from `"Kolkata"`.
13. Find employees whose age is between 25 and 35.

---

# **4. Comparison Operators**

14. Get employees whose salary is NOT equal to 30,000.
15. Find employees with age in `[25, 28, 32]`.
16. Find employees where city **NOT IN** `["Mumbai","Delhi"]`.

---

# **5. Logical Operators**

17. Fetch employees whose age > 25 **AND** salary > 40,000.
18. Fetch employees whose city = `"Surat"` **OR** `"Ahmedabad"`.
19. Find employees NOT older than 40.

---

# **6. Update Operations**

20. Update one employee’s city to `"Chennai"`.
21. Increase every employee's salary by 5%.
22. Add a field `isActive: true` to all employees.
23. Remove field `tempField` from all documents.
24. Change all `"Mumbai"` employees’ city to `"Navi Mumbai"`.

---

# **7. Delete Operations**

25. Delete all employees from `"Chennai"`.
26. Delete only one employee with name `"Rahul"`.

---

# **8. Sort, Limit, Skip**

27. Fetch top 5 highest-paid employees.
28. Fetch next 10 employees after skipping first 10.
29. Fetch employees sorted by age (desc) then name (asc).

---

# **9. Indexing**

30. Create index on `email` (unique).
31. Create compound index on `{ city: 1, salary: -1 }`.
32. Drop an index from employees collection.
33. Check total indexes on employees collection.

---

# **10. Aggregation Framework**

34. Count total employees per city.
35. Calculate average salary per department.
36. Get min, max, average salary in the company.
37. Group employees by age range (20–30, 30–40, etc.).
38. Find city with highest employees.
39. Sum all salaries department-wise and sort descending.
40. Find total employees where salary > 50,000 grouped by city.

---

# **11. Group By**

41. Group products by category and count each.
42. Group orders by customer and calculate total spend.

---

# **12. $lookup (MongoDB JOIN)**

43. Join `employees` with `departments` using `deptId`.
44. Join `orders` collection with `products` collection.
45. Get list of customers with their order history (lookup + unwind).

---

# **13. Projection**

46. Fetch only name, city, and salary (hide `_id`).
47. Fetch only name but exclude salary & age.

---

# **14. Text Search**

48. Create a text index on `name` and `skills` in employees.
49. Search employees with words "python backend".
50. Search products that contain "gaming" or "pro" in name/description.

---

# **15. Array Query Questions**

51. Find courses that contain `"python"` inside tags array.
52. Add `"mongodb"` tag to Backend course.
53. Remove `"django"` tag from a course.
54. Find documents where array has more than 3 elements.

---

# **16. $unwind**

55. Unwind `items` array in orders and list all items individually.

---

# **17. Distinct**

56. Get all unique cities from employees collection.
57. Get unique skills from all developers.

---

# **18. Count**

58. Count employees living in `"Pune"`.
59. Count total orders in `orders` collection.

---

# **19. Backup & Restore**

60. Take backup of database `companyDB`.
61. Restore the backup into a new database `companyDB_test`.

---

# **20. ObjectId Operations**

62. Fetch employee using ObjectId.
63. Fetch all employees created after a given ObjectId timestamp.

---

# **21. Replace Document**

64. Replace entire employee document with a new structure.

---

# **22. Upsert**

65. Update employee salary or insert if not exists (by email).

---

# **23. Rename / Drop Fields**

66. Rename field `"dept"` to `"department"`.
67. Remove `oldSalary` field from all records.

---

# **24. Views**

68. Create a view `puneEmployees` showing employees from Pune.
69. Create a summary view showing total salary per department.

---

# **25. Bulk Write**

70. Insert 3 new employees, update 1 employee, delete 1 employee in one bulkWrite.

---

# **26. Transactions**

71. Transfer money from A to B with a transaction.

---

# **27. Schema Validation**

72. Create a collection `students` with validation:

* name: string
* age: int >= 18

---

# **28. Change Streams**

73. Monitor changes to employees collection in real-time.

---

# **29. TTL Index**

74. Create logs collection that auto-deletes documents after 24 hours.