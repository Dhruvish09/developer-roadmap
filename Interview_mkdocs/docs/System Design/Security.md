# 🔐 Authentication & Authorization Overview

---

## ✅ What is JWT?

**JWT (JSON Web Token)** is a compact, URL-safe token format used to securely transmit information between parties as a JSON object.
It’s commonly used for **authentication** and **authorization** in web applications.

---

**🔐 JWT Token Structure**

| Component     | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| **Header**    | Specifies the algorithm & token type (e.g., `HS256`).                    |
| **Payload**   | Contains user data (e.g., `user ID`, `roles`, `expiry`).                 |
| **Signature** | Verifies the token’s integrity using a secret key or public/private key. |

---

**🔁 JWT Authentication Flow**

| Step | Description                             |
| ---- | --------------------------------------- |
| 1️⃣  | User logs in                            |
| 2️⃣  | Backend verifies credentials            |
| 3️⃣  | JWT token is created and sent to user   |
| 4️⃣  | User includes token in future requests  |
| 5️⃣  | Backend validates token & grants access |

---

**🔁 JWT Access + Refresh Token Workflow**

```text
[1] User logs in with username/password
     ↓
[2] Server validates and returns:
     🔹 Access Token (short-lived)
     🔹 Refresh Token (long-lived)
     ↓
[3] Client stores tokens:
     - Access Token → in memory or localStorage
     - Refresh Token → in secure cookie or localStorage
     ↓
[4] Client sends Access Token in Authorization header for protected APIs
     → If valid → proceed
     → If expired → send Refresh Token to get new Access Token
     ↓
[5] Server validates Refresh Token → returns new Access Token
```

---

### ✅ Pros

| Benefit                     | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| 🔒 Stateless Authentication | No need to store sessions on server—JWT holds required data. |
| 🚀 Scalable                 | Works well with microservices and distributed systems.       |
| 🌐 Cross-Domain Support     | Easily used in APIs across different domains.                |
| 📦 Self-contained           | Contains user info & metadata—minimizes DB hits.             |
| ⏱ Expiry Support            | Built-in expiration times for auto-invalidation.             |

---

### ❌ Cons

| Limitation                   | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| ⚠️ Security Risks            | Weak or leaked secret key can lead to token forgery.         |
| ♻️ Token Rotation Complexity | Requires careful handling of access & refresh token renewal. |

---


## 🔁 Session-Based Auth Flow

```text
[User Login]
     ↓
[Server validates credentials]
     ↓
[Session ID created & stored server-side (DB/memory)]
     ↓
[Session ID sent to client via cookie]
     ↓
[Client sends cookie with each request]
     ↓
[Server verifies session ID → grants access]
```

---

### ✅ Pros

| Benefit                  | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| 🔒 Easy Revocation       | Server can invalidate sessions at any time.          |
| 📉 Lightweight on Client | Only stores session ID, no sensitive data.           |
| 🧠 Simple to Implement   | Widely supported across web frameworks.              |
| 🔄 Easy Token Rotation   | Expiring sessions is simple—no refresh token needed. |

---

### ❌ Cons

| Limitation                | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| 🧠 Server-Side Storage    | Requires DB or memory to store sessions.                           |
| 🧱 Not Stateless          | Doesn’t scale easily without shared session storage (e.g., Redis). |
| 🌐 CSRF Risk              | Cookies auto-sent → CSRF protection is necessary.                  |
| 🔁 Expiry Handling Needed | Needs logic to manage session expiration.                          |

---

## 🔐 OAuth2

**OAuth2** is an **authorization protocol**, not authentication.
It allows secure access to user data from a third-party service **without sharing user credentials**.

---

### 🔁 OAuth2 Flow

**Google Login**
```text
[1] User clicks "Login with Google"
     ↓
[2] Redirect to Google Login Page
     ↓
[3] User authenticates & grants permission
     ↓
[4] Google redirects back with an authorization code
     ↓
[5] App exchanges code for an Access Token
     ↓
[6] App uses Access Token to access user data via Google APIs
```

---

### ✅ Pros

| Benefit                   | Description                                         |
| ------------------------- | --------------------------------------------------- |
| 🔐 No Password Sharing    | Users authenticate with third-party (e.g., Google). |
| 🌍 Third-party Access     | Access external APIs securely.                      |
| 🔄 Token Expiry & Refresh | Built-in token expiration improves security.        |
| 👥 SSO (Single Sign-On)   | Enables login via third-party identity providers.   |
| 📱 Platform Friendly      | Works across web, mobile, and native apps.          |

---

### ❌ Cons

| Limitation                | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| ⚙️ Complex to Implement   | Involves redirections, token exchange, scopes, etc.                 |
| 🔐 Token Security         | Leaked tokens can lead to unauthorized access.                      |
| 🌐 Third-Party Dependency | App reliability depends on external identity provider availability. |
| 📚 Learning Curve         | Understanding flows and roles is non-trivial.                       |

---

### 🧩 Use Cases:

