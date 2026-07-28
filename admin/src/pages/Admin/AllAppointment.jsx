import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'

const AllAppointment = () => {

 const {aToken , appointments, getAllAppointments} = useContext(AdminContext)
 useEffect (() => {
  if(aToken){
    getAllAppointments()
  }
 },[aToken])


  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>
        All Appointments
      </p>
      <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>
        <div>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
      </div>
    </div>
  )
}

export default AllAppointment