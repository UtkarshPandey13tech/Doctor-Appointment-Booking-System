import React, { useContext } from 'react'
import Login from './pages/Login.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext.jsx';
import Navbar from './component/Navbar.jsx';
import Sidebar from './component/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AllAppointment from './pages/Admin/AllAppointment.jsx';
import AddDoctor from './pages/Admin/AddDoctor.jsx';
import Doctorslist from './pages/Admin/Doctorslist.jsx';

const App = () => {
  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div className="min-h-screen text-slate-800">
      <ToastContainer position="top-right" theme="light" />
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-1 p-3 sm:p-5 lg:p-6">
          <div className="rounded-[24px] border border-slate-200/80 bg-white/80 p-3 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.25)] backdrop-blur-sm sm:p-5">
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/admin-dashboard" element={<Dashboard />} />
              <Route path="/all-appointments" element={<AllAppointment />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/doctor-list" element={<Doctorslist />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App