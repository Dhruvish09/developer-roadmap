# ✅ **MongoDB Complete Topics With Examples (Cheat Sheet)**

---

# **1. Basic Database & Collection Commands**

### **Create / Switch Database**

```js
use mydb
```

### **Show Databases**

```js
show dbs
```

### **Drop Database**

```js
db.dropDatabase()
```

### **Show Collections**

```js
show collections
```

### **Create Collection**

```js
db.createCollection("students")
```

### **Drop Collection**

```js
db.students.drop()
```

---

# **2. Insert Operations**

### **Insert One**

```js
db.students.insertOne({
  name: "Rahul", age: 22, city: "Mumbai"
})
```

### **Insert Many**

```js
db.students.insertMany([
  { name: "Amit", age: 23 },
  { name: "Sneha", age: 21 }
])
```

---

# **3. Find / Select Queries**

### **Find All**

```js
db.students.find()
```

### **Pretty Print**

```js
db.students.find().pretty()
```

### **Find With Fields**

```js
db.students.find({ city: "Mumbai" })
```

### **Find With Selected Columns**

```js
db.students.find(
  { city: "Mumbai" },
  { name: 1, age: 1, _id: 0 }
)
```

---

# **4. Query Operators**

### **Comparison Operators**

| Operator | Meaning      | Example     |
| -------- | ------------ | ----------- |
| `$gt`    | greater than | `age > 20`  |
| `$lt`    | less than    | `age < 25`  |
| `$gte`   | ≥            | `age >= 18` |
| `$lte`   | ≤            | `age <= 30` |
| `$ne`    | not equal    | `age != 25` |
| `$in`    | in list      | `[1,2,3]`   |
| `$nin`   | not in list  | `[1,2,3]`   |

Example:

```js
db.students.find({ age: { $gte: 18, $lte: 25 } })
```

---

# **5. Logical Operators**

### **AND Condition**

```js
db.students.find({
  age: { $gt: 20 },
  city: "Delhi"
})
```

### **OR Condition**

```js
db.students.find({
  $or: [
    { city: "Delhi" },
    { city: "Mumbai" }
  ]
})
```

### **NOT Operator**

```js
db.students.find({
  age: { $not: { $gt: 25 } }
})
```

---

# **6. Update Operations**

### **Update One**

```js
db.students.updateOne(
  { name: "Rahul" },
  { $set: { city: "Pune" } }
)
```

### **Update Many**

```js
db.students.updateMany(
  { city: "Mumbai" },
  { $set: { verified: true } }
)
```

### **Increment Value**

```js
db.students.updateOne(
  { name: "Rahul" },
  { $inc: { age: 1 } }
)
```

---

# **7. Delete Operations**

### **Delete One**

```js
db.students.deleteOne({ name: "Rahul" })
```

### **Delete Many**

```js
db.students.deleteMany({ city: "Delhi" })
```

---

# **8. Sort, Limit, Skip**

### **Sort**

```js
db.students.find().sort({ age: 1 })   // 1 = Asc, -1 = Desc
```

### **Limit**

```js
db.students.find().limit(5)
```

### **Skip**

```js
db.students.find().skip(10)
```

### **Pagination**

```js
db.students.find().skip(10).limit(5)
```

---

# **9. Indexing**

### **Create Index**

```js
db.students.createIndex({ name: 1 })
```

### **Unique Index**

```js
db.students.createIndex({ email: 1 }, { unique: true })
```

### **Show Indexes**

```js
db.students.getIndexes()
```

### **Drop Index**

```js
db.students.dropIndex("name_1")
```

---

# **10. Aggregation Framework (MOST IMPORTANT)**

### **Basic Aggregation**

```js
db.students.aggregate([
  { $match: { city: "Mumbai" } },
  { $group: { _id: "$city", total: { $sum: 1 } } }
])
```

### **Pipeline Structure**

