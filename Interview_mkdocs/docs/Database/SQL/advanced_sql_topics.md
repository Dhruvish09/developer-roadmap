# ✅ 1. **Trigger**

> **Definition:** A trigger is a piece of SQL code that automatically runs when a specific action (INSERT/UPDATE/DELETE) happens on a table.

# 🔁 Workflow:

```
[ INSERT / UPDATE / DELETE on main table ]
          ↓
[ Trigger fires automatically ]
          ↓
[ Custom action runs → e.g., insert log entry ]
```

# 📌 Example:

```sql
CREATE TRIGGER after_user_insert
AFTER INSERT ON users
FOR EACH ROW
INSERT INTO user_logs (user_id, log_time)
VALUES (NEW.id, NOW());
```

---

## ✅ 2. **View**

> **Definition:** A view is a virtual table created from a SQL query — it behaves like a table but doesn't store data.

### 🔁 Workflow:

```
[ Write complex SELECT query ]
          ↓
[ Create VIEW from it ]
          ↓
[ SELECT * FROM view_name ] ← Acts like a real table
```

### 📌 Example:

```sql
CREATE VIEW active_users AS
SELECT id, name FROM users WHERE status = 'active';

SELECT * FROM active_users;
```

---

## ✅ 3. **Stored Procedure**

> **Definition:** A stored procedure is a saved block of SQL statements that you can call anytime to run complex logic.

### 🔁 Workflow:

```
[ Create procedure with logic ]
          ↓
[ CALL procedure with input ]
          ↓
[ Procedure runs and returns result or modifies data ]
```

### 📌 Example:

```sql
CREATE PROCEDURE getUser(IN uid INT)
BEGIN
  SELECT * FROM users WHERE id = uid;
END;

CALL getUser(2);
```

---

## ✅ 4. **Function**

> **Definition:** A function is like a stored procedure but always returns a single value and is often used inside queries.

### 🔁 Workflow:

```
[ Call function with input ]
          ↓
[ Function calculates and returns single value ]
```

### 📌 Example:

```sql
CREATE FUNCTION getGST(price DECIMAL(10,2))
RETURNS DECIMAL(10,2)
RETURN price * 0.18;

SELECT getGST(2000); -- returns 360.00
```

---

## ✅ 5. **Index**

> **Definition:** An index is a performance-boosting structure that speeds up search operations on columns.

### 🔁 Workflow:

```
[ Create INDEX on column ]
          ↓
[ Run SELECT with WHERE on that column ]
          ↓
[ Index used → result comes fast ]
```

### 📌 Example:

```sql
CREATE INDEX idx_email ON users(email);

SELECT * FROM users WHERE email = 'john@example.com';
```

---

## ✅ 6. **Normalization**

> **Definition:** Normalization is the process of organizing data to remove duplication and improve integrity.

### 🔁 Workflow:

```
[ Big table with duplicate data ]
          ↓
[ Split into small tables ]
          ↓
[ Connect using foreign keys ]
```

### 📌 Example:

**Before (Unnormalized):**

```sql
| id | name | city     |
|----|------|----------|
| 1  | A    | Mumbai   |
| 2  | B    | Mumbai   |
```

**After Normalization:**

**users**

```sql
| id | name | city_id |
```

**cities**

```sql
| id | city   |
|----|--------|
| 1  | Mumbai |
```

---

## ✅ 7. **Join**

> **Definition:** A JOIN is used to combine rows from two or more tables using a related column.

### 🔁 Workflow:

```
[ Table 1: users ]       [ Table 2: orders ]
          ↓
[ JOIN on user_id ]
          ↓
[ Combined result: user + order info ]
```

### 📌 Example:

```sql
SELECT u.name, o.product
FROM users u
JOIN orders o ON u.id = o.user_id;
```

---

## ✅ 8. **Transaction**

> **Definition:** A transaction is a group of SQL operations that run together — either all succeed or all fail.

### 🔁 Workflow:

```
[ START TRANSACTION ]
          ↓
[ Run multiple SQL statements ]
          ↓
[ If success → COMMIT | If error → ROLLBACK ]
```

### 📌 Example:

```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

---

## ✅ 9. **Cursor**

> **Definition:** A cursor lets you go through a result set row by row (like a loop), useful in procedures.

### 🔁 Workflow:

```
[ DECLARE cursor ]
          ↓
[ OPEN cursor ]
          ↓
[ FETCH next row ]
          ↓
[ Do logic for that row ]
          ↓
[ Repeat until end → CLOSE ]
```

### 📌 Example:

```sql
DECLARE user_cursor CURSOR FOR SELECT id FROM users;
OPEN user_cursor;
FETCH user_cursor INTO @uid;
-- do something with @uid
CLOSE user_cursor;
```