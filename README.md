# 🚀 Hackathon Project – Robotics Project Showcase: Gaming & Bots

A futuristic, dark-themed full-stack web application to showcase various robotics and gaming projects. It features interactive UI, 3D visuals, and a backend to manage bots and project data.

---

## 🧩 Problem Statement

Modern robotics projects are often shared in static formats, limiting interactivity and deeper understanding. There's a need for a platform that allows immersive exploration of robotics projects with both visual appeal and dynamic content handling.

---

## 🚀 Approach & Solution

This full-stack project combines a stylish and interactive frontend with a robust backend API to serve dynamic content such as bot listings, images, and details. Each robot has an individual card and dropdown entry, fetched from the backend database.

The platform supports scalability for adding more bots and functionality like user login, feedback, or real-time updates in the future.

---

## 🌟 Features

### Frontend

- ⚫ Dark-themed animated UI
- 🤖 Dropdown with bot previews (images + names)
- 🧠 Bot details with images and descriptions
- 🧭 3D graphics integration via Spline
- 🎨 Tailwind & ShadCN components
- 📱 Fully responsive design
- 📸 Screenshot-based bot gallery

### Backend

- 🌐 REST API for bot data
- 🧾 MongoDB for data persistence
- 📡 Fetch and display all bots dynamically
- 🔒 Secure CORS setup and error handling
- 📦 Future-ready for user auth & real-time updates

---

## 🛠 Tech Stack

| Layer     | Tech Stack                              |
|-----------|-----------------------------------------|
| Frontend  | React.js, Tailwind CSS, ShadCN/UI, Spline, Framer Motion, Lucide Icons |
| Backend   | Node.js / Express.js, MongoDB           |
| Other     | Vite / CRA, REST API, Mongoose          |

---

## 🖼 Screenshots

> 🖼️ _Make sure these images are added to your repo in the correct folders._

| Home Page | Bot Dropdown | 3D Viewer |
|-----------|--------------|-----------|
| ![Home](/Frontend/public/images/Screenshot%20(1416).png) | ![Dropdown](/Frontend/public/images/Screenshot%20(1417).png) | ![3D](/Frontend/public/images/Screenshot%20(1418).png) |

---

## 🧪 Run Instructions

### 🔧 Prerequisites

- Node.js (v16+)
- MongoDB installed locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

### 📁 Clone the Repository

```bash
git clone https://github.com/Ashutoshpandey3110/Hackathon.git
cd Hackathon

---
#### RUN BACKEND FIRST

-cd backend
-npm i (for node modules)
-go to (backend/config.js) copy the mongodb url and paste it in mongodb compass
-node server.js

### FOR FRONTEND
-cd frontend
-npm i
-npm run dev






