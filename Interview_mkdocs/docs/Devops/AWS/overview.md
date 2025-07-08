### 🔧 **Compute**

| Service    | Why Important                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **EC2**    | Understand server provisioning, SSH, load balancers, auto-scaling. Even if using serverless now, EC2 gives core infra knowledge. |
| **Lambda** | Essential for serverless backends, cron jobs, webhooks, async processing. Integrates well with API Gateway & S3.                 |

---

### 🌐 **Networking & API**

| Service         | Why Important                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| **API Gateway** | Used with Lambda or other services to expose secure HTTP endpoints.                                   |
| **VPC**         | Understand how to isolate services, subnets, security groups, and how services communicate privately. |
| **Route 53**    | DNS management, custom domain routing, health checks.                                                 |

---

### 🗄️ **Storage**

| Service | Why Important                                                                             |
| ------- | ----------------------------------------------------------------------------------------- |
| **S3**  | Store static files, backups, logs, assets. Common with media uploads and CDN integration. |
| **EFS** | If your app needs shared file systems across multiple EC2s or containers.                 |

---

### 🛢️ **Databases**

| Service                    | Why Important                                                                                      |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| **RDS (PostgreSQL/MySQL)** | Managed relational databases. Know about backups, read replicas, failover, etc.                    |
| **DynamoDB**               | NoSQL option for highly scalable applications. Know about partition keys, indexes, and throughput. |
| **ElastiCache (Redis)**    | For caching, session management, and improving response times. Common in high-perf backends.       |

---

### 📦 **Containers (if relevant)**

| Service               | Why Important                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------ |
| **ECS / EKS**         | If you work with Docker, you should know ECS (Fargate) or EKS for container orchestration. |
| **Elastic Beanstalk** | Easy PaaS for deploying Python web apps (e.g., Flask, Django) without deep infra setup.    |

---

### 🔐 **Security & Identity**

| Service             | Why Important                                                                |
| ------------------- | ---------------------------------------------------------------------------- |
| **IAM**             | Core AWS security: roles, policies, access control. A must-know.             |
| **Secrets Manager** | Store API keys, DB passwords securely. Better than hardcoding or .env files. |
| **Cognito**         | If your backend includes user authentication (OAuth, SSO, etc).              |

---

### 🛠️ **Developer Tools & Monitoring**

| Service                      | Why Important                                                                             |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| **CloudWatch**               | Logs, metrics, custom alarms, and monitoring Lambda/EC2 apps.                             |
| **CloudTrail**               | Track who did what in your AWS account (audit trail).                                     |
| **CodePipeline + CodeBuild** | CI/CD for automating deployment of Python apps.                                           |
| **X-Ray**                    | Debugging performance bottlenecks in distributed applications (Lambda, API Gateway, etc). |

---

### ⚙️ **Others (Nice to Have)**

| Service                              | Why Learn It                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| **Step Functions**                   | For orchestrating Lambda functions or other services (workflow-as-code).              |
| **SNS & SQS**                        | Event-driven systems, queues, and async processing. Common in scalable microservices. |
| **CloudFormation / CDK / Terraform** | Infra as Code (IaC). Automate and version your infrastructure setup.                  |

---

### ✅ Focus First On:

* **Lambda**
* **API Gateway**
* **S3**
* **RDS**
* **DynamoDB**
* **IAM**
* **CloudWatch**
* **Secrets Manager**
* **SQS/SNS (event-driven)**
