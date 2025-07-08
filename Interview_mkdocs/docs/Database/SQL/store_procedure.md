# 🤔 Stored Procedure kya hota hai?

**Stored Procedure** ek SQL code ka block hota hai jo database me **save** ho jata hai, aur aap usse baar-baar **CALL** karke use kar sakte ho.

🔁 **Jaise function programming me** hota hai, waise hi ye database ke liye hota hai.

---

# ✅ Stored Procedure kyun use karein?

| Fayda         | Kya hota hai?                  |
| ------------- | ------------------------------ |
| 🔁 Reuse      | Bar bar likhne ki zarurat nahi |
| ⚡ Fast        | Pehle se compiled hota hai     |
| 🔒 Secure     | Limited access de sakte ho     |
| 🧠 Logic safe | Business logic DB ke andar     |

---

## 🛠 Step-by-Step Easy Guide

### 🔹 Step 1: Simple Stored Procedure banana

```sql
DELIMITER //

CREATE PROCEDURE showEmployees()
BEGIN
  SELECT * FROM employees;
END //

DELIMITER ;
```

📞 **Run karne ke liye:**

```sql
CALL showEmployees();
```

---

### 🔹 Step 2: Procedure with Input (jaise function me argument)

```sql
DELIMITER //

CREATE PROCEDURE getByDepartment(IN dept_id INT)
BEGIN
  SELECT * FROM employees WHERE department_id = dept_id;
END //

DELIMITER ;
```

📞 **Call karne ke liye:**

```sql
CALL getByDepartment(3);
```

---

### 🔹 Step 3: Procedure with Output (jaise return value)

```sql
DELIMITER //

CREATE PROCEDURE totalEmployees(OUT total INT)
BEGIN
  SELECT COUNT(*) INTO total FROM employees;
END //

DELIMITER ;
```

📞 **Call and fetch output:**

```sql
CALL totalEmployees(@total);
SELECT @total;
```

---

### 🧹 Stored Procedure ko delete karna

```sql
DROP PROCEDURE IF EXISTS showEmployees;
```

---

## 📌 Short Summary Table

| Kaam           | SQL Syntax Example                   |
| -------------- | ------------------------------------ |
| Banaana        | `CREATE PROCEDURE ... BEGIN ... END` |
| Chalaana (Run) | `CALL procedure_name();`             |
| Input dena     | `IN dept_id INT`                     |
| Output lena    | `OUT total INT`                      |
| Delete karna   | `DROP PROCEDURE procedure_name;`     |

---

## 🎯 Real-Life Location Where It’s Used

| Location             | Usage Example                                       |
| -------------------- | --------------------------------------------------- |
| ✅ E-commerce Website | Customer orders fetch karna (`getOrdersByCustomer`) |
| ✅ Admin Dashboard    | Monthly sales report (`getMonthlySales`)            |
| ✅ Finance/ERP system | Payroll calculation, tax report etc.                |
| ✅ Mobile App Backend | `CALL loginUser(email, password)`                   |
| ✅ Cron/Jobs          | Clean old logs/orders every night                   |
| ✅ Banking Systems    | Transaction audit trail, summaries                  |



## ✅ Stored Procedure Parameter Types in MySQL

| Parameter Type   | Keyword | Description                                                         | Example Use Case                         |
| ---------------- | ------- | ------------------------------------------------------------------- | ---------------------------------------- |
| 1️⃣ Input        | `IN`    | Value is passed **into** the procedure (read-only inside procedure) | Get user by ID, Filter by date           |
| 2️⃣ Output       | `OUT`   | Value is **set inside** the procedure and passed **back to caller** | Count total records, return total amount |
| 3️⃣ Input/Output | `INOUT` | Value is passed **in**, **modified**, and then **returned back**    | Add bonus to points, update balance      |


## 📌 Additional Concept: MySQL User-defined Variables
| Keyword | Description                                            | Example                        |
| ------- | ------------------------------------------------------ | ------------------------------ |
| `@var`  | Session-level variable to **hold OUT or INOUT values** | `@total`, `@amount`, `@points` |


## What does this code mean?
| Line                  | Meaning                                                 |
| --------------------- | ------------------------------------------------------- |
| `DELIMITER //`        | Change statement end marker from `;` to `//`            |
| `CREATE PROCEDURE...` | Start creating a new procedure                          |
| `BEGIN ... END`       | Define procedure body (what it will do)                 |
| `END //`              | End of procedure definition, using the custom delimiter |
| `DELIMITER ;`         | Switch delimiter back to default `;`                    |
