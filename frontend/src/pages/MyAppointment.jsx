import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const MyAppointment = () => {

  const { backendUrl, token, getDoctorsData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])

  const months = ["", "Jan", "Feb", "mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]


  const slotDateFormat = (slotDate) => {
    if (!slotDate || typeof slotDate !== 'string') return ''
    const dateArray = slotDate.split('_')
    if (!Array.isArray(dateArray) || dateArray.length < 3) return slotDate
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const navigate = useNavigate()

  const renderValue = (v) => {
    if (v === null || v === undefined) return ''
    if (typeof v === 'object') return JSON.stringify(v)
    return v
  }

 

  const getUserAppointments = async () => {
    try {

      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)

    }
  }
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency:order.currency,
      name: "Appointment payment",
      description: "Appointment Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response)=> {
        console.log(response)

        try{
          const { data } = await axios.post(backendUrl + '/api/user/verify-razorpay',  response, { headers: { token } })
          if(data.success){
            //toast.success(data.message)
            getUserAppointments()
            navigate('/my-appointments')
          }
        }catch(error){
          console.log(error)
          toast.error(error.message)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const appointmentRazorPay = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })

      if (data.success) {
        initPay(data.order)
      } else {
        console.log('Payment order error:', data)
        toast.error(data.message || 'Unable to initiate payment')
      }
    } catch (error) {
      console.log('Payment request failed:', error)
      toast.error(error.message || 'Payment request failed')
    }
  }


  useEffect(() => {
    if (token) {
      getUserAppointments()

    }
  }, [token])

  return (
    <div>
      {/* CSS PROPERTY */}

      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'> My Appointment </p>
      <div>
        {appointments.map((item, index) => {
          console.log('appointment item:', item)
          const address = item?.docData?.address
          return (
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={item._id || index}>

              <div>
                <img className='w-32 bg-indigo-50' src={item?.docData?.image} alt="" />
              </div>
              <div className='felx-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{renderValue(item?.docData?.name)}</p>
                <p>{renderValue(item?.docData?.speciality)}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                {address ? (
                  Array.isArray(address) ? (
                    address.map((addr, i) => (
                      typeof addr === 'string' ? <p key={i} className='text-xs'>{renderValue(addr)}</p> : (
                        <div key={i}>
                          <p className='text-xs'>{renderValue(addr.line1)}</p>
                          <p className='text-xs'>{renderValue(addr.line2)}</p>
                        </div>
                      )
                    ))
                  ) : typeof address === 'string' ? (
                    <p className='text-xs'>{address}</p>
                  ) : (
                    <>
                      {address.line1 && <p className='text-xs'>{renderValue(address.line1)}</p>}
                      {address.line2 && <p className='text-xs'>{renderValue(address.line2)}</p>}
                    </>
                  )
                ) : (
                  <p className='text-xs'>No address</p>
                )}
                  <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium' >Date & Time:</span>{renderValue(slotDateFormat(item?.slotDate))} | {renderValue(item?.slotTime)}</p>
              </div>
              <div></div>
              <div className='pl-150 flex flex-col gap-5 justify-center'>
                {!item.cancelled && item.payment && <button className='sm-min-w-48 py-2 border rounded  text-stone-500 bg-indigo-50'>Paid</button>}
                {!item.cancelled && !item.payment && <button onClick={() => appointmentRazorPay(item._id)} className='text-sm text-stone-500 sm:min-w-48 py-2 border hover:bg-primary hover:text-blue-500 transition-all duration-300 cursor-pointer'>Pay Online</button>}
                {!item.cancelled && <button onClick={() => cancelAppointment(item._id)} className='text-sm text-stone-500 sm:min-w-48 py-2 border hover:bg-primary hover:text-blue-500 transition-all duration-300 cursor-pointer'>Cancel appointment</button>}
                {item.cancelled && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyAppointment