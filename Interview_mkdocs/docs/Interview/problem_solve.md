# 🚀 Problem-Solution Documentation with Detailed Workflows

---

## ✅ 1. GitHub Actions CI/CD Workflow

### 🔧 Challenge

CI pipeline was inconsistent and didn’t automatically run tests on push or PRs.

### 💡 Solution

Set up GitHub Actions for:

* Code checkout
* Dependency installation
* Testing and coverage reporting
* Notifications and deployment

### 🧭 Workflow

```
👨‍💻 Developer
   │
   └──> Push code / Open Pull Request (GitHub)
             │
             ▼
🔄 GitHub Actions Triggered
             │
             ├──> 🛎️ Checkout code from repo
             ├──> 🐍 Setup Python + Install dependencies
             ├──> 🧪 Run unit tests with pytest
             ├──> 📊 Generate code coverage report
             └──> 📢 Notify developer (Slack / GitHub UI)
             ▼
🧐 Code Review Process
             │
             ├──> ❌ If tests fail → Fix code → Push again
             └──> ✅ If all pass → Merge to `main`
```

---

## ✅ 2. Unit Test Coverage Enforcement

### 🔧 Challenge

Test coverage was below 30% and missing from CI checks.

### 💡 Solution

* Added `pytest-cov`
* Configured CI to block merges if coverage <90%

### 🧭 Workflow

```
🧑‍💻 Developer
   │
   └──> Writes/Refactors Code
             │
             ▼
🧪 Write Unit Tests
             │
             ▼
🚀 Run pytest with coverage in CI
             │
             ▼
📊 Generate Coverage Report
             │
             ▼
🟢 If coverage >= 90% → Merge Allowed
🔴 Else → Block PR + Notify Developer
```

---

## ✅ 3. Playwright for UI Automation

### 🔧 Challenge

Dynamic content made automation flaky.

### 💡 Solution

* Used Playwright for stable headless UI testing
* Waited for selectors and validated results

### 🧭 Workflow

```
🧑‍💻 Developer
   │
   └──> Writes E2E Playwright Tests
             │
             ▼
🔄 CI Triggered on Commit
             │
             ├──> 🌐 Launch headless browser
             ├──> 🧭 Visit dynamic page
             ├──> ⏳ Wait for selector
             ├──> 🎯 Interact with UI elements
             └──> ✅ Assert and report result
```

---

## ✅ 4. Rotating User-Agents in Scraper (CrawlerAI)

### 🔧 Challenge

Default headers blocked; scraper failed.

### 💡 Solution

* Rotated user agents
* Stopped on matching HTML pattern

### 🧭 Workflow

```
🤖 Scraper
   │
   └──> Load User-Agent List
             │
             ▼
🔁 Loop through UAs
             │
             ├──> Send request with UA
             ├──> Check if page structure is valid
             ├──> ❌ If not → Try next UA
             └──> ✅ If matched → Save & Exit
```

---

## ✅ 5. Redis Pub/Sub for Streaming

### 🔧 Challenge

Large responses caused lag and timeout.

### 💡 Solution

* Used Redis Pub/Sub to stream chunks
* Client received data in real time

### 🧭 Workflow

```
🧑‍💻 Client
   │
   └──> Requests Large Data
             │
             ▼
🧠 Server
   │
   ├──> Divide data into chunks
   ├──> Publish each chunk to Redis channel
   └──> ✅ Send metadata (e.g. done flag)
             ▼
📡 Client subscribes to channel
             │
             └──> Receives each chunk and renders
```

---

## ✅ 6. Model-Wise Exception Handling (OpenAI, Gemini, Anthropic)

### 🔧 Challenge

Different models had different error structures.

### 💡 Solution

* Created model-specific exception classes
* Handled with nested try/except blocks

### 🧭 Workflow

```
🧠 LLM Service
   │
   └──> Receive Prompt Request
             │
             ▼
🔍 Determine Model Type
             │
             ├──> Gemini → Try/Catch GeminiError
             ├──> OpenAI → Try/Catch OpenAIError
             └──> Anthropic → Try/Catch AnthropicError
             ▼
📜 Log & Return Unified Response
```

---

## ✅ 7. Smart Token-Based API Key Selection (Redis)

### 🔧 Challenge

Round-robin rotation used exhausted keys.

### 💡 Solution

* Stored token count in Redis
* Picked API key with most available tokens

### 🧭 Workflow

```
🧠 Server API Middleware
   │
   └──> Receive New API Request
             │
             ▼
🔁 Fetch All Keys + Token Count from Redis
             │
             └──> Select Key with Highest Available Tokens
                          │
                          ├──> Use Key to Call API
                          └──> Update Token Count in Redis
```

---

## ✅ 8. JWT with CSRF Token Protection

### 🔧 Challenge

Attackers used JWTs via script to spam signup.

### 💡 Solution

* Added custom CSRF token header
* Matched value inside JWT

### 🧭 Workflow

```
🧑‍💻 Client
   │
   └──> Makes Signup API Call
             │
             ├──> Sends JWT in Header
             └──> Sends CSRF Token in Payload/Header
             ▼
🛡️ Server
   │
   ├──> Validate JWT Signature
   ├──> Validate CSRF Token Matches JWT Claim
   └──> ✅ Allow if Match / ❌ Reject if Not
```