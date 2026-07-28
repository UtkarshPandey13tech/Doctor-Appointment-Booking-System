import React from 'react'
import { assets } from '../assets/assets_frontend/assets.js'

const About = () => {
  return (
    <div className='space-y-8 py-4'>
      <div className='rounded-[28px] border border-slate-200/80 bg-white/80 px-6 py-10 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] backdrop-blur-sm'>
        <div className='text-center text-2xl text-slate-500'>
          <p>ABOUT <span className='font-semibold text-slate-800'>US</span></p>
        </div>

        <div className='mt-8 flex flex-col gap-8 md:flex-row'>
          <img className='w-full rounded-[24px] object-cover md:max-w-[360px]' src={assets.about_image} alt="About" />
          <div className='flex flex-col justify-center gap-6 text-sm leading-7 text-slate-600 md:w-2/4'>
            <p>Welcome to MediCare, your trusted partner in managing your healthcare needs conveniently and efficiently. At MediCare, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p>MediCare is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you are booking your first appointment or managing ongoing care, MediCare is here to support you every step of the way.</p>
            <b className='text-slate-800'>Our Vision</b>
            <p>Our vision at MediCare is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>
      </div>

      <div className='rounded-[28px] border border-slate-200/80 bg-white/80 px-6 py-8 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] backdrop-blur-sm'>
        <div className='mb-6 text-xl'>
          <p>WHY <span className='font-semibold text-slate-800'>CHOOSE US</span></p>
        </div>
        <div className='grid gap-4 md:grid-cols-3'>
          <div className='flex flex-col gap-4 rounded-[22px] border border-slate-200 bg-slate-50/80 px-6 py-8 text-[15px] text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50'>
            <b className='text-slate-900'>EFFICIENCY</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='flex flex-col gap-4 rounded-[22px] border border-slate-200 bg-slate-50/80 px-6 py-8 text-[15px] text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50'>
            <b className='text-slate-900'>CONVENIENCE</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='flex flex-col gap-4 rounded-[22px] border border-slate-200 bg-slate-50/80 px-6 py-8 text-[15px] text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50'>
            <b className='text-slate-900'>PERSONALIZATION</b>
            <p>Tailored recommendations and reminders to support your unique health journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
