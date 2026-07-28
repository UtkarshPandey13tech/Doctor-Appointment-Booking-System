import React from 'react'
import { assets } from '../assets/assets_admin/assets.js'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { aToken, setaToken } = useContext(AdminContext)
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    aToken && setaToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className="border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-xs">
          <img className="w-36 cursor-pointer" src={assets.admin_logo} alt="Admin" />
          <p className="rounded-full border border-slate-300 px-2.5 py-0.5 text-slate-600">{aToken ? 'Admin' : 'Doctor'}</p>
        </div>
        <button onClick={logout} className="rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition-all duration-200 hover:-translate-y-0.5">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar