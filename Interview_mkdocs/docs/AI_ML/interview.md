# 1️⃣ RAG vs Fine-Tuning (Very Simple)

## 🔹 RAG (Retrieval-Augmented Generation)

**What it means:**
Before answering, the model **looks up relevant documents** and then answers **only from them**.

**Think of it like:**
📚 *Open book exam*

**Example:**

* Chatbot answering from **company policies**
* Support bot using **internal docs**

**Why use RAG**

* Data changes often
* You need **accurate answers**
* Want to avoid hallucinations

**Pros**

* More accurate
* Easy to update data
* Can show sources

**Cons**

* Slightly slower
* Needs vector database

---

## 🔹 Fine-Tuning

**What it means:**
You **train the model** to behave in a specific way.

**Think of it like:**
🧠 *Training someone to follow a fixed pattern*

**Example**

* Classifying tickets
* Always returning structured JSON
* Writing in a specific tone

**Pros**

* Faster responses
* Smaller prompts
* Consistent output

**Cons**

* Expensive
* Hard to update
* Still hallucinates facts

### ✅ Simple Rule (Very Important)

> **RAG = knowledge**
> **Fine-tuning = behavior**

---

# 2️⃣ How to Reduce Hallucinations (Simple)

Hallucination = **model makes up answers**

### ✅ Best Ways

1️⃣ **Use RAG**

* Answer only from documents

2️⃣ **Give strict instruction**

```
If answer is not in context, say "I don't know".
```

3️⃣ **Lower temperature**

* Use `0.1 – 0.3`

4️⃣ **Limit context**

* Too much text confuses the model

5️⃣ **Validate output**

* Reject answers without source

### ❌ What doesn’t help much

* Fine-tuning alone
* Bigger models without data

---

# 3️⃣ How to Scale GenAI APIs (Easy Explanation)

GenAI APIs scale **like normal backend systems**

### Basic Flow

```
User → FastAPI → Queue → LLM → Response
```

### Key Techniques

✅ **Async APIs**

* Don’t block requests

✅ **Queue (Celery / Redis)**

* Handle high load

✅ **Caching**

* Same prompt → same answer

✅ **Rate limiting**

* Prevent abuse

✅ **Use different models**

* Simple task → cheap model
* Complex task → powerful model

💡 Interview Line:

> “We scale GenAI using async processing, queues, and caching.”

---

# 4️⃣ Handling Long Documents (Very Common Question)

### Problem

* Token limits
* High cost
* Poor answers

### ✅ Solution (Step-by-Step)

1️⃣ **Split document into chunks**

* 500–800 tokens

2️⃣ **Store chunks in vector DB**

3️⃣ **Retrieve only relevant chunks**

4️⃣ **Send only those chunks to LLM**

📌 Never send full document directly

---

# 5️⃣ Cost Optimization (High Impact Topic)

### What increases cost?

* Large prompts
* Expensive models
* Repeated requests

### How to reduce cost

✅ Use smaller models where possible
✅ Cache responses & embeddings
✅ Reduce prompt size
✅ Limit output tokens
✅ Use RAG instead of long prompts

💬 Interview Quote:

> “Reducing tokens is the easiest way to reduce GenAI cost.”

---

# 6️⃣ Streaming vs Normal Responses (Simple)

## 🔹 Normal Response

* Wait for full answer
* Easier to implement

**Use when**

* Background jobs
* APIs returning JSON

---

## 🔹 Streaming Response

* Answer comes word-by-word
* Feels faster to users

**Use when**

* Chatbots
* Long answers

💡 Streaming improves **user experience**, not accuracy

---

# 7️⃣ Token Limits Handling (Easy)

### Problems

* Input too long
* Model cuts answers

### Solutions

✅ Count tokens before sending
✅ Remove old messages
✅ Summarize chat history
✅ Store memory in vector DB

### Memory Types

| Type       | Purpose          |
| ---------- | ---------------- |
| Short-term | Recent messages  |
| Summary    | Old chat summary |
| Vector     | Important facts  |

---