import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

 
  const {backendUrl , token , setToken} = useContext(AppContext)

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
       if (state === 'Sign up') {

        const {data} = await axios.post(backendUrl + '/api/user/register', {name , password , email})
        if(data.success){
          localStorage.setItem('token' , data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
        
       }else{


        const {data} = await axios.post(backendUrl + '/api/user/login', {password , email})
        if(data.success){
          localStorage.setItem('token' , data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
    

       }
    } catch (error) {

      toast.error(error.message)
      
    }


  }

  return (
    <form onSubmit={onSubmitHandler} className='flex min-h-[70vh] items-center px-2 py-8 sm:min-h-[80vh] sm:px-0'>
      <div className='m-auto flex w-full max-w-md flex-col items-start gap-3 rounded-xl border p-6 text-sm text-zinc-600 shadow-lg sm:min-w-96 sm:p-8 dark:border-slate-700 dark:text-zinc-300'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "Sign up" : "log in"} to book appointment</p>
        {
          state === "Sign Up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-b-black rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        }
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-b-black rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Password</p> 
          <input className='border border-b-black rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button type='submit' className='bg-blue-500 text-white w-full py-2 rounded-md text-based'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
            ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login