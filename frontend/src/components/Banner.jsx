import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className="relative my-8 overflow-hidden rounded-[28px] bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-500 px-6 py-8 shadow-[0_24px_80px_-30px_rgba(2,132,199,0.8)] sm:px-8 sm:py-10 md:mx-4 md:px-10 lg:px-16 lg:py-14">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative flex flex-col md:flex-row md:items-end">
        <div className="flex-1">
          <div className="text-2xl font-semibold text-white sm:text-3xl lg:text-5xl">
            <p>Book Appointment</p>
            <p className="mt-3">With 100+ Trusted Doctors</p>
          </div>
          <button onClick={() => { navigate('/login'); scroll(0, 0) }} className="mt-6 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:scale-105 hover:shadow-lg sm:text-base cursor-pointer">
            Create Account
          </button>
        </div>

        <div className="mt-8 hidden md:flex md:w-1/2 lg:w-[320px] md:justify-end">
          <img className="max-w-[260px] drop-shadow-2xl" src={assets.appointment_img} alt="Doctor" />
        </div>
      </div>
    </div>
  )
}

export default Banner