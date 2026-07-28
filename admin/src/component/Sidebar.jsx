import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets_admin/assets'

const Sidebar = () => {
  const { aToken } = useContext(AdminContext)

  return (
    <div className="border-r border-slate-200/80 bg-white/70 px-2 py-4 lg:min-h-screen lg:w-72">
      {aToken && (
        <ul className="mt-2 space-y-1 text-slate-600">
          <NavLink className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3.5 transition-all md:px-4 ${isActive ? 'border border-sky-100 bg-sky-50 text-sky-700 shadow-sm' : 'hover:bg-slate-50 hover:text-slate-900'}`} to={'/admin-dashboard'}>
            <div className={`flex h-9 w-9 items-center justify-center rounded-full ${'bg-sky-100'}`}>
              <img src={assets.home_icon} alt="" />
            </div>
            <p className="font-medium">Dashboard</p>
          </NavLink>
          <NavLink className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3.5 transition-all md:px-4 ${isActive ? 'border border-sky-100 bg-sky-50 text-sky-700 shadow-sm' : 'hover:bg-slate-50 hover:text-slate-900'}`} to={'/all-appointments'}>
            <div className={`flex h-9 w-9 items-center justify-center rounded-full ${'bg-sky-100'}`}>
              <img src={assets.appointment_icon} alt="" />
            </div>
            <p className="font-medium">Appointments</p>
          </NavLink>
          <NavLink className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3.5 transition-all md:px-4 ${isActive ? 'border border-sky-100 bg-sky-50 text-sky-700 shadow-sm' : 'hover:bg-slate-50 hover:text-slate-900'}`} to={'/add-doctor'}>
            <div className={`flex h-9 w-9 items-center justify-center rounded-full ${'bg-sky-100'}`}>
              <img src={assets.add_icon} alt="" />
            </div>
            <p className="font-medium">Add Doctor</p>
          </NavLink>
          <NavLink className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3.5 transition-all md:px-4 ${isActive ? 'border border-sky-100 bg-sky-50 text-sky-700 shadow-sm' : 'hover:bg-slate-50 hover:text-slate-900'}`} to={'/doctor-list'}>
            <div className={`flex h-9 w-9 items-center justify-center rounded-full ${'bg-sky-100'}`}>
              <img src={assets.people_icon} alt="" />
            </div>
            <p className="font-medium">Doctors List</p>
          </NavLink>
        </ul>
      )}
    </div>
  )
}

export default Sidebar