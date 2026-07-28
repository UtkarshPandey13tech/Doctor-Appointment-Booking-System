import React from 'react'
import { assets } from '../assets/assets_frontend/assets.js'

const Contact = () => {
  return (
    <div className='py-4'>
      <div className='rounded-[28px] border border-slate-200/80 bg-white/80 px-6 py-10 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] backdrop-blur-sm'>
        <div className='text-center text-2xl text-slate-500'>
          <p>CONTACT <span className='font-semibold text-slate-800'>US</span></p>
        </div>

        <div className='mt-8 flex flex-col justify-center gap-8 text-sm md:flex-row'>
          <img className='w-full rounded-[24px] object-cover md:max-w-[360px]' src={assets.contact_image} alt="Contact" />
          <div className='flex flex-col items-start justify-center gap-6'>
            <div>
              <p className='text-lg font-semibold text-slate-700'>OUR OFFICE</p>
              <p className='mt-2 leading-7 text-slate-600'>294/A <br />Patel Complex , Chinhat ,Lucknow, India</p>
            </div>
            <div>
              <p className='leading-7 text-slate-600'>+91 9999999999  <br />Email: medicareteam@gmail.com</p>
            </div>
            <div>
              <p className='text-lg font-semibold text-slate-700'>Careers at MediCare</p>
              <p className='mt-2 text-slate-600'>Learn more about our team and job openings.</p>
            </div>
            <button className='rounded-full border border-slate-300 px-8 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-900 hover:text-white'>Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact