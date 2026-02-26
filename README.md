<div align="center">

<h1>🎬 PR-MOVIE-PROJECTS</h1>
<h3>🚀 Movie Management Web Application</h3>

<br/>

<img src="https://img.shields.io/badge/Node.js-18+-green?logo=node.js"/>
<img src="https://img.shields.io/badge/Express.js-Framework-black?logo=express"/>
<img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb"/>
<img src="https://img.shields.io/badge/Mongoose-ODM-red?logo=mongoose"/>
<img src="https://img.shields.io/badge/EJS-Template-yellow?logo=ejs"/>
<img src="https://img.shields.io/badge/Status-Active-success"/>
<img src="https://img.shields.io/badge/License-MIT-blue"/>

</div>

<hr/>

<h2>📌 Project Overview</h2>

<p>
PR-MOVIE-PROJECTS is a Movie Management Web Application built using 
<strong>Node.js, Express.js, MongoDB (Mongoose), and EJS</strong>.
It follows a structured MVC architecture and allows admin-based movie CRUD operations 
with image upload support.
</p>

<hr/>

<h2>🏗 Architecture Pattern</h2>

<ul>
<li>🧠 <strong>Model</strong> → MongoDB Schema Definitions</li>
<li>🎨 <strong>View</strong> → EJS Templates</li>
<li>⚙ <strong>Controller</strong> → Business Logic</li>
<li>🛣 <strong>Router</strong> → Route Handling</li>
<li>🔧 <strong>Middleware</strong> → Upload & Request Handling</li>
</ul>

<hr/>

<h2>🛠 Tech Stack</h2>

<table border="1" cellpadding="8">
<tr>
<th>Technology</th>
<th>Purpose</th>
</tr>
<tr>
<td>🟢 Node.js</td>
<td>Runtime Environment</td>
</tr>
<tr>
<td>⚫ Express.js</td>
<td>Web Framework</td>
</tr>
<tr>
<td>🟢 MongoDB</td>
<td>Database</td>
</tr>
<tr>
<td>🔴 Mongoose</td>
<td>ODM</td>
</tr>
<tr>
<td>🟡 EJS</td>
<td>Template Engine</td>
</tr>
<tr>
<td>📤 Multer</td>
<td>File Upload</td>
</tr>
<tr>
<td>📋 Morgan</td>
<td>Request Logging</td>
</tr>
<tr>
<td>🔐 Dotenv</td>
<td>Environment Config</td>
</tr>
</table>

<hr/>

<h2>📁 Project Structure</h2>

<pre>
PR-MOVIE-PROJECTS/
│
├── configs/          # Database connection
├── controllers/      # Business logic
├── middlewares/      # Multer config
├── models/           # Mongoose schemas
├── public/           # Static assets
├── routers/          # Routes
├── uploads/          # Uploaded images
├── views/
│   ├── pages/
│   └── partials/
│
├── index.js          # Entry point
├── package.json
└── .env.example
</pre>

<hr/>

<h2>🎯 Features</h2>

<ul>
<li>🔐 Admin Login & Signup</li>
<li>➕ Add Movie</li>
<li>📄 View Movies</li>
<li>✏ Edit Movie</li>
<li>❌ Delete Movie</li>
<li>🖼 Image Upload Support</li>
<li>🗄 MongoDB Integration</li>
<li>🧩 MVC Structured Codebase</li>
</ul>

<hr/>

<h2>🗃 Database Schema</h2>

<pre>
{
  title: String,
  rating: Number,
  image: String,
  about: String
}
</pre>

<hr/>

<h2>🔄 Application Flow</h2>

<ol>
<li>Server starts (index.js)</li>
<li>MongoDB connection established</li>
<li>Admin logs in</li>
<li>Dashboard loads</li>
<li>CRUD operations performed</li>
<li>Images saved in /uploads</li>
<li>Data rendered via EJS</li>
</ol>

<hr/>

<h2>⚙ Installation Guide</h2>

<h3>1️⃣ Clone Repository</h3>

<pre>
git clone https://github.com/Dev-Mjarir08/PR-MOVIE-PROJECTS.git
cd PR-MOVIE-PROJECTS
</pre>

<h3>2️⃣ Install Dependencies</h3>

<pre>
npm install
</pre>

or

<pre>
yarn install
</pre>

<h3>3️⃣ Configure Environment Variables</h3>

<pre>
PORT=8081
MONGO_URL=mongodb://localhost:27017/moviedb
</pre>

<h3>4️⃣ Run Application</h3>

Development:
<pre>
npm run dev
</pre>

Production:
<pre>
npm start
</pre>

<p><strong>Server runs at:</strong> http://localhost:8081</p>

<hr/>

<h2>📦 Available Scripts</h2>

<pre>
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
</pre>

<hr/>

<h2>✨ Key Highlights</h2>

<ul>
<li>✔ Clean MVC Architecture</li>
<li>✔ Organized Folder Structure</li>
<li>✔ Static & Upload Directory Mapping</li>
<li>✔ MongoDB via Mongoose</li>
<li>✔ Dynamic EJS Rendering</li>
</ul>

<hr/>

<h2>👨‍💻 Author</h2>

<p>
<strong>Jarir Multani</strong><br/>
GitHub: <a href="https://github.com/Dev-Mjarir08">Dev-Mjarir08</a>
</p>

<hr/>

<h2>📜 License</h2>

<p>MIT License</p>
