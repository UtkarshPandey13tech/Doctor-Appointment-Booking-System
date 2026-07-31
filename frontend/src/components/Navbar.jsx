import React, { useContext } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { token, setToken, userData } = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false)

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  return (
    <div className="w-full bg-white/80 backdrop-blur-xl">
      <div className="flex items-center justify-between w-full px-4 py-4 sm:px-[8%] lg:px-[10%]">
        <img onClick={() => navigate('/')} src={assets.logo} alt="MediCare" className="h-11 w-auto cursor-pointer" />

        <ul className="hidden items-center gap-2 font-medium text-slate-700 md:flex">
          <NavLink to="/" className={({ isActive }) => `rounded-full px-3 py-2 transition ${isActive ? 'bg-sky-50 text-sky-700 shadow-sm' : 'hover:bg-slate-50 hover:text-sky-700'}`}>
            <li>HOME</li>
          </NavLink>
          <NavLink to="/doctors" className={({ isActive }) => `rounded-full px-3 py-2 transition ${isActive ? 'bg-sky-50 text-sky-700 shadow-sm' : 'hover:bg-slate-50 hover:text-sky-700'}`}>
            <li>ALL DOCTORS</li>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `rounded-full px-3 py-2 transition ${isActive ? 'bg-sky-50 text-sky-700 shadow-sm' : 'hover:bg-slate-50 hover:text-sky-700'}`}>
            <li>ABOUT</li>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `rounded-full px-3 py-2 transition ${isActive ? 'bg-sky-50 text-sky-700 shadow-sm' : 'hover:bg-slate-50 hover:text-sky-700'}`}>
            <li>CONTACT</li>
          </NavLink>
        </ul>

        <div className="flex items-center gap-3">
          {token && userData ? (
            <div className="group relative flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5">
              <img className="h-8 w-8 rounded-full object-cover" src={userData.image} alt="profile" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown" />
              <div className="absolute right-0 top-0 z-20 hidden pt-14 text-base font-medium text-slate-600 group-hover:block">
                <div className="min-w-48 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                  <p onClick={() => navigate('my-profile')} className="mb-2 cursor-pointer hover:text-sky-700">My Profile</p>
                  <p onClick={() => navigate('my-appointments')} className="mb-2 cursor-pointer hover:text-sky-700">My Appointments</p>
                  <p onClick={logout} className="cursor-pointer hover:text-sky-700">Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className="rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sky-500/30">
              Create Account
            </button>
          )}

          <img
  onClick={() => setShowMenu((prev) => !prev)}
  className="w-6 cursor-pointer md:hidden"
  src={assets.menu_icon}
  alt="menu"
/>

<div
  className={`fixed right-0 top-0 z-50 h-screen w-[80%] max-w-[320px] overflow-y-auto bg-white shadow-2xl transition-transform duration-300 md:hidden ${
    showMenu ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  <div className="flex items-center justify-between px-5 py-6">
    <img className="w-40" src={assets.logo} alt="logo" />
    <img
      className="w-7 cursor-pointer"
      onClick={() => setShowMenu(false)}
      src={assets.cross_icon}
      alt="close"
    />
  </div>

  <ul className="mt-5 flex flex-col items-center gap-2 px-5 text-lg font-medium text-slate-700">
    <NavLink onClick={() => setShowMenu(false)} to="/" className="w-full rounded-2xl px-4 py-2 text-center hover:bg-sky-50 hover:text-sky-700">HOME</NavLink>
    <NavLink onClick={() => setShowMenu(false)} to="/doctors" className="w-full rounded-2xl px-4 py-2 text-center hover:bg-sky-50 hover:text-sky-700">ALL DOCTORS</NavLink>
    <NavLink onClick={() => setShowMenu(false)} to="/about" className="w-full rounded-2xl px-4 py-2 text-center hover:bg-sky-50 hover:text-sky-700">ABOUT</NavLink>
    <NavLink onClick={() => setShowMenu(false)} to="/contact" className="w-full rounded-2xl px-4 py-2 text-center hover:bg-sky-50 hover:text-sky-700">CONTACT</NavLink>
  </ul>
</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar