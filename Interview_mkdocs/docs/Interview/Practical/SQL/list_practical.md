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



# **✅ Most Asked SQL Practical Problems (Interview-Focused)**

### **Users & Addresses**

| Problem                                        | Tables                                             | Description / Input                   | Expected Output                          |
| ---------------------------------------------- | -------------------------------------------------- | ------------------------------------- | ---------------------------------------- |
| Find all users with their addresses            | `users, addresses`                                 | Join users and addresses by `user_id` | `user_id, name, address_line, city, zip` |
| Find users without addresses                   | `users, addresses`                                 | Left join to find NULL addresses      | Users who don’t have an address          |
| Users with multiple shipping addresses         | `users, addresses`                                 | Group by `user_id` count>1            | `user_id, address_count`                 |
| Users who never placed an order                | `users, orders`                                    | Left join orders NULL                 | `user_id, name`                          |
| Users who purchased all products in a category | `users, orders, order_items, products, categories` | Set division problem                  | `user_id, category_name`                 |
| Users who spent more than average spending     | `users, orders, order_items, products`             | Calculate avg spending → filter       | `user_id, total_spent`                   |
| Users who ordered in last 30 days              | `users, orders`                                    | Filter order_date                     | `user_id, order_id`                      |
| Users with repeated purchases of same product  | `users, orders, order_items`                       | Count>1 per product per user          | `user_id, product_id, purchase_count`    |

---

### **Orders & Order_Items**

| Problem                                                    | Tables                                      | Description / Input                                   | Expected Output                 |
| ---------------------------------------------------------- | ------------------------------------------- | ----------------------------------------------------- | ------------------------------- |
| Count number of orders per user                            | `users, orders`                             | Group by `user_id`                                    | `user_id, total_orders`         |
| Total amount spent by each user                            | `users, orders, order_items, products`      | Sum of `order_items.quantity*products.price` per user | `user_id, total_spent`          |
| Orders without payments                                    | `orders, payments`                          | Left join `payments` NULL                             | `order_id, user_id`             |
| Orders with multiple products                              | `orders, order_items`                       | Count products per order > 1                          | `order_id, product_count`       |
| Orders with only one product                               | `orders, order_items`                       | Count items=1                                         | `order_id, user_id`             |
| Most recent order per user                                 | `orders`                                    | Max(order_date) group by user                         | `user_id, order_id, order_date` |
| Orders where shipping address differs from billing address | `orders, addresses`                         | Compare addresses                                     | `order_id, user_id`             |
| Subtotal / total per order                                 | `orders, order_items, products`             | Sum(quantity*price) per order                         | `order_id, total_amount`        |
| Orders containing a specific category                      | `orders, order_items, products, categories` | Filter by `category_id`                               | `order_id, user_id`             |
| Orders including most expensive product                    | `orders, order_items, products`             | Filter product with max(price)                        | `order_id, product_id`          |
| Total orders per day                                       | `orders`                                    | Group by order_date                                   | `order_date, total_orders`      |
| Average products per order                                 | `orders, order_items`                       | Avg(count items per order)                            | `avg_items_per_order`           |
| Total revenue per day                                      | `orders, order_items, products`             | Sum(quantity*price) per day                           | `order_date, total_revenue`     |
| Monthly sales trend                                        | `orders, order_items, products`             | Group by month                                        | `month, total_sales`            |
| Running total per day / order                              | `orders, order_items, products`             | Cumulative sum of revenue                             | `order_date, cumulative_total`  |
| Orders with partial payments                               | `orders, payments`                          | Order total > sum(payment.amount)                     | `order_id, amount_due`          |

---

### **Products & Categories**

| Problem                                 | Tables                                      | Description / Input           | Expected Output                          |
| --------------------------------------- | ------------------------------------------- | ----------------------------- | ---------------------------------------- |
| Top 5 products by sales                 | `products, order_items`                     | Sum quantity sold per product | `product_id, total_quantity_sold`        |
| Products never ordered                  | `products, order_items`                     | Left join `order_items` NULL  | `product_id, name`                       |
| Most expensive product in each category | `categories, products`                      | Max price per category        | `category_name, product_name, max_price` |
| Total sales per category                | `categories, products, order_items`         | Join → sum sales              | `category_name, total_sales`             |
| Top selling category per month          | `categories, products, order_items, orders` | Group by month+category       | `month, category_name, total_sales`      |
| Products with price > avg price         | `products`                                  | Filter                        | `product_id, name, price`                |
| Pivot / string aggregation by category  | `categories, products`                      | List products per category    | `category_name, product_list`            |

---

### **Employees & Departments**

| Problem                                     | Tables                   | Description / Input              | Expected Output                            |
| ------------------------------------------- | ------------------------ | -------------------------------- | ------------------------------------------ |
| Employees in each department                | `employees, departments` | Group by dept                    | `department_id, employee_count`            |
| Employee with highest salary per department | `employees`              | Partition by dept                | `department_id, employee_name, max_salary` |
| Employees with salary above dept average    | `employees`              | Partition by dept                | `employee_id, name, salary`                |
| Employees with no manager                   | `employees`              | `manager_id IS NULL`             | `employee_id, name`                        |
| Employees reporting to a manager            | `employees`              | `manager_id=101`                 | `employee_id, name`                        |
| Departments with more than N employees      | `employees, departments` | Group by dept having count>5     | `department_id, employee_count`            |
| Second highest salary employee              | `employees`              | Using `RANK()` or `ROW_NUMBER()` | `employee_id, name, salary`                |

---

### **Miscellaneous / Combined Queries**

| Problem                                      | Tables                                             | Description / Input              | Expected Output                  |
| -------------------------------------------- | -------------------------------------------------- | -------------------------------- | -------------------------------- |
| Users who ordered all products in a category | `users, orders, order_items, products, categories` | Set division                     | `user_id, category_name`         |
| Identify inactive customers                  | `users, orders`                                    | Last order > 6 months ago        | `user_id, last_order_date`       |
| Find missing numbers (e.g., order_id gaps)   | `orders`                                           | Identify missing consecutive IDs | `missing_order_id`               |
| Find overlapping intervals (bookings/orders) | `orders(start_date,end_date)`                      | Overlapping date ranges          | `order_id1, order_id2`           |
| Top N users by total spending                | `users, orders, order_items, products`             | Sum spending → top N             | `user_id, total_spent`           |
| Average order value per user                 | `users, orders, order_items, products`             | Sum per order → avg per user     | `user_id, avg_order_value`       |
| Running total of revenue                     | `orders, order_items, products`                    | Cumulative sum                   | `order_date, cumulative_revenue` |

---