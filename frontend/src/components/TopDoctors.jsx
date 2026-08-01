import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <section className='my-8 rounded-[28px] border border-slate-200/80 bg-white/80 px-4 py-10 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:px-6 lg:px-8 lg:py-12'>
      <div className='flex flex-col items-center gap-3 text-center'>
        <p className='rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700'>Top rated doctors</p>
        <h1 className='text-3xl font-semibold text-slate-900'>Top Doctors to Book</h1>
        <p className='max-w-2xl text-sm leading-7 text-slate-600'>Simply browse through our extensive list of trusted doctors and secure your next visit in minutes.</p>
      </div>

      <div className='mt-8 grid grid-cols-1 gap-6 px-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {doctors.slice(0, 8).map((item, index) => (
          <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='cursor-pointer overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_16px_38px_-24px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-20px_rgba(2,132,199,0.34)]' key={index}>
            <div className='flex h-56 items-center justify-center bg-gradient-to-br from-sky-50 to-cyan-50 p-6'>
              <img className='h-44 object-contain' src={item.image} alt={item.name} />
            </div>

            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm'>
                <span className='inline-block h-2.5 w-2.5 rounded-full bg-emerald-500'></span>
                <span className='font-medium text-emerald-600'>Available</span>
              </div>

              <p className='mt-2 text-lg font-semibold text-slate-900'>{item.name}</p>
              <p className='mt-1 text-sm text-slate-600'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-8 flex justify-center'>
        <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-8 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition-all duration-200 hover:scale-105 cursor-pointer'>See More</button>
      </div>
    </section>
  )
}

export default TopDoctors