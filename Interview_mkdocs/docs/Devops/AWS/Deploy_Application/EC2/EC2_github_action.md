# 🚀 Deploy FastAPI on EC2 with GitHub Actions (CI/CD)


# 1️⃣ Create EC2 (One Time)

1. AWS Console → **EC2**
2. Launch Instance:

   * OS: **Ubuntu**
   * Type: **t2.micro**
   * Allow:

     * SSH (22)
     * HTTP (80)
   * Download **key.pem**
3. Note **Public IP**

---

# 2️⃣ Connect to EC2

```bash
chmod 400 deploy-key.pem
ssh -i deploy-key.pem ubuntu@<EC2_PUBLIC_IP>
```

---

# 3️⃣ Install Required Software (One Time)

```bash
sudo apt update
sudo apt install -y git nginx python3-pip python3-venv
```

---

# 4️⃣ Clone FastAPI Project from GitHub

```bash
cd /home/ubuntu
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

---

# 5️⃣ Setup Python Environment

```bash
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```

---

# 6️⃣ Create systemd Service (Production Run)

```bash
sudo vim /etc/systemd/system/fastapi.service
```

```ini
[Unit]
Description=FastAPI Application
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/<your-repo>
ExecStart=/home/ubuntu/<your-repo>/venv/bin/gunicorn \
          main:app \
          -k uvicorn.workers.UvicornWorker \
          --workers 4 \
          --bind 127.0.0.1:8000
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable service:

```bash
sudo systemctl daemon-reload
sudo systemctl start fastapi
sudo systemctl enable fastapi
```

---

# 7️⃣ Configure Nginx (Reverse Proxy)

```bash
sudo vim /etc/nginx/sites-enabled/fastapi
```

```nginx
server {
    listen 80;
    server_name <EC2_PUBLIC_IP>;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Restart Nginx:

```bash
sudo systemctl restart nginx
```

✅ Visit:

```
http://<EC2_PUBLIC_IP>
```

---

# 8️⃣ Setup SSH Access for GitHub Actions (One Time)

On local machine:

```bash
ssh-keygen
```

Copy public key:

```bash
cat ~/.ssh/id_rsa.pub
```

Paste into EC2:

```bash
vim ~/.ssh/authorized_keys
```

---

# 9️⃣ Add GitHub Secrets

GitHub Repo → **Settings → Secrets → Actions**

Add:

| Name     | Value           |
| -------- | --------------- |
| EC2_HOST | Public IP       |
| EC2_USER | ubuntu          |
| EC2_KEY  | Private SSH key |

---

# 🔟 Create GitHub Action (Auto Deploy)

Create file:

```bash
.github/workflows/deploy.yml
```

```yaml
name: Deploy FastAPI to EC2

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to EC2
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_KEY }}
          script: |
            cd /home/ubuntu/<your-repo>
            git pull origin main
            source venv/bin/activate
            pip install -r requirements.txt || true
            sudo systemctl restart fastapi
```

---

# 🔁 Final Workflow (Very Important)

### Developer:

```bash
git add .
git commit -m "feature added"
git push origin main
```

### Automatically:

* GitHub Actions triggers
* EC2 pulls code
* FastAPI restarts
* App updated 🚀

---