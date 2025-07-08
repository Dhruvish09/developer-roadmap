# 🧠 Python Web Frameworks:  Flask Interview Guide

---

## 📌 Table of Contents

### Flask

1. Flask Basics
2. Cookies & URL Handling


## 🦄 FLASK SECTION

### 1. What does `url_for` do in Flask?

**Ans:**
`url_for()` dynamically generates URLs for the specified view function. This helps avoid hardcoding URLs.

```python
from flask import url_for
url_for('home')  # Outputs: '/home'
```

---

### 2. How do you handle cookies in Flask?

**Ans:**
Use the `set_cookie()` method on the response object:

```python
@app.route('/setcookie')
def set_cookie():
    resp = make_response("Setting cookie")
    resp.set_cookie('username', 'John')
    return resp
```

---