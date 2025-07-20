### MongoDB Commands – Description + Example
### 🛢️ **Database Management**

| Method                  | Description                      | Sample Usage                      |
| ----------------------- | -------------------------------- | --------------------------------- |
| `use`                   | Switches to specified database.  | `use school`                      |
| `db.createCollection()` | Creates a new collection.        | `db.createCollection("students")` |
| `db.dropDatabase()`     | Deletes the current database.    | `db.dropDatabase()`               |
| `show dbs`              | Lists all databases.             | `show dbs`                        |
| `show collections`      | Lists all collections in the DB. | `show collections`                |

---

### 📐 **Collection Management**

| Method                  | Description           | Sample Usage                             |
| ----------------------- | --------------------- | ---------------------------------------- |
| `db.collection.drop()`  | Deletes a collection. | `db.students.drop()`                     |
| `db.renameCollection()` | Renames a collection. | `db.oldName.renameCollection("newName")` |

---

### 📊 **CRUD Operations**

| Method                       | Description                      | Sample Usage                                                       |
| ---------------------------- | -------------------------------- | ------------------------------------------------------------------ |
| `db.collection.insertOne()`  | Inserts a single document.       | `db.students.insertOne({name: "Alice", age: 20})`                  |
| `db.collection.insertMany()` | Inserts multiple documents.      | `db.students.insertMany([{name: "Bob"}, {name: "Eve"}])`           |
| `db.collection.find()`       | Retrieves documents.             | `db.students.find({age: 20})`                                      |
| `db.collection.findOne()`    | Retrieves a single document.     | `db.students.findOne({name: "Alice"})`                             |
| `db.collection.updateOne()`  | Updates first matching document. | `db.students.updateOne({name: "Alice"}, {$set: {age: 21}})`        |
| `db.collection.updateMany()` | Updates all matching documents.  | `db.students.updateMany({age: 20}, {$set: {grade: "B"}})`          |
| `db.collection.replaceOne()` | Replaces the whole document.     | `db.students.replaceOne({name: "Bob"}, {name: "Robert", age: 25})` |
| `db.collection.deleteOne()`  | Deletes first matching document. | `db.students.deleteOne({name: "Alice"})`                           |
| `db.collection.deleteMany()` | Deletes all matching documents.  | `db.students.deleteMany({age: 20})`                                |

---

### 🔍 **Query Modifiers**

| Method              | Description                        | Sample Usage                            |
| ------------------- | ---------------------------------- | --------------------------------------- |
| `.sort()`           | Sorts query results.               | `db.students.find().sort({age: -1})`    |
| `.limit()`          | Limits number of results.          | `db.students.find().limit(5)`           |
| `.skip()`           | Skips specified number of results. | `db.students.find().skip(10)`           |
| `.countDocuments()` | Counts matching documents.         | `db.students.countDocuments({age: 20})` |
| `.distinct()`       | Gets distinct values of a field.   | `db.students.distinct("age")`           |

---

### 🔧 **Indexing**

| Method                        | Description        | Sample Usage                         |
| ----------------------------- | ------------------ | ------------------------------------ |
| `db.collection.createIndex()` | Creates an index.  | `db.students.createIndex({name: 1})` |
| `db.collection.dropIndex()`   | Drops an index.    | `db.students.dropIndex({name: 1})`   |
| `db.collection.getIndexes()`  | Lists all indexes. | `db.students.getIndexes()`           |

---

### 📊 **Aggregation & Grouping**

| Method                      | Description                       | Sample Usage                                                         |
| --------------------------- | --------------------------------- | -------------------------------------------------------------------- |
| `db.collection.aggregate()` | Performs aggregation pipeline.    | `db.students.aggregate([{$group: {_id: "$age", count: {$sum: 1}}}])` |
| `$match`                    | Filters documents (like `WHERE`). | `{ $match: {age: 20} }`                                              |
| `$group`                    | Groups documents.                 | `{ $group: {_id: "$grade", total: {$sum: 1}} }`                      |
| `$project`                  | Shapes the output.                | `{ $project: {name: 1, age: 1} }`                                    |
| `$sort`                     | Sorts results.                    | `{ $sort: {age: -1} }`                                               |
| `$limit`                    | Limits the results.               | `{ $limit: 5 }`                                                      |

---

### 🧪 **Validation & Schema**

| Method                  | Description             | Sample Usage                                                                                             |
| ----------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `db.createCollection()` | With schema validation. | `db.createCollection("students", {validator: { $jsonSchema: {bsonType: "object", required: ["name"]}}})` |

---

### 🔐 **User & Role Management**

| Method            | Description               | Sample Usage                                                        |
| ----------------- | ------------------------- | ------------------------------------------------------------------- |
| `db.createUser()` | Creates a new user.       | `db.createUser({user: "admin", pwd: "pass", roles: ["readWrite"]})` |
| `db.updateUser()` | Updates an existing user. | `db.updateUser("admin", {pwd: "newpass"})`                          |
| `db.dropUser()`   | Removes a user.           | `db.dropUser("admin")`                                              |
| `db.getUsers()`   | Lists users.              | `db.getUsers()`                                                     |

---

### 🧠 **Utility Commands**

| Command                 | Description                     | Sample Usage          |
| ----------------------- | ------------------------------- | --------------------- |
| `db.stats()`            | Shows database statistics.      | `db.stats()`          |
| `db.collection.stats()` | Shows collection statistics.    | `db.students.stats()` |
| `db.version()`          | Returns MongoDB version.        | `db.version()`        |
| `db.serverStatus()`     | Returns server info and health. | `db.serverStatus()`   |