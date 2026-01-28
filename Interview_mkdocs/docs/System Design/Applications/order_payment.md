# ✅ Order & Payment System

## 🧩 Overall Flow (One Look)

```
User
 ↓
Order Service
 ↓
Inventory Service (Reserve)
 ↓
Payment Service
 ↓
Payment Gateway
 ↓
Webhook
 ↓
Order Confirmation
 ↓
Inventory Deduction
 ↓
Notification
```

---

## 1️⃣ Order Creation (Inventory First)

**Purpose:** Create order safely without charging user

```
User → Order Service → Inventory Service
```

### Steps

1. User places order
2. Order Service validates items & price
3. Inventory Service **reserves stock**
4. Order saved with status **CREATED**
5. Order ID returned

✅ No payment yet
✅ Stock is locked

---

## 2️⃣ Payment Initiation

**Purpose:** Start payment securely

```
User → Payment Service → Payment Gateway
```

### Steps

1. User clicks **Pay**
2. Payment Service creates payment request
3. Payment Gateway checkout opens
4. Order updated to **PAYMENT_PENDING**

✅ Card handled by gateway
✅ Backend owns payment intent

---

## 3️⃣ Payment Result (Webhook Driven)

**Purpose:** Avoid fake success

```
Payment Gateway → Payment Service (Webhook)
```

### Steps

1. Gateway sends webhook (success / failure)
2. Payment Service verifies signature
3. Payment status saved
4. Payment event published

🚨 Frontend response is ignored

---

## 4️⃣ Order Finalization

### ✅ If Payment SUCCESS

```
Payment Event → Order Service → Inventory Service
```

### Steps

1. Order marked **PAID**
2. Inventory stock **deducted**
3. Order marked **CONFIRMED**
4. Notification sent

🎯 Money captured
🎯 Order confirmed

---

### ❌ If Payment FAILURE

```
Payment Event → Order Service → Inventory Service
```

### Steps

1. Order marked **FAILED**
2. Inventory **released**
3. User notified

🎯 No money deducted
🎯 Stock restored

---

## 5️⃣ Refund Flow (Optional)

```
User → Order Service → Payment Service → Gateway
```

### Steps

1. User requests refund
2. Payment Service initiates refund
3. Gateway confirms refund
4. Order → **REFUNDED**
5. Inventory optionally restored

---

## 6️⃣ Idempotency Flow (Critical)

**Why:** Prevent double charge

```
Client → Payment Service
        (Idempotency-Key)
```

* Same key = same response
* Stored in Redis / DB
* Safe retries

---

## 7️⃣ Failure Recovery

### Payment success but order not confirmed

* Event retry
* Reconciliation job fixes state

### Inventory locked too long

* Auto-release after timeout

---

## 8️⃣ Order State Machine (Final)

```
CREATED
  ↓
PAYMENT_PENDING
  ↓
PAID
  ↓
CONFIRMED

FAILED / CANCELLED / REFUNDED
```
