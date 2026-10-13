### Backend – DigitalFix MERN Stack Assessment

This is the **Backend** part of the DigitalFix technical assessment.  
It is built using **Express.js**, **Mongoose**, and **JWT (jsonwebtoken)** for route protection.  
The backend includes a protected `/dashboard` route and a Mongoose schema with validations and static methods.

**`Live`:** [Link](https://backend-pi-smoky-10.vercel.app/)  

---

## Project Setup

```bash
# 1. Clone the repository
git clone https://github.com/afsar-dev/digitalfix-assessment
cd backend

# 2. Create a .env file in the root directory and add:
PORT=4000 (optional)
JWT_SECRET=****

# 3. Install dependencies
bun install

# 4. Start the development server
bun run dev

# The server will be running at http://localhost:4000
```

### Testing JWT Protection
`Use Postman or curl to test:`

```
curl -H "Authorization: <your_generated_token>" http://localhost:5000/api/dashboard
```

`Expected response:`

```bash
{
  "success": true,
  "message": "Welcome to the protected dashboard"
}
```

`Note:` For testing purposes, you can generate a token using https://jwt.io with the same secret key provided in .env. The token should be passed as a Bearer token in the Authorization header.

## Folder Structure

```sh
backend/
├── dist/
├── src/
├── .env
├── .env.example
├── .gitignore
├── bun.lock
├── eslint.config.mjs
├── package.json
├── README.md
├── tsconfig.json
└── vercel.json
```
