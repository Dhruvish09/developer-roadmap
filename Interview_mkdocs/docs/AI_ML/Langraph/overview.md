### 🔹 **LangGraph Overview**

LangGraph is a **framework for building multi-agent workflows** using **LLMs** (like GPT) as decision-makers. It’s built on top of **LangChain**, so it reuses concepts like chains, tools, memory, etc., but adds **graph-based state management** and **agent collaboration**.

---

### 🧠 Agents

LangGraph agents are **LLM-powered nodes** in a graph that can **make decisions**, call tools, talk to each other, or transition the workflow.

* Think of them as "smart workers" that handle part of the process.
* Useful in **multi-step**, **multi-role** workflows.

📌 *Example*: ResearchAgent → SummarizerAgent → EvaluatorAgent.

---

### 🔗 Chains

Chains are sequences of operations (prompt → LLM → output) that **transform input to output**.

* Can be used inside agents.
* Common chains: `LLMChain`, `RetrievalQA`, etc.

📌 *Example*: Prompt → GPT-4 → JSON output → Tool call.

---

### 📄 Document Loaders

These extract data from sources like PDFs, URLs, CSVs, Notion, etc.

* Used before passing content to embeddings or LLMs.
* Part of the **data ingestion pipeline**.

📌 *Example*: Load PDF → Split chunks → Embed → Store in vectorstore.

---

### ✅ Evaluation

LangGraph supports evaluating LLM workflows.

* You can **score agents**, **compare results**, or **log reasoning**.
* Use cases: A/B testing LLM chains, agent traceability.

📌 *Example*: HumanEval or GPT-Eval for output scoring.

---

### 🤖 LLMs

LangGraph supports any LLM via LangChain – OpenAI, Anthropic, Mistral, etc.

* Each agent or node can use a different LLM if needed.
* You can fine-tune prompts per step.

📌 *Example*: Use GPT-4 for generation, Claude for safety filtering.

---

### 🧠 Memory

Memory keeps track of previous messages/interactions.

* Important for **stateful agents** (like chatbots).
* LangGraph supports **shared memory across steps**.

📌 *Example*: Store chat history or decisions across graph nodes.

---

### 🧾 Prompting

LangGraph works well with **prompt templates**.

* Prompts define behavior for each node or agent.
* Prompts can be reused, parameterized, and templated.

📌 *Example*: “You are a helpful research assistant. Summarize this document…”

---

### 🛠️ Tools

Agents in LangGraph can call **external tools** (APIs, code functions, etc.).

* Supports LangChain tools and custom ones.
* Tools can be conditionally called via agent reasoning.

📌 *Example*: Agent decides to call “SearchGoogle” or “Calculator” tool.

---

### 📚 Vectorstores

Used to store and search **embedded documents** (via embeddings).

* LangGraph integrates vectorstores like Pinecone, FAISS, Chroma.
* Essential for **Retrieval-Augmented Generation (RAG)**.

📌 *Example*: Search vectorstore for similar chunks before LLM answers.
