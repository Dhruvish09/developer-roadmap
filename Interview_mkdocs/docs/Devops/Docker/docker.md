# 🐳 Docker Full Guide – From Beginner to Advanced (Easy & Practical)

---

## 🔰 1. What is Docker?

Docker is a tool that helps you **package your application and all its dependencies into one unit called a "container"** so it runs the same everywhere — on your laptop, a test server, or in the cloud.

> ✅ Think of it like a zipped folder that includes your code, Python/Node version, libraries, etc.

---

## 🧠 2. Why Use Docker?

Before Docker:

* "It works on my machine" problem
* App crashes on production
* Complex setups and installation on every machine

With Docker:

* Write once, run anywhere
* No setup issues
* Fast testing and deployment

### 🎯 Real-Life Example:

You build a Flask app with Python 3.11 and `flask==2.3.0`. On your system, it works. But your friend has Python 3.6 → boom! 💥

> Use Docker → app runs inside a container with the exact Python version, always works ✅

---

## 🏗️ 3. Docker vs Virtual Machine

| Feature      | Docker (Container)   | Virtual Machine (VM)            |
| ------------ | -------------------- | ------------------------------- |
| Size         | Lightweight (MBs)    | Heavy (GBs)                     |
| Startup Time | Seconds              | Minutes                         |
| OS Used      | Shares host OS       | Has full guest OS               |
| Use Case     | Microservices, CI/CD | OS-level isolation, legacy apps |

---

## 📦 4. Docker Image vs Container

| Term      | What it is                       | Example                       |
| --------- | -------------------------------- | ----------------------------- |
| Image     | Template of your app (read-only) | `python:3.11`, `nginx:latest` |
| Container | Running instance of an image     | Your app running in a box     |

---

## 🗃️ 5. Registry vs Repository

* **Registry** = Storage location (e.g. Docker Hub)
* **Repository** = Collection of image versions (tags)

> 🏢 Registry = big warehouse,
> 📁 Repository = shelf of one product (e.g. `nginx` with tags `1.19`, `latest`, etc.)

---

## 📤 6. Push & Pull Images

* **Pull** images from Docker Hub
* **Push** your own to Docker Hub or private registry

```bash
docker pull nginx
docker tag my-app:v1 myuser/my-app:v1
docker push myuser/my-app:v1
```

---

## 🌐 7. Container Ports – Host vs Container

```bash
docker run -p 8080:80 nginx
```

* **8080** = Host machine port (your browser)
* **80** = Container port (inside Nginx)

> You can now open `http://localhost:8080` to access Nginx.

---

## 🪵 8. Docker Logs

Check what’s happening inside a container (like app errors, server logs, etc.)

```bash
docker logs <container_id>
```

---

## 🧱 9. Dockerfile Structure

```Dockerfile
FROM python:3.11            # Use Python 3.11 as base image
WORKDIR /app                # Set working directory inside container
COPY req.txt .              # Copy dependency file
RUN pip install -r req.txt  # Install Python dependencies
COPY . .                    # Copy all app files
CMD ["python", "app.py"]    # Run the Python app on container start
```

---

# 🔧 All Docker Commands

### ✅ Install & Verify Docker

```bash
docker --version
docker run hello-world
```

---

### 🧊 Image Commands

```bash
docker pull <image>               # Pull from registry
docker build -t my-app .          # Build image
docker tag my-app:v1 user/app:v1  # Add version tag
docker images                     # List images
docker rmi <image_id>             # Remove image
docker history <image_id>         # Show image history (layers)
```

---

### 📦 Container Commands

```bash
docker run -it ubuntu bash            # Start container with interactive shell
docker run -d -p 3000:3000 app        # Run in detached mode with port mapping
docker run -it --name myapp app       # Run with custom container name
docker exec -it <container_id> bash   # Enter running container using bash
docker exec -it <id> sh               # Use `sh` if bash is not available
docker ps                             # Show running containers
docker ps -a                          # Show all containers (including stopped)
docker stop <id>                      # Stop a container
docker start <id>                     # Start a stopped container
docker restart <id>                   # Restart a container
docker rm <id>                        # Remove a container
docker kill <id>                      # Forcefully stop a container
```

---

### 📜 Logs & Monitoring

```bash
docker logs <container_id>            # View container logs
docker logs -f <id>                   # Follow (live stream) logs
docker top <id>                       # Show running processes in container
docker stats                          # Show live CPU, memory usage
```

---

### 📤 Push & Pull

```bash
docker login                          # Log in to Docker registry
docker push myuser/my-app:v1         # Push image to registry
docker pull myuser/my-app:v1         # Pull image from registry
```

---

### 🔁 Versioning

```bash
docker tag my-app:latest my-app:v1   # Add version tag to image
```
---

## ⚙️ Full CI/CD Pipeline with Docker & AWS (Developer-Friendly Flow)

```
👨‍💻 Developer
   │
   └──> Push code / Open Pull Request (GitHub, CodeCommit, GitLab)
             │
             ▼
🔄 CI Workflow Triggered (GitHub Actions / CodeBuild / GitLab CI)
             │
             ├──> 🛎️ Checkout code from repository
             ├──> 🐳 Build Docker image
             ├──> 🧪 Run tests and static code checks inside container
             ├──> ✅ Report build & test results (pass/fail) to team
             ▼
🧐 Code Review Process (Pull Request / Merge Request)
             │
             ├──> ❌ If tests fail or review blocked → Fix code → Repeat CI
             └──> ✅ If approved → Merge to `main` or `release` branch
                           │
                           ▼
🚀 CD Workflow Triggered (on merge to main/release)
                           │
                           ├──> 🛠️ Build & tag production Docker image
                           ├──> 📦 Push Docker image to AWS ECR
                           ├──> 🛡️ (Optional) ECR vulnerability scan
                           ├──> 🚚 Deploy to AWS environment:
                           │         ├─▶ 🔁 ECS (Fargate/EC2)
                           │         ├─▶ ☸️ EKS (Kubernetes)
                           │         └─▶ 🖥️ EC2 / Elastic Beanstalk
                           ├──> 🗃️ Run database migrations or setup scripts
                           └──> 🩺 Run post-deploy health checks
                           ▼
🟢 Application Live on AWS (ECS / EKS / EC2 / Beanstalk)
                           │
                           └──> 📈 Monitor via CloudWatch Logs / Metrics / Alarms
                                🔄 Auto rollback or alert on failure
```

---

### 🔑 Key Features of This Flow:

| Stage           | Purpose                                                  |
| --------------- | -------------------------------------------------------- |
| 👨‍💻 Developer | Code changes + PR creation                               |
| 🔄 CI           | Code quality, security, and test validation using Docker |
| 🧐 Review       | Team ensures correctness and readiness                   |
| 🚀 CD           | Auto-deploy after merge, production-grade image pushed   |
| 🟢 Live         | Monitor, rollback, or alert if needed                    |

