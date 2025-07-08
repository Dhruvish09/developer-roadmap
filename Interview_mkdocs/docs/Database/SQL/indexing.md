# 🧠 1. **What Is an Index – Internals Perspective**

An **index** is a separate **data structure** (often a **B-Tree**) that stores a **copy of the indexed column(s)** along with **pointers to the actual rows** in the table.

Think of it like the index in a book:

* You want to find "SQL Indexing" → You go to the index page → It tells you "Page 67"
* Similarly, a SQL query uses the index to go **directly to the rows** that match.

---

# 🛠️ 2. **How Indexes Are Created Internally**

### When you run:

```sql
CREATE INDEX idx_name ON employees(name);
```

This happens under the hood:

### 🔧 Step-by-Step:

1. **Copy of Column Values**: DB engine extracts the `name` column.
2. **Sort the Values**: The values are sorted (if using a B-Tree structure).
3. **Build the Tree (or Hash)**:

   * Nodes are created for values.
   * Each leaf node stores a **row pointer** (e.g., RowID or Primary Key).
4. **Store the Index in Disk**:

   * Saved as a **separate file** in MySQL/PostgreSQL (inside `ibdata`, `pg_index`, etc.)
   * Indexed structures are **automatically updated** on INSERT/UPDATE/DELETE.

---

# 🌳 3. **Most Common Index Structure: B+ Tree**

### Why B+ Tree?

* **Balanced Tree** → O(log n) search
* Leaf nodes are **linked** → Fast range scans
* Internal nodes hold **search keys**, not row data

### 🔍 Example: `CREATE INDEX idx_name ON employees(name)`

If your table has:

```sql
+----+--------+
| id | name   |
+----+--------+
| 1  | Alice  |
| 2  | Bob    |
| 3  | David  |
| 4  | Carol  |
+----+--------+
```

### The B+ Tree looks like:

```
          [Bob]
        /      \
   [Alice]     [Carol, David]
```

Each leaf node links to the actual **row locations** (row pointers or primary keys).

---

# ⚡ 4. **How Queries Use Indexes**

Let’s say you run:

```sql
SELECT * FROM employees WHERE name = 'David';
```

### Without Index:

* Full Table Scan: Row-by-row check — very slow on large tables.

### With Index:

* Use the B+ Tree index on `name`
* Traverse the tree → Locate `'David'`
* Get the pointer → Jump to row ID = 3 directly!

---

# 🧠 5. **Index Maintenance During Write Operations**

* **INSERT**: DB adds the new value into the B-Tree index (keeps it sorted).
* **DELETE**: DB removes the value and updates tree pointers.
* **UPDATE**: If indexed column is updated, DB:

  * Removes old entry
  * Inserts the new one

📌 That’s why **indexes slow down writes** – they must be updated too.

---

# 📦 6. **Storage Internals by Database**

### 🐬 MySQL (InnoDB):

* Indexes stored in `.ibd` file.
* Primary key = clustered index (rows stored in PK order).
* Secondary indexes point to primary key value.

### 🐘 PostgreSQL:

* Each index is a separate structure.
* Uses `pg_index`, `pg_class` system tables.
* Supports B-Tree, Hash, GIN, GiST, BRIN indexes.

### 🪟 SQL Server:

* One clustered index per table (actual table order).
* Non-clustered index stores index + pointer to clustered key.

---

# 🧪 7. **Example with Query Plan (EXPLAIN)**

```sql
EXPLAIN SELECT * FROM employees WHERE name = 'Bob';
```

→ Shows whether the query **uses the index** or not.

If it uses:

```text
Using index condition; using idx_name
```

If not:

```text
Full table scan
```

You can also analyze index **cost, rows, and usage**.

---

# 🔄 8. **Indexing Best Practices**

| Best Practice                            | Why it helps                                   |
| ---------------------------------------- | ---------------------------------------------- |
| Index columns used in WHERE, JOIN, ORDER | Speeds up filtering and joining                |
| Avoid indexing low-cardinality columns   | Not useful (e.g., gender = M/F)                |
| Limit number of indexes                  | Writes slow down as more indexes need updating |
| Use composite indexes wisely             | Use leftmost prefix rule                       |
| Monitor with `EXPLAIN` or `ANALYZE`      | Helps validate if index is actually used       |

---

# 🧠 9. **Leftmost Prefix Rule (for composite indexes)**

If you do:

```sql
CREATE INDEX idx_name_age ON employees(name, age);
```

It can be used for:

* `WHERE name = 'Alice'` ✅
* `WHERE name = 'Alice' AND age = 30` ✅
* `WHERE age = 30` ❌ (name is the first prefix)

---

# 📌 10. **Conclusion Summary**

| Aspect           | Detail                                   |
| ---------------- | ---------------------------------------- |
| Structure        | Mostly B+ Tree, sometimes Hash or Bitmap |
| Stored As        | Separate structure on disk               |
| Usage            | Helps fast lookup, sorting, joining      |
| Cost             | Increases write time, consumes space     |
| Maintenance      | Auto-updated on INSERT, UPDATE, DELETE   |
| Query Visibility | Use `EXPLAIN` to check if index is used  |

