# 🚀 Deploy Docker-Based Application on AWS EC2

**Project:** Candy Store
**Docker Hub Repo:** `dhruvish09/candy-store`
**Application Port:** `3000`

This guide explains how to **dockerize an application**, **push it to Docker Hub**, and **deploy it on an AWS EC2 instance**, including how to **update the application with new changes**.

---

## 🧱 1. Create Dockerfile (Project Root)

Create a file named `Dockerfile` in your project root.

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

✅ Ensure:

* App runs on port `3000`
* `npm start` exists in `package.json`

---

## 🖥️ 2. Build Docker Image Locally

Run from project root:

```bash
sudo docker build -t dhruvish09/candy-store:01 .
```

Verify:

```bash
docker images
```

---

## ▶️ 3. Test Docker Image Locally

```bash
docker run --rm -p 3000:3000 dhruvish09/candy-store:01
```

Test in browser:

```
http://localhost:3000
```

---

## 📦 4. Push Image to Docker Hub

Login to Docker Hub:

```bash
docker login
```

Push image:

```bash
docker push dhruvish09/candy-store:01
```

---

## ☁️ 5. Create AWS EC2 Instance

**Recommended configuration:**

* OS: Ubuntu 22.04
* Instance Type: t2.micro
* Security Group:

  * SSH → Port 22
  * HTTP → Port 80

---

## 🔐 6. Connect to EC2 via SSH

```bash
ssh -i "candy-key.pem" ubuntu@ec2-13-201-103-68.ap-south-1.compute.amazonaws.com
```

---

## 🐳 7. Install Docker on EC2

```bash
sudo apt update
sudo apt install docker.io -y
```

Start Docker and enable on boot:

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

Allow Docker without sudo:

```bash
sudo usermod -aG docker ubuntu
newgrp docker
```

Verify:

```bash
docker --version
```

---

## 📥 8. Pull Docker Image on EC2

```bash
docker pull dhruvish09/candy-store:01
```

---

## ▶️ 9. Run Application on EC2

```bash
docker run --rm -d -p 80:3000 dhruvish09/candy-store:01
```

Verify:

```bash
docker ps
```

Access application:

```
http://<EC2-PUBLIC-IP>
```

---

## 🔁 10. Update Application (New Code Changes)

### Rebuild image locally with new tag

```bash
docker build -t dhruvish09/candy-store:02 .
```

### Push updated image

```bash
docker push dhruvish09/candy-store:02
```

---

## 🔄 11. Deploy Updated Version on EC2

Stop old container:

```bash
docker stop <container_id>
```

Run updated image
(Docker will auto-pull if not available):

```bash
docker run --rm -d -p 80:3000 dhruvish09/candy-store:02
```

---

# ✅ DEPLOYMENT FLOW

```
Write Code
   ↓
Create Dockerfile
   ↓
Build Docker Image (Local)
   ↓
Run & Test Image (Local)
   ↓
Push Image to Docker Hub
   ↓
Create EC2 Instance
   ↓
Connect to EC2 (SSH)
   ↓
Install Docker on EC2
   ↓
Pull Image from Docker Hub
   ↓
Run Docker Container on EC2
   ↓
Access App via EC2 Public IP
```

---

# 🔁 UPDATE FLOW (WHEN CODE CHANGES)

```
Make Code Changes
   ↓
Rebuild Docker Image (New Tag)
   ↓
Push New Image to Docker Hub
   ↓
Stop Old Container on EC2
   ↓
Run New Image on EC2
   ↓
Updated App Live
```

---
