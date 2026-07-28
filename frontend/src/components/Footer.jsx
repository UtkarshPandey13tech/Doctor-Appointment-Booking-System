import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className="mx-3 mt-8 rounded-[24px] border border-slate-200/80 bg-white/70 px-4 py-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.15)] backdrop-blur-sm sm:mx-[4%] lg:mx-[8%] sm:px-6 lg:px-8">
      <div className="grid gap-10 text-sm text-slate-600 sm:grid-cols-[2.5fr_1fr_1fr]">
        <div>
          <img className="mb-4 w-40" src={assets.logo} alt="MediCare" />
          <p className="w-full leading-6 text-slate-600 md:w-2/3">Connecting patients with the right doctors through technology for a healthier tomorrow.</p>
        </div>

        <div>
          <p className="mb-4 text-lg font-semibold text-slate-800">COMPANY</p>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-sky-700">Home</li>
            <li className="hover:text-sky-700">About us</li>
            <li className="hover:text-sky-700">Contact Us</li>
            <li className="hover:text-sky-700">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-lg font-semibold text-slate-800">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2">
            <li>9935687707</li>
            <li>medicare@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-200 pt-4">
        <p className="text-center text-sm text-slate-500">Copyright 2026 © MediCare - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer