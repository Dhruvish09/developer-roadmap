## 🔐 What is a Pre-Signed URL?

A **pre-signed URL** is a **temporary, secure link** to access a **private file** in S3 — without making the file public.

🟢 **Anyone with the link can access the file — but only until it expires**.

---

## ✅ Real-World Example

You have a private S3 file:

```
s3://my-bucket/reports/salary.pdf
```

You want to let **User A** download it **for 5 minutes**, **without exposing your bucket** to the public.

✅ Use a **pre-signed URL**!

It creates a temporary link like:

```
https://my-bucket.s3.amazonaws.com/reports/salary.pdf?AWSAccessKeyId=...&Expires=...&Signature=...
```

---

## 🔁 How Pre-Signed URLs Work (Step-by-Step)

```
👨‍💻 Step 1: File is stored in S3 (Private)
        └──> Only your AWS user/role can access it

🔑 Step 2: Server Generates Pre-Signed URL
        └──> Signed using IAM credentials
        └──> Includes expiration time (e.g., 5 mins)

🔗 Step 3: Server Sends Pre-Signed URL to User
        └──> e.g., in API response or email

🖥️ Step 4: User Clicks the Link
        └──> Can download or view the file directly

⏳ Step 5: After Expiry, the Link Stops Working
        └──> Protects your content from unauthorized reuse
```

---

## 🧪 Example in Python (Boto3)

```python
import boto3
import os

s3 = boto3.client("s3")

def generate_presigned_url(bucket, key, expires_in=300):
    return s3.generate_presigned_url(
        'get_object',
        Params={'Bucket': bucket, 'Key': key},
        ExpiresIn=expires_in  # in seconds (e.g., 300 = 5 min)
    )

url = generate_presigned_url("my-bucket", "reports/salary.pdf")
print("Pre-signed URL:", url)
```

---

## 🔒 Why Pre-Signed URLs Are Safe

| Feature       | How It Helps                                    |
| ------------- | ----------------------------------------------- |
| ⏱️ Expiration | URL stops working after X minutes               |
| 🔑 IAM Signer | Only someone with AWS credentials can create it |
| 🌐 Private S3 | File is still private (not public at all)       |
| ✅ No Reuse    | Can’t guess or reuse after expiry              |
