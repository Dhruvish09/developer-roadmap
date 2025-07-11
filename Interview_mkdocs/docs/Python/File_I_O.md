# 📘 Python File I/O – Summary

---

## ✅ Definition

**File I/O (Input/Output)** in Python is the process of **reading from** and **writing to** files like `.txt`, `.csv`, `.xlsx`, and `.pdf`.

---

## 🛠️ Common Methods

| Method / Function      | Purpose                           |
| ---------------------- | --------------------------------- |
| `open(filename, mode)` | Opens a file (e.g. `r`, `w`, `a`) |
| `file.read()`          | Reads entire content              |
| `file.readline()`      | Reads a single line               |
| `file.readlines()`     | Reads all lines into a list       |
| `file.write(data)`     | Writes data                       |
| `file.close()`         | Closes the file                   |
| `with open(...)`       | Safely opens and auto-closes file |

---

## 💼 Use Cases + Sample Examples

---

### 1️⃣ `.txt` File – Notes, Logs

📌 **Use Case**: Store or read a to-do list

```python
# Write to a .txt file
with open("todo.txt", "w") as f:
    f.write("1. Buy milk\n2. Call friend")

# Read from a .txt file
with open("todo.txt", "r") as f:
    print(f.read())
```

---

### 2️⃣ `.csv` File – Tabular Data (e.g. marks, sales)

📌 **Use Case**: Store student scores

```python
import csv

# Write CSV
with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Score"])
    writer.writerow(["Alice", 90])
    writer.writerow(["Bob", 85])

# Read CSV
with open("students.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
```

---

### 3️⃣ `.xlsx` File – Excel Reports

📌 **Use Case**: Generate report card

```python
import openpyxl

# Write Excel
wb = openpyxl.Workbook()
ws = wb.active
ws.append(["Name", "Math"])
ws.append(["Tom", 88])
wb.save("report.xlsx")

# Read Excel
wb = openpyxl.load_workbook("report.xlsx")
ws = wb.active
for row in ws.iter_rows(values_only=True):
    print(row)
```

> 🧠 Install with: `pip install openpyxl`

---

### 4️⃣ `.pdf` File – Read Documents

📌 **Use Case**: Extract text from a PDF

```python
import PyPDF2

with open("sample.pdf", "rb") as f:
    reader = PyPDF2.PdfReader(f)
    for page in reader.pages:
        print(page.extract_text())
```

> 🧠 Install with: `pip install PyPDF2`

---

## 🧾 Summary Table

| File Type | Use Case       | Python Tools    |
| --------- | -------------- | --------------- |
| `.txt`    | Notes, logs    | Built-in `open` |
| `.csv`    | Data tables    | `csv` module    |
| `.xlsx`   | Excel reports  | `openpyxl`      |
| `.pdf`    | Read documents | `PyPDF2`        |
