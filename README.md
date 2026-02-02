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

📁 Project Structure
src/
├── app.ts # Express app setup
├── server.ts # Server entry point
├── prisma.ts # Prisma client
├── middleware/
│ └── auth.ts # Auth middleware
├── routes/
│ ├── admin.ts # Admin routes
│ └── answerer.ts # Answerer routes
└── types/
└── express.d.ts # Request type augmentation

prisma/
├── schema.prisma # Prisma schema
└── migrations/ # DB migrations

⚙️ Environment Variables

Create a .env file in the root:

DATABASE_URL="postgresql://USER@localhost:5432/survey_project"
PORT=3000

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

Required Headers
x-user-id: admin1
x-user-role: ADMIN | ANSWERER

📌 API Endpoints
Health Check
GET /ping

Response:

pong

Admin Routes (ADMIN only)
Create Survey
POST /admin/surveys

Body:

{
"title": "Customer Feedback"
}

Headers:

x-user-id: admin1
x-user-role: ADMIN

List Surveys
GET /admin/surveys

Answerer Routes (ANSWERER only)
List Available Surveys
GET /answerer/surveys

Headers:

x-user-id: user1
x-user-role: ANSWERER

🧪 Testing with cURL
curl -X POST http://localhost:3000/admin/surveys \
 -H "Content-Type: application/json" \
 -H "x-user-id: admin1" \
 -H "x-user-role: ADMIN" \
 -d '{"title":"Customer Feedback"}'

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
