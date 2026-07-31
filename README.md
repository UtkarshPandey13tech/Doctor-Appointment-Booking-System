# 🩺 Doctor Appointment Booking System

A full-stack **Doctor Appointment Booking System** built using the **MERN Stack** that enables patients to book appointments online while allowing administrators to efficiently manage doctors, appointments, and payments.

---

## 🚀 Features

### 👤 Patient Portal
- User Registration & Login (JWT Authentication)
- Browse Doctors by Speciality
- View Doctor Profiles
- Book Appointments
- Cancel Appointments
- View Appointment History
- Update User Profile
- Upload Profile Image
- Razorpay Payment Integration

### 👨‍⚕️ Admin Panel
- Secure Admin Login
- Add New Doctors
- Upload Doctor Images
- View All Doctors
- Manage Doctor Availability
- View All Appointments
- Cancel Appointments
- Dashboard with Analytics

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify

### Admin Panel
- React.js
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- Multer
- Cloudinary
- Razorpay

---

## 📁 Project Structure

```text
Doctor-Appointment-Booking-System/
│
├── frontend/          # Patient Portal
│
├── admin/             # Admin Dashboard
│
├── backend/           # REST API & Database
│
├── README.md
│
└── package.json
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Doctor-Appointment-Booking-System.git
```

```bash
cd Doctor-Appointment-Booking-System
```

---

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Admin

```bash
cd ../admin
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd backend
npm run server
```

### Start Frontend

```bash
cd frontend
npm run dev
```

### Start Admin Panel

```bash
cd admin
npm run dev
```

---

## 📷 Screenshots

Add screenshots of your application here.

Example:

```
screenshots/
│
├── home.png
├── doctors.png
├── appointment.png
├── admin-dashboard.png
```

---

## 📌 API Modules

### User
- Register
- Login
- Get Profile
- Update Profile
- Book Appointment
- Cancel Appointment
- Get Appointments
- Razorpay Payment

### Admin
- Login
- Add Doctor
- Get All Doctors
- Change Availability
- Get Dashboard Data
- Get All Appointments
- Cancel Appointment

---

## 🔒 Authentication

- JWT Authentication
- Protected Routes
- Password Hashing using bcrypt
- Role-Based Access (Admin/User)

---

## 💳 Payment Gateway

Integrated with **Razorpay** for secure online appointment payments.

Features:
- Online Payment
- Payment Verification
- Secure Transaction Flow

---

## ☁️ Image Storage

Doctor and User profile images are uploaded securely using **Cloudinary**.

---

## 🌟 Future Enhancements

- Email Notifications
- SMS Appointment Reminder
- Video Consultation
- Doctor Login Panel
- Prescription Upload
- Medical Reports
- Appointment Rescheduling
- Search & Filter Doctors
- Ratings & Reviews

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---


- GitHub: https://github.com/UtkarshPandey13tech

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub!