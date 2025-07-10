# 🐳 Docker Compose - Complete Guide (Beginner to Advanced)



# 🧠 **What Is Docker Compose?**

**Docker Compose** is a tool to **define and run multi-container Docker applications** using a file called `docker-compose.yml`.

> 💬 Imagine your app needs:
>
> * A backend service (like FastAPI)
> * A frontend (React)
> * A database (MongoDB)
> * A cache (Redis)

Normally, you'd run each container separately with `docker run`, manage ports, networks, and volumes manually. **Docker Compose solves this by letting you manage everything in a single YAML file.**

---

# 🔧 Why Docker Compose?

| Problem Without Compose                         | Solved With Docker Compose                |
| ----------------------------------------------- | ----------------------------------------- |
| Run many `docker run` commands                  | Just run `docker-compose up`              |
| Manually link containers with ports/network     | Compose auto-manages network              |
| Set environment variables in terminal each time | Define once in YAML or `.env` file        |
| Data lost on container restart                  | Use `volumes:` in Compose for persistence |
| Difficult to replicate environment              | Share `docker-compose.yml` with the team  |

---

## 🚧 Problems Docker Compose Solves

| Problem                             | Solution                     |
| ----------------------------------- | ---------------------------- |
| Hard to manage multiple containers  | Compose automates it         |
| Complex networking between services | Internal auto-networking     |
| Manual data persistence setup       | Use named volumes            |
| Risky environment variable handling | Use `.env` or Docker secrets |

---

# 🎯 Real-Life Use Case: Microservices Application

### Scenario: You are building a **Microservices App** with:

* `backend` → Python FastAPI
* `frontend` → React
* `mongodb` → Database
* `redis` → Cache

These services **depend on each other**, need **shared network**, and need to start in **order**.

---

### `docker-compose.yml`

```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      MONGO_URL: mongodb://mongo:27017
      REDIS_HOST: redis
    depends_on:
      - mongo
      - redis
    networks:
      - app-net

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
    networks:
      - app-net

  mongo:
    image: mongo
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: secret
    volumes:
      - mongo_data:/data/db
    networks:
      - app-net

  redis:
    image: redis
    networks:
      - app-net

volumes:
  mongo_data:

networks:
  app-net:
```

---

# 🔄 Execution Flow (Visual)

```bash
docker-compose up -d
```

👇 What happens:

1. Docker builds `backend` and `frontend` from Dockerfiles
2. Pulls `mongo` and `redis` images
3. Creates shared `app-net` network
4. Attaches all containers to it
5. MongoDB data persists via `mongo_data` volume

---

## 🧱 Docker Compose Structure

### Key Tags Explained:

| Tag           | Description                    |
| ------------- | ------------------------------ |
| `services`    | Defines all containers         |
| `image`       | Docker image name              |
| `build`       | Dockerfile build path          |
| `ports`       | Port mapping (host\:container) |
| `environment` | Env variables inside container |
| `volumes`     | Data persistence               |
| `networks`    | Container communication        |
| `depends_on`  | Start order of services        |
| `secrets`     | Secure credentials             |

---

## 🌐 Network Configuration

```yaml
networks:
  app-net:
    driver: bridge
```

* All services in same network can use each other's **service name as hostname**
* e.g., `backend` connects to `mongo:27017`

---

## 💾 Data Persistence with Volumes

```yaml
volumes:
  mongo_data:
```

* Mounted on `mongo` service as `/data/db`
* Data remains even after container is deleted

---

## 🌱 Environment Variables

### `.env` file:

```env
MONGO_USER=admin
MONGO_PASS=secret
```

### Compose usage:

```yaml
environment:
  MONGO_INITDB_ROOT_USERNAME: ${MONGO_USER}
  MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASS}
```

---

## 🔐 Docker Secrets (for sensitive data)

### Step 1: Create secret file

```bash
echo "secretpass" > db_password.txt
```

### Step 2: Add to Compose

```yaml
services:
  mongo:
    image: mongo
    secrets:
      - db_password

secrets:
  db_password:
    file: ./db_password.txt
```

> 🔒 Docker secrets work best in Docker Swarm

---

## 🔐 Private Docker Repo Access

