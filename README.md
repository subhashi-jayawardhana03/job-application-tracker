# 💼 Job Application Tracker

A full-stack **MERN** (MongoDB, Express, React, Node.js) web application that helps job seekers and interns track their job applications in one place — from "Applied" to "Selected" — with authentication, file uploads, and a modern responsive dashboard.

Built as a portfolio project to demonstrate full-stack development, REST API design, authentication/authorization, and responsive UI design.

---

## ✨ Features

- 🔐 **User Authentication** — Register/Login with JWT-based auth and bcrypt password hashing
- 🔒 **Protected Routes** — Each user only sees and manages their own applications
- ➕ **Add Applications** — Track company, position, job type, applied date, job URL, status, and notes
- 📄 **CV/Resume Upload** — Attach a PDF resume to each application and view it anytime
- ✏️ **Edit & Delete** — Update or remove applications inline
- 🔄 **Status Tracking** — Move applications through Applied → Interview → Selected/Rejected
- 🔍 **Search & Filter** — Search by company name and filter by status
- 📊 **Live Dashboard** — Auto-updating stats: Total, Applied, Interviews, Selected, Rejected
- 📱 **Fully Responsive** — Works smoothly on desktop, tablet, and mobile
- 🎨 **Modern UI** — Clean dashboard-style design with a sticky navbar and card-based layout

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Axios
- Custom CSS (no framework — hand-built responsive design)

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT) for authentication
- bcrypt.js for password hashing
- Multer for file (PDF) uploads

---

## 📂 Project Structure

```
job-application-tracker/
├── backend/
│   ├── config/
│   │   └── multerConfig.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── jobController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Job.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── jobRoutes.js
│   ├── uploads/          # Uploaded CV/resume files (gitignored)
│   ├── server.js
│   └── .env
│
└── frontend/
    └── src/
        ├── components/
        │   ├── Dashboard.jsx
        │   ├── JobForm.jsx
        │   ├── JobItem.jsx
        │   ├── JobList.jsx
        │   ├── Login.jsx
        │   ├── Register.jsx
        │   ├── ProtectedRoute.jsx
        │   └── SearchFilter.jsx
        ├── AuthContext.jsx
        ├── api.js
        ├── authApi.js
        ├── App.jsx
        ├── App.css
        └── main.jsx
```

---

## ⚙️ Getting Started (Run Locally)

### Prerequisites
- Node.js (v18+ recommended)
- A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account

### 1. Clone the repository

```bash
git clone https://github.com/subhashi-jayawardhana03/job-application-tracker.git
cd job-application-tracker
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

Run the backend:

```bash
npm run dev
```

Server runs on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 🔑 API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive a JWT token |

### Job Routes (Protected — requires Bearer token)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/jobs` | Get all applications for the logged-in user |
| POST | `/api/jobs` | Add a new application (supports PDF upload) |
| PUT | `/api/jobs/:id` | Update an application |
| DELETE | `/api/jobs/:id` | Delete an application |

---

## 📸 Screenshots

> Add your dashboard, login page, and mobile view screenshots here.

---

## 🚀 Future Improvements

- Deploy live (Vercel + Render + MongoDB Atlas)
- Cloud file storage for resumes (Cloudinary)
- Email reminders for interview dates
- Data export (CSV/PDF)
- Application trend charts

---

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/subhashi-jayawardhana03)
- LinkedIn: [Your Name](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
