## 1. INNER JOIN  
**Use case:**  
**Scenario:** You work at a university and want a list of students who have enrolled in at least one course (skip students not enrolled).  
**Tables:** `students` and `enrollments`  
**Query Purpose:** Find all students who are enrolled, and the courses they are taking.  
**SQL:**
```sql
SELECT students.name, enrollments.course
FROM students
INNER JOIN enrollments
ON students.id = enrollments.student_id;
```
**Real-world example:**  
- When generating an attendance list, you only want students present (those actually enrolled).

---

## 2. LEFT JOIN  
**Use case:**  
**Scenario:** You want to send emails to **all registered customers**, whether or not they have ever placed an order. You also want to see the order details if they exist.  
**Tables:** `customers` and `orders`  
**Query Purpose:** Show all customers, even those with no orders (order info will be NULL if none).  
**SQL:**
```sql
SELECT customers.name, orders.order_id
FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id;
```
**Real-world example:**  
- Sending reminders to customers who signed up but haven’t bought anything yet.  
- Checking which customers have no orders (to target them for marketing).

---

## 3. RIGHT JOIN  
**Use case:**  
**Scenario:** You want to display all job positions in a company, including jobs that **have not been filled yet**.  
**Tables:** `employees` and `positions`  
**Query Purpose:** For each position, show the employee name if the position is filled, otherwise show the position and NULL for employee.  
**SQL:**
```sql
SELECT employees.name, positions.title
FROM employees
RIGHT JOIN positions
ON employees.position_id = positions.id;
```
**Real-world example:**  
- Finding job positions that are open (not filled) in your HR dashboard.

---

## 4. FULL JOIN  
**Use case:**  
**Scenario:** You are merging two contact lists: one from an email database and one from a phone database. Some people are only in one list.  
**Tables:** `email_contacts` and `phone_contacts`  
**Query Purpose:** List **all people, with email, phone, or both** (NULL where info is missing).  
**SQL:**
```sql
SELECT email_contacts.name, email_contacts.email, phone_contacts.phone
FROM email_contacts
FULL OUTER JOIN phone_contacts
ON email_contacts.name = phone_contacts.name;
```
**Real-world example:**  
- Creating a master contact list for your company by combining all possible sources.
- Reconciling two sets of records to find total unique entries.

---

### **Summary Table**

| JOIN Type   | When to Use (Real-world Example) |
|-------------|----------------------------------|
| INNER JOIN  | Find matched records in both tables (students with enrollments)|
| LEFT JOIN   | List all items in the left table + matching from right (customers w/ or w/o orders)|
| RIGHT JOIN  | List all items in the right table + matching from left (all job positions filled or not)|
| FULL JOIN   | Bring together absolutely all rows from both tables (merge email and phone lists for full contact list)|