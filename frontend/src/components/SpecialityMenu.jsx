import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <section className='rounded-[28px] border border-slate-200/80 bg-white/80 px-4 py-10 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:px-6 lg:px-8 lg:py-12' id='speciality'>
      <div className='flex flex-col items-center gap-3 text-center'>
        <p className='rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700'>Popular specialties</p>
        <h1 className='text-3xl font-semibold text-slate-900'>Find by Speciality</h1>
        <p className='max-w-2xl text-sm leading-7 text-slate-600'>Go through the list of trusted doctors and schedule your appointment hassle-free.</p>
      </div>

      <div className='mt-8 flex w-full gap-4 overflow-x-auto pb-2 sm:justify-center'>
        {specialityData.map((item, index) => (
          <Link onClick={() => scrollTo(0, 0)} className='flex min-w-[110px] flex-shrink-0 flex-col items-center rounded-2xl border border-slate-200 bg-slate-50/80 px-3 py-4 text-center text-xs text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50' key={index} to={`/doctors/${item.speciality}`}>
            <img className='mb-3 w-16 sm:w-20' src={item.image} alt={item.speciality} />
            <p className='font-medium'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SpecialityMenu