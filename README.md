📝 Survey Project API

A backend API for creating and managing surveys with role-based access control.
Built with Node.js, TypeScript, Express, and Prisma.

🚀 Features

Role-based authentication (ADMIN, ANSWERER)

Admins can create and manage surveys

Answerers can view and answer surveys

Prisma ORM with PostgreSQL

Type-safe Express middleware

Ready for Docker & cloud deployment

🛠 Tech Stack

Node.js

TypeScript

Express

Prisma (v6)

PostgreSQL

ts-node

dotenv

🧱 Database Setup
npx prisma generate
npx prisma migrate dev

▶️ Running the Project
npm install
npm run dev

Server will start at:

http://localhost:3000

🔐 Authentication

This project uses header-based auth for simplicity.

🚧 Error Handling

401 → Unauthorized

403 → Forbidden

400 → Bad Request

500 → Server Error

All errors return JSON responses.

📦 Deployment (Planned)

Docker support

Compatible with:

Railway

Render

Fly.io

🔮 Future Improvements

JWT authentication

Survey answers & analytics

Pagination & filtering

Validation with Zod

Swagger / OpenAPI docs
