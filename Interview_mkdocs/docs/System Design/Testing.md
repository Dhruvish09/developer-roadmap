### **✅ Pytest**

* **Use for:** Unit testing in Python.
* **Library:** [`pytest`](https://pypi.org/project/pytest/)
* **Add-ons:**

  * `pytest-mock`: For mocking
  * `pytest-cov`: For code coverage
* **Features:**

  * Fixtures (`@pytest.fixture`)
  * Mocks (via `unittest.mock` or `pytest-mock`)
  * Simple `assert` statements
  * Coverage reports (`pytest --cov=your_module`)

---

### **✅ Nose**

* **Use for:** Basic test discovery and running (legacy).
* **Library:** [`nose`](https://pypi.org/project/nose/) *(Not recommended for new projects)*
* **Alternative:** Use **`pytest`** instead (modern, powerful).

---

### **✅ Locust**

* **Use for:** Load & performance testing.
* **Library:** [`locust`](https://pypi.org/project/locust/)
* **How it works:**

  * Define **user behavior** using Python classes.
  * Simulates concurrent users.
  * Web UI at `http://localhost:8089`

---

✅ **Install All:**

```bash
pip install pytest pytest-cov pytest-mock locust
```
