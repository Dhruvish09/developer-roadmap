## 🚀 Step-by-Step: Deploy FastAPI on AWS EC2 (Ubuntu)

---

## 1️⃣ Create EC2 Instance

1. Login to **AWS Console**
2. Search for **EC2**
3. Click **Launch Instance**
4. Configure EC2:

   * **Instance Name** → e.g. `fastapi-server`
   * **AMI (OS Image)** → Ubuntu
   * **Instance Type** → t2.micro (free tier)
   * **Key Pair** → Create & download `.pem` file
   * **Network Settings**

     * Allow **SSH (22)**
     * Allow **HTTP (80)**
   * **Storage** → Default is fine
5. Click **Launch Instance**

---

## 2️⃣ Connect to EC2 Instance (SSH)

On your local machine:

```bash
chmod 400 Deploy-key.pem
```

```bash
ssh -i "Deploy-key.pem" ubuntu@<EC2_PUBLIC_IP>
```

✅ You are now connected to the EC2 server.

---

## 3️⃣ Install Required Packages

Update system and install Python + Nginx:

```bash
sudo apt update
sudo apt install -y python3-pip python3-venv python3-full nginx
```

---

## 4️⃣ Configure Nginx as Reverse Proxy

Create Nginx config for FastAPI:

```bash
sudo vim /etc/nginx/sites-enabled/fastapi_nginx
```

Paste this configuration:

```nginx
server {
    listen 80;
    server_name <EC2_PUBLIC_IP>;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Restart Nginx:

```bash
sudo systemctl restart nginx
```

---

## 5️⃣ Deploy FastAPI Application

Clone FastAPI project:

```bash
git clone https://github.com/pixegami/fastapi-tutorial.git
cd fastapi-tutorial
```

(Optional but recommended) Create virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn
```

Run FastAPI app:

```bash
uvicorn main:app --host 127.0.0.1 --port 8000
```

---

## 6️⃣ Access FastAPI from Browser

Open browser and hit:

```
http://<EC2_PUBLIC_IP>/
```

🎉 FastAPI is now running on EC2 using **Nginx + Uvicorn**

---

## 🔁 Architecture Flow (Easy to Remember)

```
Browser
  ↓
EC2 Public IP (Port 80)
  ↓
Nginx (Reverse Proxy)
  ↓
Uvicorn (Port 8000)
  ↓
FastAPI App
```

---