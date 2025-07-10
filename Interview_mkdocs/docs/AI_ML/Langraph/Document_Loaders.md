# 📄 LangGraph: Document Loader

## 🔹 What is a Document Loader?

A **Document Loader** is used to **load external data** (PDFs, URLs, Notion docs, S3 files, etc.) into a format that can be **chunked**, **embedded**, or passed into an LLM or a vectorstore.

> Think of it as:
> *"How do I bring real-world content (files, webpages, etc.) into my AI workflow?"*

---

## 🧱 Core Workflow with Document Loaders

```
📁 Source (PDF / URL / Notion / S3 / Markdown)
   │
   ▼
📄 Document Loader
   • Loads file into standardized document format
   • Often includes metadata (source, title, etc.)
   │
   ▼
🧠 Chunker (optional)
   • Splits large docs into chunks
   │
   ▼
🧲 Embedder + VectorStore (optional)
   • Stores chunks with embeddings for search
```

---

## ✅ Example: Load a PDF and Search with LangGraph Agent

We’ll use:

* `PyMuPDFLoader` (PDF)
* `RecursiveCharacterTextSplitter` (to chunk)
* `FAISS` (as vector store)

---

### 📦 Installation

```bash
pip install langchain faiss-cpu pypdf
```

---

### 🧑‍💻 Sample Code

```python
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings.openai import OpenAIEmbeddings

# Step 1: Load document
loader = PyPDFLoader("sample.pdf")
documents = loader.load()

# Step 2: Split into chunks
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(documents)

# Step 3: Embed and store in vector store
vectorstore = FAISS.from_documents(chunks, OpenAIEmbeddings())

# Step 4: Ask questions
query = "What is the document about?"
retrieved_docs = vectorstore.similarity_search(query)

# Preview result
for doc in retrieved_docs:
    print(doc.page_content[:300])
```

---

## 🔌 Use with LangGraph Agent

You can add this as a **custom tool** inside LangGraph:

```python
from langchain.tools import tool

@tool
def search_pdf(query: str) -> str:
    docs = vectorstore.similarity_search(query)
    return "\n\n".join(d.page_content for d in docs[:2])
```

Then include `search_pdf` as a tool in your agent’s tool list.

---

## 🌐 Popular Document Loaders

| Loader                   | Source                            |
| ------------------------ | --------------------------------- |
| `PyPDFLoader`            | PDF files                         |
| `WebBaseLoader`          | Web URLs                          |
| `TextLoader`             | .txt or .md files                 |
| `NotionDBLoader`         | Notion databases                  |
| `UnstructuredFileLoader` | Many formats (.docx, .ppt, .html) |
| `S3FileLoader`           | AWS S3 files                      |

---

## 📂 Use Case Examples

| Use Case                      | Loader Used                   |
| ----------------------------- | ----------------------------- |
| Chat with your resume (PDF)   | PyPDFLoader                   |
| Summarize research papers     | PyPDFLoader + Summarizer tool |
| Ask questions over a website  | WebBaseLoader                 |
| Build chatbot for docs folder | DirectoryLoader               |

---