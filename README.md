# 🏨 Stayzy – Full Stack Hotel Listing Progressive Web App

Stayzy is a **full stack hotel and stay listing Progressive Web App (PWA)** that allows users to explore, create, manage, and review property listings.
It combines modern backend architecture with a responsive frontend and PWA capabilities for an app-like experience on both desktop and mobile devices.

---

## ⚙️ Live Demo

🔗 Deployed on Render  
👉 [Click Here](https://stayzy-fullstack-hotel-listing-website.onrender.com)

> 💡 Stayzy can be installed on supported devices directly from the browser as a Progressive Web App.

---

## 🚀 Features

- Home page with featured and categorized listings
- Explore all listings with detailed views
- Add new property listings
- Edit and ❌ delete listings (authorized users only)
- Category-wise listings:
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
- Add and delete reviews
- Interactive map showing listing location
- Image upload with cloud storage
- Authentication & authorization system
- Flash messages for user feedback
- Fully responsive UI
- Installable Progressive Web App (PWA)
- Standalone app experience on mobile and desktop

---

## 📱 Progressive Web App (PWA)

Stayzy is enhanced with **PWA features** to provide a native-app-like experience:

- Web App Manifest (`manifest.json`)
- Installable on mobile & desktop
- Standalone display mode
- App icons for multiple screen sizes
- Optimized screenshots for install prompt
- Lighthouse-tested PWA compatibility

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
- Session-based authentication with MongoDB store

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
├── public/             # Static assets & PWA files
│   ├── icons/
│   ├── screenshots/
│   ├── css/
│   ├── js/
│   └── manifest.json
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
- PWA-enabled for installable experience

---

## 👤 Author

**Gulam Mohyudin Memon** <br>
Diploma in Information Technology <br>
_Full Stack Web Developer_

---

⭐ If you like this project, consider giving it a star on GitHub!
