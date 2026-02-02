# 📌 Deploy 3-Tier Application on AWS EC2 using Docker Compose

Project: Three-Tier Web Application
Application Layers:
✅ Frontend (UI)
✅ Backend (API)
✅ Database

This guide shows how to build, configure, and deploy your 3-tier app using Docker and Docker Compose on an AWS EC2 instance.

---

## 🧱 1. Prepare Your Project

Your project should have this basic structure:

```
three-tier-app/
├── frontend/
│   └── Dockerfile
├── backend/
│   └── Dockerfile
├── database/ (optional)
├── docker-compose.yml
└── README.md
```

---

## 📦 2. Example `docker-compose.yml`

Create a file named **docker-compose.yml** in the project root.

```yaml
version: "3.8"
services:

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - db
    environment:
      - DB_HOST=db
      - DB_USER=root
      - DB_PASS=root123

  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root123
      MYSQL_DATABASE: appdb
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

> Customize environment variables and ports based on your app.

---

## ☁️ 3. Create AWS EC2 Instance

Go to the AWS Console → EC2 → Launch Instance:

* Operating System: **Ubuntu Server 22.04 LTS**
* Instance Type: **t2.micro** (Free Tier)
* Security Group Rules:

  * SSH → Port 22
  * HTTP → Port 80
  * (Optional) Custom ports if backend uses other ports

Download the key pair (`.pem`). ([Dhruvish09.github.io][1])

---

## 🖥 4. Connect to EC2 via SSH

```bash
chmod 400 mykey.pem
ssh -i "mykey.pem" ubuntu@<EC2_PUBLIC_IP>
```

Replace `<EC2_PUBLIC_IP>` with the public IP of your EC2 instance. ([Dhruvish09.github.io][1])

---

## 🐳 5. Install Docker & Docker Compose

```bash
sudo apt update
sudo apt install -y docker.io docker-compose
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
```

Log out and log back in to apply Docker permissions. ([Dhruvish09.github.io][1])

---

## 📁 6. Upload Your Code to EC2

There are 2 common ways to upload your code:

### Option A — Clone from GitHub

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### Option B — Using SCP

From your local computer:

```bash
scp -i mykey.pem -r /local/project ubuntu@<EC2_PUBLIC_IP>:/home/ubuntu/
```

---

## ▶️ 7. Build and Run Containers

Inside your project directory on the EC2 instance:

```bash
docker-compose build
docker-compose up -d
```

This will:
✔ Build all service images
✔ Create containers for frontend, backend, and database
✔ Run everything in the background

---

## 🔍 8. Verify Running Services

```bash
docker ps
```

You should see all three containers up and running.

---

## 🌐 9. Access the Application

Open your browser and go to:

```
http://<EC2_PUBLIC_IP>
```

You should see the frontend UI served by the frontend container.

---

## 🛠 10. Useful Commands

| Task        | Command                        |
| ----------- | ------------------------------ |
| View Logs   | `docker-compose logs -f`       |
| Stop App    | `docker-compose down`          |
| Restart App | `docker-compose up -d --build` |

---

## 🔄 11. Update Application (Code Change)

When you update your code:

1. Pull latest changes or upload new code
2. Rebuild images:

```bash
docker-compose build
docker-compose up -d
```

Your services will be updated with the new code.

---

## 🧠 Summary Deployment Flow

```
Write Code
    ↓
Create Dockerfiles + docker-compose.yml
    ↓
Upload Code to GitHub / EC2
    ↓
SSH into EC2
    ↓
Install Docker & Docker Compose
    ↓
docker-compose up -d
    ↓
Application Live on EC2 Public IP
```