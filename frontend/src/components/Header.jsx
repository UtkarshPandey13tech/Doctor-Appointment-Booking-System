import React from 'react'
import {assets} from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <section className='relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-blue-400 px-6 py-12 md:px-10 lg:px-20 shadow-lg'>
      <div className='grid gap-8 lg:grid-cols-2 items-center'>
        {/* left column */}
        <div className='md:w-full flex flex-col items-start justify-center gap-6'>
          <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-snug'>
            Welcome to MediCare! <br /> Your trusted platform for healthcare services
          </p>

            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-28' src={assets.group_profiles} alt='Group Profiles'/>
            <p>
             Experience the convenience of booking appointments and <br className='hidden sm:block' /> staying connected with your healthcare providers
            </p>
          </div>

          <div className='flex items-center gap-6 mt-2'>
            <a onClick={() => scrollTo(0,0)} className='inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-md hover:scale-105 transition-transform' href='#speciality'>
              Book appointment
              <img className='w-4' src={assets.arrow_icon} alt='arrow' />
            </a>

          </div>
        </div>

        {/* right column */}
        <div className='md:w-full flex justify-end'>
          <div className='relative w-full max-w-md md:max-w-lg lg:max-w-xl'>
            <div className='rounded-xl overflow-hidden bg-white/10 p-4 shadow-2xl'>
              <img src={assets.header_img} alt='doctors' className='w-full h-auto object-cover rounded-lg' />
            </div>

            <div className='absolute left-6 bottom-6 rounded-2xl bg-white/95 px-4 py-3 shadow-lg text-slate-900'>
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