| Stage      | Description         |
| ---------- | ------------------- |
| `$match`   | Filter data         |
| `$group`   | Group and aggregate |
| `$sort`    | Sort results        |
| `$limit`   | Limit records       |
| `$project` | Select fields       |
| `$lookup`  | Join collections    |
| `$unwind`  | Flatten arrays      |

---

# **11. Group By (Equivalent of SQL GROUP BY)**

### **Total Students Per City**

```js
db.students.aggregate([
  { $group: { _id: "$city", totalStudents: { $sum: 1 } } },
  { $sort: { totalStudents: -1 } }
])
```

---

# **12. MongoDB Join (lookup)**

### **students + marks join**

```js
db.students.aggregate([
  {
    $lookup: {
      from: "marks",
      localField: "student_id",
      foreignField: "student_id",
      as: "result"
    }
  }
])
```

---

# **13. Projection (Select specific columns)**

```js
db.students.find(
  {},
  { _id: 0, name: 1, city: 1 }
)
```

---

# **14. Text Search**

### **Create Text Index**

```js
db.products.createIndex({ name: "text", description: "text" })
```

### **Search**

```js
db.products.find({ $text: { $search: "mobile fast" } })
```

---

# **15. Array Operators**

### **Find records where array contains value**

```js
db.courses.find({ tags: "python" })
```

### **Add value to array**

```js
db.courses.updateOne(
  { name: "Backend" },
  { $push: { tags: "fastapi" } }
)
```

### **Remove array value**

```js
db.courses.updateOne(
  { name: "Backend" },
  { $pull: { tags: "django" } }
)
```

---

# **16. $unwind (Expand array into multiple documents)**

```js
db.orders.aggregate([
  { $unwind: "$items" }
])
```

---

# **17. Distinct Values**

```js
db.students.distinct("city")
```

---

# **18. Counting**

### **Count documents**

```js
db.students.countDocuments({ city: "Delhi" })
```

---

# **19. Backup & Restore**

### **Backup**

```bash
mongodump --db=mydb
```

### **Restore**

```bash
mongorestore --db=mydb dump/mydb
```

---

# **20. ObjectId Operations**

### **Find by ObjectId**

```js
db.students.find({ _id: ObjectId("65d10f3ca525d246df1257cd") })
```

---

# **21. Replace Document**

```js
db.students.replaceOne(
  { name: "Amit" },
  { name: "Amit", age: 25, city: "Delhi" }
)
```

---

# **22. Upsert (Update + Insert)**

```js
db.students.updateOne(
  { name: "John" },
  { $set: { age: 24 } },
  { upsert: true }
)
```

---

# **23. Renaming Fields**

```js
db.students.updateMany(
  {},
  { $rename: { "city": "location" } }
)
```

---

# **24. Drop Field**

```js
db.students.updateMany(
  {},
  { $unset: { age: 1 } }
)
```

---

# **25. Creating & Using Views**

### **Create View**

```js
db.createView(
  "mumbai_students",
  "students",
  [{ $match: { city: "Mumbai" } }]
)
```

---

# **26. Bulk Write**

```js
db.students.bulkWrite([
  { insertOne: { document: { name: "A", age: 20 } } },
  { updateOne: { filter: { name: "A" }, update: { $set: { age: 21 } } } },
  { deleteOne: { filter: { name: "A" } } }
])
```

---

# **27. Transactions (MongoDB Atlas / Replica Set)**

```js
session = db.getMongo().startSession()
session.startTransaction()

students = session.getDatabase("mydb").students

students.updateOne({ name: "A" }, { $set: { balance: 100 } })
students.updateOne({ name: "B" }, { $set: { balance: 200 } })

session.commitTransaction()
session.endSession()
```

---

# **28. Schema Validation**

```js
db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: { bsonType: "string" },
        age: { bsonType: "int", minimum: 18 }
      }
    }
  }
})
```

---

# **29. Change Streams (Real-time data watch)**

```js
db.students.watch()
```

---

# **30. TTL Index (Auto delete data)**

### **Auto delete logs after 2 days**

```js
db.logs.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 172800 }
)
```