# 📘 LangGraph Tools

---

## 🧠 What are LangGraph Tools?

**LangGraph Tools** are modular, callable **functions or utilities** that LangGraph Agents and Chains can use to perform **real-world actions** — like searching the web, performing calculations, calling APIs, or manipulating data.

They act as **external helpers** that your LLM can invoke **when reasoning alone isn't enough**.

> 🛠️ **Think of tools as the "hands and eyes" of your LangGraph — extending the model’s capabilities.**

---

## 🌍 Real-World Analogy

Imagine an intelligent assistant:

> 🧑 “What’s the weather in Mumbai?”

Instead of guessing, the assistant:

1. **Thinks**: “I should look this up.”
2. **Uses a weather API tool**
3. **Returns accurate information**

That’s what LangGraph Tools enable — letting your agent **delegate specific tasks** to purpose-built functions or APIs.

---

## 💼 Real-World Use Cases

| Use Case                    | Description                                                               |
| --------------------------- | ------------------------------------------------------------------------- |
| 🔍 **Web Search Tool**      | Lets the agent search the web for up-to-date or unknown information       |
| 🧮 **Calculator Tool**      | Performs math or code-based calculations when needed                      |
| 🌐 **API Tool**             | Calls custom APIs (e.g., weather, database, services) with dynamic inputs |
| 📝 **Text Summarizer Tool** | Summarizes large texts using different logic than the LLM itself          |
| 🗃️ **Database Tool**       | Query MongoDB, PostgreSQL, or other databases via secure tool wrappers    |

---

## 🔁 LangGraph Tool Workflow

```
👤 User Input
│
└──> Agent or Chain Node
     │
     ▼
🧠 Decision
   • Does this task need a tool?
     │
     ├── Yes ──> 🔧 Invoke Tool (e.g., search, math, API)
     │
     └── No  ──> Respond directly with LLM
     │
     ▼
📤 Output Result (from tool or model)
```

---

```python
from langgraph.tools import Tool

@Tool
def calculate_expression(input: str) -> str:
    return str(eval(input))
```

---

## 🔧 Tool Types in LangGraph

| Tool Type         | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| 🔁 Function Tool  | A simple Python function you define and register                        |
| 🌐 API Tool       | Makes HTTP requests to external services (e.g., weather, finance, etc.) |
| 🔧 Built-in Tools | Provided by LangGraph (search, summarize, etc.)                         |
| 🔗 Tool Wrappers  | Wraps SDKs or 3rd-party libraries (e.g., Pinecone, LangChain tools)     |