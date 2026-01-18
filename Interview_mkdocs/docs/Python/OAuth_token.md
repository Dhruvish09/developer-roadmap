## OAuth2 Authorization Code Flow – Final Directional View

```
User Browser
   |
   | 1. Click "Login with Google / Facebook"
   v
Client App (Frontend)
   |
   | 2. Redirect user to Authorization Server
   |    GET /authorize
   v
Authorization Server (Google / Facebook)
   |
   | 3. User Login + Consent
   |
   | 4. Redirect user back with Authorization Code
   |    GET /callback?code=AUTH_CODE
   v
Backend Server (FastAPI)
   |
   | 5. Exchange code for tokens
   |    POST /token
   |    (code + client_id + client_secret)
   v
Authorization Server (Google / Facebook)
   |
   | 6. Return tokens
   |    access_token
   |    refresh_token
   |    id_token
   v
Backend Server
   |
   | 7. Verify id_token
   | 8. Store refresh_token (optional)
   | 9. Generate APP_JWT
   v
Client (Frontend)
   |
   | 10. Call protected API
   |     Authorization: Bearer APP_JWT
   v
Backend Protected API
```

---

## Token Refresh (Directional)

```
Backend Server
   |
   | POST /token
   | grant_type=refresh_token
   v
Authorization Server
   |
   | New access_token
   v
Backend Server
```

---


<img src="assets/images/outh.png" alt="Outh2" class="square-image">