import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm text-gray-600'>Simply browse through our extensive list of trusted doctors.</p>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8 px-3 sm:px-0'>
            {doctors.slice(0,8).map((item,index)=>(
                <div onClick={()=> navigate(`/appointment/${item._id}`)} className='bg-white border border-blue-100 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 shadow-sm' key={index}>
                   <div className='bg-indigo-50 flex items-center justify-center h-56 p-6'>
                     <img className='object-contain h-44' src={item.image} alt={item.name} />
                   </div>

                   <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm'>
                        <span className='w-2 h-2 bg-green-500 rounded-full inline-block'></span>
                        <span className='text-green-600 font-medium'>Available</span>
                    </div>

                    <p className='mt-2 text-lg font-semibold text-gray-900'>{item.name}</p>
                    <p className='mt-1 text-sm text-gray-600'>{item.speciality}</p>
                   </div>

                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='mt-8 px-12 py-2 bg-indigo-400 text-white rounded-full shadow-sm'>See More</button>
        </div>
  )
}

export default TopDoctors