### Step 1: Authenticate

```bash
docker login -u username -p password
```

### Step 2: Use private image in Compose

```yaml
services:
  myapp:
    image: ghcr.io/your-org/private-image:tag
```

### Step 3: Pull and run

```bash
docker-compose pull
docker-compose up -d
```

> ✅ Docker Compose uses local Docker credentials to pull private images

---

## 🚫 Limitations of Docker Compose

| Limitation                          | Notes                            |
| ----------------------------------- | -------------------------------- |
| No multi-host deployment            | Use Kubernetes or Swarm          |
| No readiness checks in `depends_on` | Use wait-for-it script           |
| Local secrets aren't encrypted      | Use Swarm for real secrets       |
| No auto-scaling                     | Use orchestrators like Swarm/K8s |

---

## ✅ Docker Compose CLI – Useful Commands

### 🔄 Start / Stop Services

```bash
# Start all services in detached mode
docker-compose up -d

# Start services with logs in terminal
docker-compose up

# Stop and remove all services, networks, volumes (unless declared)
docker-compose down

# Stop services but do not remove containers
docker-compose stop

# Start stopped services
docker-compose start

# Restart services
docker-compose restart
```

---

### 🔍 Logs and Monitoring

```bash
# View real-time logs for all services
docker-compose logs -f

# View logs for a specific service
docker-compose logs -f <service_name>

# Show running containers
docker-compose ps
```

---

### 🛠️ Build & Image Operations

```bash
# Build all services (from Dockerfiles)
docker-compose build

# Build a specific service
docker-compose build <service_name>

# Pull images from registry (e.g., Docker Hub)
docker-compose pull

# Push images to registry
docker-compose push
```

---

### 🧪 Run / Exec / Test

```bash
# Run a one-off command inside a service container
docker-compose run <service_name> <command>

# Example: Run bash in backend service
docker-compose run backend bash

# Execute command in a running container
docker-compose exec <service_name> <command>

# Example: Open shell
docker-compose exec backend /bin/sh
```

---

### 📦 Volumes / Cleanup

```bash
# Remove stopped containers
docker-compose rm

# Remove containers, volumes, and networks
docker-compose down --volumes
```

---

### 🧰 Configuration and Validation

```bash
# Check the configuration file for errors
docker-compose config

# List all services
docker-compose config --services

# Show environment variables being used
docker-compose config --resolve-image-digests
```

---

## ⚙️ Full Docker Compose Workflow (Dev to Deploy)

```text
👨‍💻 Developer
   │
   └──> Write Dockerfile for each service (API, DB, Redis, Frontend)
            │
            ▼
📄 Define docker-compose.yml
            │
            ├──> Specify all services (app, db, cache, etc.)
            ├──> Set up ports, volumes, networks, env vars
            └──> Add secrets (.env, secrets section if needed)
            │
            ▼
🧪 Local Development (Single command workflow)
            │
            ├──> docker-compose build         🛠️ Build images
            ├──> docker-compose up -d         🚀 Start all services
            ├──> docker-compose logs -f       📄 Monitor logs
            └──> docker-compose exec <svc>    🖥️  Debug inside containers
            ▼
✅ Test & Debug Locally
            │
            ├──> Connect services via internal network
            ├──> Use volumes to persist DB/cache data
            └──> Check readiness (health check scripts / logs)
            ▼
🔄 Push to GitHub / GitLab / CodeCommit
            │
            ▼
🔁 CI Pipeline (Dockerized Testing)
            │
            ├──> Checkout Code
            ├──> docker-compose -f docker-compose.test.yml up --build
            ├──> Run unit/integration tests inside containers
            └──> Report results
            ▼
🧐 Review + Merge
            │
            └──> Code approved → Merge to `main` or `release`
                          │
                          ▼
🎯 Optional Docker Compose for Staging
                          │
                          ├──> SSH to staging EC2 / server
                          ├──> Pull latest code
                          ├──> docker-compose pull / build
                          ├──> docker-compose up -d
                          └──> Test app in a production-like setup
                          ▼
🛡️ Ready for Production Docker Deployment
      (Use ECS / EKS / Kubernetes or Convert to Helm Charts)
```