* You want users to **log in using Google, Facebook, GitHub**, etc.
* You need **secure access to external user data**.
* You're building **cross-platform apps with SSO support**.

---

## 🔑 API Keys

**API Key** is a **unique token (string)** used to identify and authenticate a client making API requests.
It's like a "password for APIs".

---

### 🔁 API Key Workflow

```text
[Client sends API request]
     ↓
[API Key included in header or query param]
     ↓
[Server validates the API Key]
     ↓
[→ If valid → process the request]
[→ If invalid → 401 Unauthorized]
```

---

### ✅ Pros

| Benefit                | Description                                 |
| ---------------------- | ------------------------------------------- |
| 🧠 Easy to Implement   | Simple token-based logic.                   |
| ⚡ Fast Verification    | Lightweight validation.                     |
| 🔐 Usage Restrictions  | Apply IP, rate limits, and expiry controls. |
| 🔍 Monitoring Possible | Track API usage per key.                    |

---

### ❌ Cons

| Limitation                | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| 🚫 No User Identity       | Keys identify apps, not users.                           |
| 🔐 Key Leakage Risk       | Can be easily exposed in frontend or logs.               |
| ❌ Manual Expiry           | No built-in expiry—must be manually rotated.             |
| 🧾 Limited Access Control | Not ideal for granular user or permission-based control. |

---

### 🧩 Use Cases

| Scenario                          | Why API Keys Work                     |
| --------------------------------- | ------------------------------------- |
| 📊 Public APIs with Rate Limits   | Track and limit usage easily.         |
| 📱 Mobile or Web Frontends        | Easy integration with low complexity. |
| 🔌 Server-to-Server Communication | No user-specific access required.     |

---

## 🛡️ CSRF

**CSRF(Cross-Site Request Forgery)** is a web attack where a user is tricked into performing unintended actions on a web app where they’re authenticated.

---

🔐 CSRF Token

A **CSRF Token** is a **secret value** tied to the user session, included in forms or headers, to prevent CSRF attacks.

---

### 🔁 CSRF Token Workflow

```text
[1] User logs in
     ↓
[2] Server generates a CSRF token
     ↓
[3] Token stored in session and sent to client (hidden field / cookie)
     ↓
[4] Client includes token with requests
     ↓
[5] Server validates token
     ↓
[6] Valid → process request | Invalid → 403 Forbidden
```

---

### ✅ Pros

| Benefit                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| 🔒 Blocks CSRF Attacks | Ensures only legitimate requests are processed. |
| 🎯 User-Specific       | Tied to individual sessions—harder to forge.    |
| 🔁 Easy to Rotate      | Can be regenerated per form/request.            |

---

### ❌ Cons

| Limitation                         | Description                                           |
| ---------------------------------- | ----------------------------------------------------- |
| ⚙️ Requires Server State           | Not stateless like JWT.                               |
| 💼 Frontend Handling Needed        | Requires token injection in forms/requests.           |
| ❌ Not Needed for Header-Based APIs | Not required for APIs using Bearer tokens in headers. |

---

🐍 CSRF Protection

| Framework   | Method                                              |
| ----------- | --------------------------------------------------- |
| **Django**  | Built-in via `@csrf_protect` decorator              |
| **FastAPI** | Custom using `secrets.token_urlsafe()`              |
| **Flask**   | With extensions like `Flask-WTF` or `Flask-SeaSurf` |

---

✅ CSRF Token Required?

| Scenario                         | Token Required |
| -------------------------------- | -------------- |
| 🌐 HTML Forms with Cookies       | ✅ Yes          |
| 📱 APIs using Bearer Token (JWT) | ❌ No           |
| 🧾 Stateless APIs                | ❌ No           |

---

## 🔐 Encryption & Decryption

| Concept        | Description                                              |
| -------------- | -------------------------------------------------------- |
| **Encryption** | Convert plaintext to unreadable ciphertext using a key.  |
| **Decryption** | Convert ciphertext back to plaintext using the same key. |

---

**🔐 Python Encryption Support Comparison**

| Feature             | FastAPI                        | Flask                                          | Django                                                 |
| ------------------- | ------------------------------ | ---------------------------------------------- | ------------------------------------------------------ |
| 🔒 Simplicity       | Easy with external libraries   | Easy with external libraries                   | Medium (uses specific libs for field-level encryption) |
| 📦 Common Libraries | `cryptography`, `pycryptodome` | `itsdangerous`, `cryptography`, `pycryptodome` | `django-cryptography`, `django.core.signing`           |
| 🧾 Field Encryption | Manual via model logic         | Manual via model logic                         | ✅ Supported (`django-cryptography`)                    |
| 🔑 Password Hashing | ❌ Manual                       | ❌ Manual                                       | ✅ Built-in via `User.set_password()`                   |
| 🔏 Token Signing    | ❌ Use external lib             | ✅ With `itsdangerous`                          | ✅ Via `django.core.signing`                            |
| 🧪 Best Use Case    | API-based encryption           | Lightweight secure endpoints                   | Full systems with built-in user/token/security needs   |

---
