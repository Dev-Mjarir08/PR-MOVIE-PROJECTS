# PR-MOVIE-PROJECTS
<div align="center">
🎬 PR-MOVIE-PROJECTS
Movie Management Web Application (Node.js + Express + MongoDB + EJS)














</div>
📌 Overview

PR-MOVIE-PROJECTS is a structured Movie Management Web Application built using Node.js, Express.js, MongoDB (Mongoose), and EJS.

The application allows admin-based movie management with full CRUD functionality and image upload support.
It follows a clean MVC architecture for scalability and maintainability.

🏗 Architecture

The project follows the MVC pattern:

Model → MongoDB schema definitions

View → EJS templates

Controller → Business logic

Router → Route handling

Middleware → Upload handling (Multer)

🚀 Tech Stack
Technology	Purpose
Node.js	Runtime Environment
Express.js	Web Framework
MongoDB	NoSQL Database
Mongoose	MongoDB ODM
EJS	Template Engine
Multer	Image Upload Handling
Morgan	HTTP Logging
Dotenv	Environment Config
📁 Project Structure
PR-MOVIE-PROJECTS/
│
├── configs/          # Database connection
├── controllers/      # Application logic
├── middlewares/      # Multer configuration
├── models/           # Mongoose schemas
├── public/           # Static files
├── routers/          # Routes
├── uploads/          # Uploaded movie images
├── views/
│   ├── pages/
│   └── partials/
│
├── index.js          # Entry point
├── package.json
└── .env.example
🎯 Features

🔐 Admin Login & Signup Pages

➕ Add Movie

📄 View All Movies

✏ Edit Movie

❌ Delete Movie

🖼 Image Upload with Multer

🗄 MongoDB Data Storage

🧩 MVC Structured Codebase

🗃 Database Schema
{
  title: String,
  rating: Number,
  image: String,
  about: String
}

Each movie document stores:

Movie Title

Rating (1–5)

Image filename (stored in /uploads)

Description

🔄 Application Flow

Server initializes (index.js)

MongoDB connection established

Admin accesses login/signup page

Admin dashboard loads

Movie CRUD operations performed

Images stored in /uploads

Movies rendered dynamically using EJS

🛠 Installation Guide
1️⃣ Clone Repository
git clone https://github.com/Dev-Mjarir08/PR-MOVIE-PROJECTS.git
cd PR-MOVIE-PROJECTS
2️⃣ Install Dependencies
npm install

or

yarn install
3️⃣ Setup Environment Variables

Create a .env file:

PORT=8081
MONGO_URL=mongodb://localhost:27017/moviedb
4️⃣ Run Application

Development mode:

npm run dev

Production mode:

npm start

Server runs at:

http://localhost:8081
📦 Available Scripts
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
📊 Key Highlights

Clean MVC architecture

Organized folder structure

Static & upload directory mapping

Dynamic rendering with EJS

MongoDB integration via Mongoose

Express middleware handling

📌 Author

Jarir Multani
GitHub: https://github.com/Dev-Mjarir08

📜 License

This project is licensed under the MIT License.
