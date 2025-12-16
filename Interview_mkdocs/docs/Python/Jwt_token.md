## 🔐 What is JWT (in simple words)?

**JWT (JSON Web Token)** is a **digital ID card** issued by the server after login.

Once issued:

* Client shows this ID card on **every request**
* Server verifies it
* No need to log in again

---

## 🌍 Real-life analogy

Think of JWT like a **metro card** 🎫

1. You **login** → you get a **metro card**
2. Every station → you **show the card**
3. Station checks:

   * Is it **valid**?
   * Is it **expired**?
4. If yes → allow entry

---

## 🧠 JWT structure (don’t memorize, just understand)

JWT = `HEADER.PAYLOAD.SIGNATURE`

Example:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE3MDAwMDAwMDB9.
xYz...
```

### 1️⃣ Header

* Token type (JWT)
* Algorithm (HS256 / RS256)

### 2️⃣ Payload

* User data (not secret!)

```json
{
  "user_id": 1,
  "role": "admin",
  "exp": 1700000000
}
```

### 3️⃣ Signature (MOST IMPORTANT)

Created using:

```
Header + Payload + Secret Key
```

👉 Prevents **tampering**

---

## 🔁 JWT flow in a LIVE application

### 🔹 Step 1: Login

User sends:

```
POST /login
email + password
```

Server:

* Validates credentials
* Creates JWT
* Sends it back

```json
{
  "access_token": "jwt_token_here"
}
```

---

### 🔹 Step 2: Store token (Client side)

* Web → LocalStorage / HttpOnly Cookie
* Mobile → Secure storage

---

### 🔹 Step 3: Use token on every request

Client sends token in **Authorization header**:

```
Authorization: Bearer <JWT_TOKEN>
```

---

### 🔹 Step 4: Server validates token

Server checks:

1. ✅ Signature is valid
2. ✅ Token not expired
3. ✅ Token not altered
4. ✅ User exists
5. ✅ Role/permissions allowed

If all pass → **request allowed**

---

## 🔐 How JWT provides SECURITY

### ✅ 1. No password sent again

Only token is sent → safer

---

### ✅ 2. Signature prevents tampering

If attacker changes:

```json
"role": "admin"
```

👉 Signature becomes invalid → request rejected

---

### ✅ 3. Expiry time

Token auto-expires:

```json
"exp": 1700000000
```

Even if stolen → usable only for short time

---

### ✅ 4. Stateless authentication

* Server doesn’t store sessions
* Easy to scale (microservices)

---

## 🔁 Access Token vs Refresh Token (LIVE systems)

### Access Token

* Short life (5–15 minutes)
* Used for API calls

### Refresh Token

* Long life (7–30 days)
* Used to generate new access token

Flow:

```
Access token expired → send refresh token → get new access token
```

---

## 🔒 Extra production security (interview gold ⭐)

### 🔹 Use HTTPS

JWT must **never** go over HTTP

---

### 🔹 Use HttpOnly Cookies (Web)

Prevents XSS attacks

---

### 🔹 Token Blacklisting (Logout)

Store refresh tokens in DB/Redis
Invalidate on logout

---

### 🔹 Role-based access

```python
if user.role != "admin":
    deny access
```

---

## ⚠️ Common mistakes (mention in interview)

❌ Storing secrets in payload
❌ Long-lived access tokens
❌ No refresh token
❌ Sending JWT in query params

---

## 🧪 Mini FastAPI example (simple)

```python
from fastapi import Depends, HTTPException
from jose import jwt, JWTError

def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except JWTError:
        raise HTTPException(status_code=401)
```