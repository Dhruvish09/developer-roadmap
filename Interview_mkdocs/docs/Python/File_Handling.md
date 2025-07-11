### 📘 Topic: **JSON / CSV / XML / YAML**

| Format   | What it is                               | Use Case                          | Example                          |
| -------- | ---------------------------------------- | --------------------------------- | -------------------------------- |
| **JSON** | Data format (JavaScript Object Notation) | APIs, config files                | `json.load()`, `json.dump()`     |
| **CSV**  | Comma-separated values                   | Excel exports, flat databases     | `csv.reader()`, `csv.writer()`   |
| **XML**  | Markup language                          | Data from legacy APIs or configs  | `xml.etree.ElementTree`          |
| **YAML** | Human-friendly config format             | Docker, Kubernetes, CI/CD configs | `yaml.safe_load()` (with PyYAML) |

#### ✅ JSON Example:

```python
import json

data = {"name": "Alice", "age": 25}
with open("data.json", "w") as f:
    json.dump(data, f)
```

---

### 📘 Topic: **Log File Processing**

| Description                    | Use Case                        | Example                           |
| ------------------------------ | ------------------------------- | --------------------------------- |
| Reading `.log` or `.txt` files | Monitor, parse, or extract logs | Find error lines or user activity |

#### ✅ Example:

```python
with open("app.log") as log:
    for line in log:
        if "ERROR" in line:
            print(line)
```

---

### 📘 Topic: **File Compression**

| Method                | Description                  | Use Case                    | Example                              |
| --------------------- | ---------------------------- | --------------------------- | ------------------------------------ |
| `.zip`, `.gz`, `.tar` | Compress or decompress files | Backup, send, extract files | `zipfile`, `gzip`, `tarfile` modules |

#### ✅ Zip Example:

```python
import zipfile

with zipfile.ZipFile("archive.zip", "w") as zipf:
    zipf.write("data.txt")
```

---

### 📘 Topic: **Path Handling**

| Tool                 | Description                  | Use Case                               | Example                           |
| -------------------- | ---------------------------- | -------------------------------------- | --------------------------------- |
| `os.path`, `pathlib` | Handle file and folder paths | Cross-platform path building, checking | `Path.exists()`, `os.path.join()` |

#### ✅ Example with `pathlib`:

```python
from pathlib import Path

file = Path("data.txt")
if file.exists():
    print("File found!")
```

---

### 📘 Topic: **Binary Files / Buffers**

| Description                                     | Use Case                                 | Example                               |
| ----------------------------------------------- | ---------------------------------------- | ------------------------------------- |
| Read/write non-text files (images, audio, etc.) | Work with low-level data or byte streams | Use `'rb'` / `'wb'` modes in `open()` |

#### ✅ Example:

```python
with open("image.png", "rb") as img:
    content = img.read()
    print(len(content))  # Bytes read
```