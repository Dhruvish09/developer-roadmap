### **🔹 Prometheus**

* **Purpose:** Collects and stores metrics from services (like CPU, memory, HTTP requests).
* **Key Feature:** Supports powerful **alert rules** to notify on issues (e.g., high CPU).
* **Pull-based** model: It **scrapes metrics** from targets.

---

### **🔹 Grafana**

* **Purpose:** **Visualizes** data from Prometheus and other sources.
* **Key Feature:** Creates interactive **dashboards** and supports **alerting** (email, Slack, etc.).

---

### **🔹 Loki + Promtail**

* **Loki:** A **log aggregation** system (by Grafana Labs), similar to Prometheus but for logs.
* **Promtail:** **Agent** that collects logs from files and **pushes them to Loki**.
* **Query Logs:** Use **Grafana UI** to search and visualize logs alongside metrics.

---

🔧 **Use case (combined):**
Prometheus for **metrics**, Loki for **logs**, Grafana for **dashboards + alerts** — giving full observability.
