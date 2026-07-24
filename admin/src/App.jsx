import React, { useContext } from 'react'
import Login from './pages/Login.jsx'
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AppContext } from './context/AppContext.jsx';
import { AdminContext } from './context/AdminContext.jsx';
import Navbar from './component/Navbar.jsx';
import Sidebar from './component/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AllAppointment from './pages/Admin/AllAppointment.jsx';
import AddDoctor from './pages/Admin/AddDoctor.jsx';
import Doctorslist from './pages/Admin/Doctorslist.jsx';

const App = () => {
  const {aToken} = useContext(AdminContext)
  return aToken ?(
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element ={<></>} />
          <Route path='/admin-dashboard' element ={<Dashboard/>} />
          <Route path='/all-appointments' element ={<AllAppointment/>} />
          <Route path='/add-doctor' element ={<AddDoctor/>} />
          <Route path='/doctor-list' element ={<Doctorslist/>} />

        </Routes>
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