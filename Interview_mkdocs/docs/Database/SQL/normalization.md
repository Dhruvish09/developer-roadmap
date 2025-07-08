Normalization database ka ek process hai jisme hum data ko organize karte hain taaki redundancy (data ka duplication) aur anomalies (update, delete, insert problems) se bacha ja sake. MySQL ya kisi bhi RDBMS (Relational Database Management System) me normalization ka use table structure ko efficient banane ke liye hota hai.

Chaliye har Normal Form ko simple Hindi me samjhte hain with examples:

---

# 🔴 **1NF (First Normal Form)**

**Rule:**

1. Table ke sabhi columns atomic (indivisible) hone chahiye
2. Har column me ek hi value honi chahiye (no multiple values in one column)

# ❌ Not in 1NF:

| Student\_ID | Name  | Subjects         |
| ----------- | ----- | ---------------- |
| 1           | Ravi  | Math, Science    |
| 2           | Priya | English, History |

> **Problem**: Subjects column me multiple values hai (comma-separated), ye non-atomic hai.

### ✅ In 1NF:

| Student\_ID | Name  | Subject |
| ----------- | ----- | ------- |
| 1           | Ravi  | Math    |
| 1           | Ravi  | Science |
| 2           | Priya | English |
| 2           | Priya | History |

> **Solution**: Har row me ek hi subject rakh kar atomic bana diya.

---

## 🟠 **2NF (Second Normal Form)**

**Rule:**

1. Table 1NF me hona chahiye
2. Aur **partial dependency** nahi honi chahiye (matlab koi non-prime attribute kisi composite key ka part na ho)

### ❌ Not in 2NF (Composite Primary Key):

| Student\_ID | Subject | Subject\_Fee |
| ----------- | ------- | ------------ |
| 1           | Math    | 1000         |
| 1           | Science | 1000         |
| 2           | Math    | 1000         |

> Yaha primary key hai: `(Student_ID, Subject)`, lekin `Subject_Fee` sirf `Subject` pe depend karta hai. Ye **partial dependency** hai.

### ✅ In 2NF:

**Subject Table:**

| Subject | Subject\_Fee |
| ------- | ------------ |
| Math    | 1000         |
| Science | 1000         |

**Student\_Subject Table:**

| Student\_ID | Subject |
| ----------- | ------- |
| 1           | Math    |
| 1           | Science |
| 2           | Math    |

> **Solution**: Fee ko subject table me shift karke dependency theek kiya.

---

## 🟢 **3NF (Third Normal Form)**

**Rule:**

1. Table 2NF me hona chahiye
2. **Transitive dependency** nahi honi chahiye (non-key column kisi aur non-key column pe depend na ho)

### ❌ Not in 3NF:

| Student\_ID | Name  | ZipCode | City   |
| ----------- | ----- | ------- | ------ |
| 1           | Ravi  | 110001  | Delhi  |
| 2           | Priya | 400001  | Mumbai |

> Yaha `City` depend karta hai `ZipCode` pe, na ki directly `Student_ID` pe — ye transitive dependency hai.

### ✅ In 3NF:

**Student Table:**

| Student\_ID | Name  | ZipCode |
| ----------- | ----- | ------- |
| 1           | Ravi  | 110001  |
| 2           | Priya | 400001  |

**ZipCode Table:**

| ZipCode | City   |
| ------- | ------ |
| 110001  | Delhi  |
| 400001  | Mumbai |

> **Solution**: City ko alag table me le jaakar dependency clear ki.

---

## 🟣 **BCNF (Boyce-Codd Normal Form)**

**Rule:**

1. Table 3NF me hona chahiye
2. Har **determinant** super key hona chahiye (har jis column pe koi aur column depend karta ho, wo unique hona chahiye)

### ❌ Not in BCNF:

| Professor | Subject | Department |
| --------- | ------- | ---------- |
| A         | Math    | Science    |
| A         | Physics | Science    |
| B         | History | Arts       |

> Yaha ek Professor ek hi Department me ho sakta hai, lekin multiple subjects padha sakta hai. Toh `Professor → Department` hai, lekin `Professor` **super key nahi hai** (kyunki duplicate Professor aa raha hai).

### ✅ In BCNF:

**Professor Table:**

| Professor | Department |
| --------- | ---------- |
| A         | Science    |
| B         | Arts       |

**Professor\_Subject Table:**

| Professor | Subject |
| --------- | ------- |
| A         | Math    |
| A         | Physics |
| B         | History |

---

## ✅ Summary Table:

| Normal Form | Main Rule                              | Problem Solved                  |
| ----------- | -------------------------------------- | ------------------------------- |
| 1NF         | Atomic columns, no multiple values     | Repeating values in columns     |
| 2NF         | No partial dependency on composite key | Redundant data from partial key |
| 3NF         | No transitive dependency               | Indirect dependency             |
| BCNF        | Every determinant is a super key       | Advanced redundancy cases       |

---

Agar aap chaho to main ek MySQL schema ya `CREATE TABLE` example bhi bana ke de sakta hoon jo 1NF → BCNF tak ka transition show karta ho.

Kya aapko chahiye wo SQL queries ke sath?
