# 🏨 Stayzy – Full Stack Hotel Listing Platform

Stayzy is a **full stack hotel and stay listing platform** that allows users to explore, create, manage, and review property listings.
The application includes user authentication, image uploads, interactive maps, and category-based browsing, all built with modern web technologies.

---

Live Demo

🔗 Deployed on Render <br>
👉 [Click Here](https://stayzy-fullstack-hotel-listing-website.onrender.com)

---

## 🚀 Features

- 🏠 Home page with featured and categorized listings
- 🔍 Explore all listings with detailed views
- ➕ Add new property listings
- ✏️ Edit and ❌ delete listings (authorized users only)
- 🗂️ Category-wise listings:

  - Trending
  - Rooms
  - Iconic Cities
  - Mountains
  - Castels
  - Amazing Pools
  - Camping
  - Farms
  - Arctic
  - Domes
  - Beaches
  - Other

- ⭐ Add and delete reviews
- 🗺️ Interactive map showing listing location
- 📸 Image upload with cloud storage
- 🔐 Authentication & authorization system
- 💬 Flash messages for user feedback
- 📱 Fully responsive UI

---

## 🛠️ Tech Stack

### Frontend

- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- HTML5 & CSS3
- Font Awesome

### Backend

- Node.js
- Express.js (REST API architecture)

### Database

- MongoDB
- Mongoose ODM

### Authentication

- Passport.js
- Passport Local Strategy
- Sessions with MongoDB store

### Other Integrations

- Cloudinary – image upload & storage
- Leaflet – interactive maps
- Multer – file handling
- Joi – server-side validation

---

## 📦 Major NPM Packages Used

```
cloudinary
connect-flash
connect-mongo
dotenv
ejs
ejs-mate
express
express-session
joi
method-override
mongodb
mongoose
multer
multer-storage-cloudinary
node-fetch
passport
passport-local
passport-local-mongoose
```

---

## 📂 Project Structure

```
STAYZY/
├── controllers/        # Route controllers
├── init/               # Database initialization & seed data
├── models/             # Mongoose schemas
├── public/             # Static assets (CSS, JS)
├── routes/             # Express routes
├── utils/              # Utility functions
├── views/              # EJS templates
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── error.ejs
├── .env
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── package.json
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
LIQ_KEY=
ATLASDB_URL=
SECRET=
```

> ⚠️ Never commit `.env` to GitHub.

---

## 🌍 Deployment

- Deployed on **Render**
- Uses MongoDB Atlas for production database
- Cloudinary for image storage

---

## 👤 Author

**Ashrafi**
Diploma in Information Technology
Full Stack Web Developer

---

## 📜 License

This project is licensed under the **MIT License**.

---

⭐ If you like this project, consider giving it a star on GitHub!
