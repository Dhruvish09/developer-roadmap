# 📘 Kubernetes Beginner Documentation

---

## 🌐 What is Kubernetes?

**Kubernetes (aka K8s)** is an open-source **container orchestration** platform developed by Google. It automates the:

* Deployment
* Scaling
* Management
* Load balancing
* Rollout/Rollback
* High availability of **containerized applications**

---

## 📦 What is a Container?

A **container** is a lightweight, standalone unit that contains an application and all its dependencies (libraries, configs, binaries). It's isolated from the host system.

Think of it like a **package** that can run the same way anywhere – on your laptop, a server, or the cloud.

Popular container tool: **Docker**

---

## 🤖 What is Container Orchestration?

**Container Orchestration** is the process of automatically managing multiple containers, including:

* Where they run (which machine)
* Restarting if they crash
* Updating with zero downtime
* Scaling up or down
* Ensuring availability

**Kubernetes** is the most widely used orchestration tool.

---

## 🧠 Why Kubernetes?

### 🧑‍💻 Old Way:

```
Developer --> Deploy on a Server
          --> Server crashes = downtime
          --> High load = failure
```

### ✅ Kubernetes Solution:

* Run app on **multiple servers (nodes)**
* Auto-restart on failure
* **Load balancing** traffic
* **Scaling up/down** containers
* **Self-healing** and zero-downtime rollout

---

## 🏗 Kubernetes Architecture

When you install Kubernetes, it forms a **Cluster**.

### 🔹 A Cluster has:

1. **Control Plane (Master)**
2. **Worker Nodes (Minions)**

---

### 🧭 Control Plane (Master)

Manages the whole cluster.

| Component              | Description                                   |
| ---------------------- | --------------------------------------------- |
| **API Server**         | Entry point – all requests go through here    |
| **Scheduler**          | Decides which node runs the pod               |
| **Controller Manager** | Manages state and events (e.g., restart pods) |
| **etcd**               | Key-value store – stores cluster data         |

---

### ⚙️ Worker Node (Minion)

Runs the actual application containers.

| Component             | Description                                           |
| --------------------- | ----------------------------------------------------- |
| **Kubelet**           | Talks to the API server and manages pods              |
| **Kube-proxy**        | Handles network communication                         |
| **Container Runtime** | Runs the actual containers (e.g., Docker, containerd) |

---

## 🧱 What is a Pod?

A **Pod** is the **smallest unit** in Kubernetes.

* It runs **one or more containers** (usually one)
* All containers in a Pod **share network and storage**
* A Pod is a single instance of your app

> Example: If your app has 3 replicas → 3 pods will be created.

---

## 📘 Kubernetes YAML File Anatomy

Let’s understand each keyword in a YAML file using a simple Deployment example.

### ✅ Sample: `deployment.yaml`

```yaml
apiVersion: apps/v1          # Version of the Kubernetes API
kind: Deployment             # Type of Kubernetes object (Deployment, Pod, Service, etc.)
metadata:
  name: my-app               # Name of the resource
  labels:
    app: my-app              # Labels help group and identify objects
spec:
  replicas: 3                # Number of pod copies to run
  selector:
    matchLabels:
      app: my-app            # Match pods with this label
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app-container
          image: nginx:latest         # Docker image to run
          ports:
            - containerPort: 80       # Port exposed by container
```

---

### 🔍 Explanation of YAML Tags

| Tag                        | Meaning                                                                |
| -------------------------- | ---------------------------------------------------------------------- |
| `apiVersion`               | Version of the K8s API to use for this object (apps/v1 for Deployment) |
| `kind`                     | Type of K8s object (Deployment, Pod, Service, etc.)                    |
| `metadata.name`            | Unique name for this resource                                          |
| `metadata.labels`          | Key-value tags used to identify and group resources                    |
| `spec`                     | Specification of what you want to run                                  |
| `replicas`                 | Number of identical pods to maintain                                   |
| `selector.matchLabels`     | Links this Deployment to the correct pods                              |
| `template.metadata.labels` | Labels assigned to Pods created by this Deployment                     |
| `containers`               | List of containers to run in the Pod                                   |
| `image`                    | Docker image to use                                                    |
| `ports.containerPort`      | Port exposed by container (e.g., 80 for HTTP)                          |

---

## 🌐 Kubernetes Service YAML

To expose the above deployment publicly:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  type: LoadBalancer
  selector:
    app: my-app
  ports:
    - port: 80           # External port
      targetPort: 80     # Internal container port
