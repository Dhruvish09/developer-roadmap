# ✅ System Design Concepts Used in **Weam AI**

---

## 🔹 API Design & Architecture

RESTful API design **(fastapi)**
Stateless APIs **(pydantic, starlette)**
Microservices architecture **(fastapi, uvicorn, gunicorn)**

---

## 🔹 Async Processing & Concurrency

Async / Await **(asyncio – built-in)**
Non-blocking I/O **(httpx, aiofiles)**

---

## 🔹 Background Processing

Background tasks **(fastapi – BackgroundTasks)**
Task queues **(celery, redis)**
Async workers **(celery, kombu)**

---

## 🔹 Database Design

MongoDB integration **(pymongo)**
Async MongoDB **(motor)**
ODM / schema layer **(beanie, odmantic)**

---

## 🔹 Caching

Distributed caching **(redis)**
Async Redis client **(redis)**
Response caching **(fastapi-cache2)**

---

## 🔹 Security & Authentication

JWT authentication **(python-jose)**
OAuth2 authentication **(fastapi)**
Password hashing **(passlib, bcrypt)**
CSRF protection **(starlette)**
Encryption & decryption **(cryptography)**

---

## 🔹 Rate Limiting & Reliability

Rate limiting **(slowapi)**
Retry mechanism **(tenacity)**
Error handling **(fastapi)**

---

## 🔹 Observability & Monitoring

Metrics **(prometheus-fastapi-instrumentator)**
Structured logging **(loguru, structlog)**
Distributed tracing **(opentelemetry-sdk)**

---

## 🔹 File Storage & Processing

File uploads **(python-multipart)**
AWS S3 integration **(boto3)**
Async S3 operations **(aioboto3)**
Async file handling **(aiofiles)**

---

## 🔹 AI / LLM System Design

Prompt engineering **(langchain)**
Agent workflows **(langgraph)**
Token counting **(tiktoken)**
Vector DB client **(pinecone-client)**
LLM APIs **(openai)**

---

## 🔹 Messaging & Notifications

Email sending **(fastapi-mail)**
SMTP support **(aiosmtplib)**
Push notifications **(firebase-admin)**

---

## 🔹 Testing & Quality

Unit testing **(pytest)**
Async test support **(pytest-asyncio)**
API testing **(httpx)**
Load testing **(locust)**

---

## 🔹 DevOps & Deployment

ASGI server **(uvicorn)**
Process manager **(gunicorn)**
Environment config **(python-dotenv)**
Containerization **(docker)** *(platform)*
Orchestration **(kubernetes)** *(platform)*

---

## 🔹 Scalability

Horizontal scaling **(uvicorn, gunicorn)**
Stateless scaling **(fastapi, redis)**
Worker scaling **(celery)**

---

## 🎯 **One-Line Interview Answer**

> **“We use FastAPI with Pydantic and Starlette for stateless REST APIs, async processing with httpx and aiofiles, background jobs using Celery and Redis, JWT/OAuth security via python-jose and passlib, MongoDB via Motor/Beanie, and scalable deployment using Uvicorn, Gunicorn, Docker, and Kubernetes.”**

---