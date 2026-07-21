import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink  } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

const navigate = useNavigate();
const [showMenu, setShowMenu] = useState(false);
const [token , setToken] = useState(true);
  return (
    // 1. Changed bg-white to bg-blue-50 for a nice light blue background.
    // 2. Changed px-4 to px-8, and sm:px-10 to sm:px-[10%] to push the sides inward.
    <div className='flex items-center justify-between w-full px-8 sm:px-[10%] py-4 mb-5 border-b border-blue-200 bg-sky-50'>
      
      {/* LEFT: Logo */}
      <img src={assets.logo} alt="MediCare" className='h-12 w-auto cursor-pointer' />
      
      {/* CENTER: Navigation Links */}
      <ul className='hidden md:flex items-center gap-6 font-medium text-gray-700'>
        <NavLink to='/'>
        {({ isActive }) => (
          <div className="flex flex-col items-center">
          <li className='py-1'>HOME</li>
          <hr className={`border-none outline-none not-visited:h-0.5 bg-blue-500 w-3/5 m-auto ${isActive ? 'block' : 'hidden'}`} />
        </div>
        )}
          </NavLink>
      
        <NavLink to='/doctors'>
        {({ isActive }) => (
          <div className="flex flex-col items-center">
          <li className='py-1'>ALL DOCTORS</li>
          <hr className={`border-none outline-none not-visited:h-0.5 bg-blue-500 w-3/5 m-auto ${isActive ? 'block' : 'hidden'}`} />
          </div>
        )}
        </NavLink>
        
        <NavLink to='/about'>
        {({ isActive }) => (
          <div className="flex flex-col items-center">
          <li className='py-1'>ABOUT</li>
          <hr className={`border-none outline-none not-visited:h-0.5 bg-blue-500 w-3/5 m-auto ${isActive ? 'block' : 'hidden'}`} />
         </div>
        )}
        </NavLink>
        
        <NavLink to='/contact'>
        {({ isActive }) => (
          <div className="flex flex-col items-center">
          <li className='py-1'>CONTACT</li>
          <hr className={`border-none outline-none not-visited:h-0.5 bg-blue-500 w-3/5 m-auto ${isActive ? 'block' : 'hidden'}`} />
          </div>
        )}
        </NavLink>
      </ul>

      {/* RIGHT: Button */}
      <div className='flex items-center gap-4'>
        {
          token 
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} />
            <img className='w-2.5' src={assets.dropdown_icon} />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=> navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=> navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        :<button onClick={() => navigate('/login')} className='bg-green-500 text-white px-5 py-2.5 rounded-full hover:bg-green-600 transition-colors'>
          Create Account
        </button>
}
<img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
            {/* mobile menu */}
     <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
      <div className='flex items-center justify-between px-5 py-6'>
        <img className='w-40' src={assets.logo} alt="" />
        <img className='w-7' onClick={()=> setShowMenu(false)} src={assets.cross_icon} alt="" />
      </div>
      <ul className='ff flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
        <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
        <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
        <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
        <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
      </ul>
     </div>
      </div>      
    </div>
  )
}

export default Navbar