```

| Tag                | Meaning                                            |
| ------------------ | -------------------------------------------------- |
| `type`             | Type of service: ClusterIP, NodePort, LoadBalancer |
| `selector`         | Connects the service to pods with matching labels  |
| `ports.port`       | Port accessible to users                           |
| `ports.targetPort` | Port exposed by container                          |

---

## ⚙️ How Kubernetes Controls Nodes

* The **Control Plane** communicates with **Nodes** using **Kubelet**
* API Server sends instructions like: start a pod, stop a pod
* **Scheduler** decides which Node the Pod should run on
* **Controller** checks if desired Pods are running
* **etcd** stores the current state of the cluster

---

## 🧪 Most Used `kubectl` Commands

| Purpose           | Command                               |
| ----------------- | ------------------------------------- |
| View all pods     | `kubectl get pods`                    |
| View deployments  | `kubectl get deployments`             |
| Apply config      | `kubectl apply -f filename.yaml`      |
| Delete config     | `kubectl delete -f filename.yaml`     |
| See detailed info | `kubectl describe pod <pod-name>`     |
| View logs         | `kubectl logs <pod-name>`             |
| Shell into a pod  | `kubectl exec -it <pod-name> -- bash` |

---

## 🧠 Summary (TL;DR)

* **Kubernetes = Container Orchestration**
* **Pod = smallest unit, runs container(s)**
* **Deployment = manages Pods (scaling, rollout)**
* **Service = exposes Pods over network**
* **Control Plane = API Server, Scheduler, Controller, etcd**
* **Worker Node = Kubelet, Kube-proxy, Container runtime**




Absolutely! Here's a super simple and clear explanation of the **main components of Kubernetes**, broken down so even a complete beginner can understand:

---

# 🧩 Kubernetes Components – Easy Explanation

---

## 🚦 1. **Control Plane (The Brain 🧠 of Kubernetes)**

This is where all the **decisions** are made – like **what should run**, **where**, and **how**.

### ✅ Key Components of Control Plane:

| Component              | Simple Meaning  | What it Does                                                                        |
| ---------------------- | --------------- | ----------------------------------------------------------------------------------- |
| **API Server**         | 📬 *Gatekeeper* | Accepts all requests (from users or internal tools)                                 |
| **Scheduler**          | 🧮 *Planner*    | Decides **which machine (Node)** should run your app                                |
| **Controller Manager** | 👮 *Watcher*    | Constantly checks if the system is in the desired state – restarts things if needed |
| **etcd**               | 📘 *Notebook*   | Stores all Kubernetes information (like app data, cluster settings, etc.)           |

---

## 🧑‍🏭 2. **Worker Node (The Hands 🖐 of Kubernetes)**

These are the actual **machines (servers)** that **run your application**.

### ✅ Each Node has:

| Component             | Simple Meaning       | What it Does                                                           |
| --------------------- | -------------------- | ---------------------------------------------------------------------- |
| **Kubelet**           | 📢 *Worker Manager*  | Talks to the control plane and makes sure the app is running correctly |
| **Kube-proxy**        | 🔀 *Traffic Manager* | Manages network traffic in and out of the app                          |
| **Container Runtime** | 🐳 *Engine*          | Actually runs your containers (Docker, containerd, etc.)               |

---

## 📦 3. **Pod (Box that runs your App)**

* Smallest unit in Kubernetes
* It’s like a **box** that holds **one or more containers**
* All containers in a pod **share IP address, ports, and volume**

> 📌 Example: If you run `nginx`, Kubernetes puts it inside a Pod.

---

## 🧱 4. **Deployment (The Builder)**

* Makes sure the right number of **Pods are running**
* Helps with **auto-scaling**, **updates**, and **rollbacks**

> 📌 You tell Deployment: “I want 3 nginx servers running” → it will create 3 Pods.

---

## 🌍 5. **Service (The Door 🚪 to Your App)**

* Exposes Pods **inside or outside** the cluster
* Acts like a **stable IP address or DNS name** for your app

> 📌 Pods can come and go, but the **Service always stays** – so users can access the app reliably.

---

## 📁 6. **ConfigMap & Secret (Settings and Passwords)**

* **ConfigMap** = stores config like app name, port, etc.
* **Secret** = stores sensitive data (like passwords, tokens)

> 📌 These are injected into Pods as **environment variables** or **files**

---

## 🧱 7. **Volume (Storage for Your App)**

* Used when containers **need to save data**
* Unlike container storage, **volumes survive even if the container dies**

> 📌 Example: A database writing files to disk.

---

## 🧠 Analogy Time: Kubernetes is like a Factory 🏭

| Kubernetes Part | Real-World Equivalent         |
| --------------- | ----------------------------- |
| Control Plane   | Factory managers              |
| Worker Node     | Factory workers               |
| Pod             | Small machine inside a worker |
| Deployment      | Task scheduler                |
| Service         | Reception desk or gate        |
| ConfigMap       | App instruction sheet         |
| Secret          | Safe with passwords           |
| Volume          | Warehouse                     |