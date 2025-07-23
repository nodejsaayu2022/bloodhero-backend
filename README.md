# 🩸 BloodHero - Backend

This is the backend for **BloodHero**, an AI-powered gamified blood donation platform.

## 🔧 Tech Stack
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- REST APIs

## 📁 Project Structure

bloodhero-backend/
├── controllers/ # Logic handlers
├── models/ # Mongoose schemas
├── routes/ # API routes
├── middlewares/ # Auth, error handling, etc.
├── .env # Environment variables
├── server.js # App entry point


## ⚙️ Setup Instructions

```bash
git clone https://github.com/nodejsaayu2022/bloodhero-backend.git
cd bloodhero-backend
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

npm run dev

### 🔗 Related Repositories

- 🔜 [BloodHero Frontend](https://github.com/nodejsaayu2022/bloodhero-frontend)

