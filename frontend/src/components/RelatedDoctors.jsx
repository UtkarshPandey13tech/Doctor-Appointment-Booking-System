import React, { useContext, useEffect,useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {

  const {doctors} = useContext(AppContext)
  const navigate= useNavigate()

  const[relDoc,setRelDocs] = useState([]) 

  useEffect(()=>{
  if(doctors.length> 0 && speciality){
    const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
    setRelDocs(doctorsData)
  }
  },[doctors,speciality,docId])


  return (
<div className='my-12 flex flex-col items-center gap-4 text-gray-900 sm:my-16 dark:text-gray-100'>
        <h1 className='text-2xl font-medium sm:text-3xl'>Top Doctors to Book</h1>
        <p className='max-w-md px-4 text-center text-sm text-gray-600 sm:w-1/3 dark:text-gray-400'>Simply browse through our extensive list of trusted doctors.</p>

        <div className='grid w-full grid-cols-1 gap-6 px-1 pt-6 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4'>
            {relDoc.slice(0,5).map((item,index)=>(
                <div onClick={()=> {navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className='bg-white border border-blue-100 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 shadow-sm' key={index}>
                   <div className='flex h-48 items-center justify-center bg-indigo-50 p-4 sm:h-56 sm:p-6 dark:bg-slate-800'>
                     <img className='h-36 object-contain sm:h-44' src={item.image} alt={item.name} />
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

export default RelatedDoctors