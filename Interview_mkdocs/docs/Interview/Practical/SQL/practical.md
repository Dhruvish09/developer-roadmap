# 🧠 SQL PRACTICAL QUESTIONS (BASED ON *YOUR* DATABASE)

## 📦 TABLES YOU HAVE

`users, addresses, categories, products, orders, order_items, payments, employees, departments`

---

## 🟢 BASIC QUERIES (FOUNDATION – MUST BE FAST)

1. Get all users sorted by `created_at` (latest first)
2. Find users created after `2023-02-01`
3. Count total users
4. List all unique cities from addresses
5. Find products priced above 2000
6. Get all orders placed in June 2023
7. Find all payments with status `FAILED`
8. List employees with salary greater than 60,000
9. Count number of departments
10. Find users whose name starts with `A`

---

## 🟡 JOINS (MOST FREQUENTLY ASKED)

11. Show user name with their city
12. Show users and number of addresses they have
13. List orders with user name and email
14. Show order id with product name and quantity
15. List products with their category name
16. Show users and their total orders (include zero orders)
17. Find orders that do not have any payment
18. Get payments with user name and order date
19. Show employees with department name
20. Show employees with their manager name

---

## 🟠 GROUP BY & HAVING (INTERVIEW FAVORITE)

21. Find users who placed more than 2 orders
22. Get category-wise product count
23. Find total orders per day
24. Get total revenue per order
25. Find users whose total spend is more than 30,000
26. Find products sold more than 2 times
27. Get department-wise average salary
28. Find managers having more than 1 employee
29. Count payments by status
30. Find users having more than one address

---

## 🔵 SUBQUERIES (SENIOR LEVEL THINKING)

31. Find users who placed the highest number of orders
32. Get products that were never ordered
33. Find users who never made a successful payment
34. Get second highest salary among employees
35. Find employees earning more than their manager
36. Get highest paid employee in each department
37. Find users whose total spending is above average
38. Find orders whose total value is above average order value
39. Get users who placed orders on the latest order date
40. Find products priced higher than category average

---

## 🟣 WINDOW FUNCTIONS (VERY IMPORTANT FOR SENIOR)

41. Rank users based on total spending
42. Show running total of revenue by order date
43. Find top 3 most expensive products per category
44. Assign row numbers to orders per user
45. Find duplicate emails using ROW_NUMBER
46. Compare employee salary with department average
47. Show first and last order date per user
48. Implement pagination (page 2, size 5)
49. Rank employees by salary within department
50. Month-wise revenue growth

---

## 🔴 REAL BACKEND SCENARIOS (API + SQL)

51. Write query for paginated user list (LIMIT/OFFSET)
52. Fetch order history API for a user
53. Dashboard query: total users, orders, revenue
54. Admin report: failed vs successful payments
55. Find inactive users (no orders in last 60 days)
56. Find top 5 customers by spending
57. Detect orphan records (orders without users)
58. Insert order and payment in a transaction
59. Soft delete users and exclude them from queries
60. Find users with inconsistent payment data

---

## ⚫ ADVANCED & EDGE CASES (WHAT SENIORS ARE JUDGED ON)

61. Optimize revenue query using indexes
62. Rewrite subquery using JOIN
63. Explain EXPLAIN plan for heavy query
64. Handle NULL values in joins properly
65. Avoid double counting in revenue queries
66. Find users who ordered from multiple categories
67. Detect sudden spikes in daily orders
68. Find employees under same manager
69. Idempotent insert for users
70. Lock rows while processing payment