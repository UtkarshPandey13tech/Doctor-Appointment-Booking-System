import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Login from './pages/Login'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="min-h-screen text-slate-800">
      <div className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl">
        <Navbar />
      </div>
      <ToastContainer position="top-right" theme="light" />

      <div className="mx-3 py-4 sm:mx-[4%] sm:py-6 lg:mx-[8%]">
        <div className="rounded-[28px] border border-slate-200/80 bg-white/70 p-3 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.25)] backdrop-blur-sm sm:p-5 lg:p-7">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:speciality" element={<Doctors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/my-appointments" element={<MyAppointment />} />
            <Route path="/appointment/:docId" element={<Appointment />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App