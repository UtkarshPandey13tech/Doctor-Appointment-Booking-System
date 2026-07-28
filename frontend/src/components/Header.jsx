import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <section className='relative overflow-hidden rounded-[30px] border border-sky-100 bg-gradient-to-br from-sky-700 via-blue-600 to-cyan-500 px-6 py-10 shadow-[0_30px_90px_-35px_rgba(2,132,199,0.8)] md:px-10 lg:px-16 lg:py-14'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_28%)]' />
      <div className='relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]'>
        <div className='flex flex-col items-start justify-center gap-6 pt-2'>
          <span className='rounded-full border border-white/30 bg-white/15 px-3 py-1 text-sm font-medium text-sky-50 backdrop-blur-sm'>Trusted care, simplified</span>
          <p className='text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl'>
            Welcome to MediCare! Your trusted platform for healthcare services.
          </p>

          <div className='flex flex-col items-start gap-3 text-sm font-light text-sky-50 sm:flex-row sm:items-center'>
            <img className='w-28' src={assets.group_profiles} alt='Group Profiles' />
            <p className='max-w-xl leading-7'>
              Experience the convenience of booking appointments and staying connected with your healthcare providers.
            </p>
          </div>

          <div className='mt-2 flex items-center gap-4'>
            <a onClick={() => scrollTo(0, 0)} className='inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow-lg transition-transform duration-200 hover:scale-105' href='#speciality'>
              Book appointment
              <img className='w-4' src={assets.arrow_icon} alt='arrow' />
            </a>
            <div className='hidden rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-sm sm:block'>
              24/7 support
            </div>
          </div>
        </div>

        <div className='flex justify-center lg:justify-end'>
          <div className='relative w-full max-w-md lg:max-w-xl'>
            <div className='overflow-hidden rounded-[24px] border border-white/30 bg-white/10 p-3 shadow-2xl backdrop-blur-sm'>
              <img src={assets.header_img} alt='doctors' className='h-auto w-full rounded-[18px] object-cover' />
            </div>

            <div className='absolute bottom-5 left-5 rounded-2xl bg-white/95 px-4 py-3 text-slate-900 shadow-lg'>
              <p className='font-semibold'>Top doctors on call</p>
              <p className='text-sm text-slate-700'>Book now for faster consultation and follow-up care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header