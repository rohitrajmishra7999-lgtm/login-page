import { LogIn, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup   = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='h-screen bg-linear-to-t from-red-500 to-indigo-500 flex flex-col items-center justify-center '>
<div className='w-32 h-32 bg-blue-300 flex items-center justify-center rounded-full animate__animated animate__slideInDown'>
        <User className='w-16 h-16 text-ehite'/>
</div> 

        <h1 className='text-6xl text-amber-50 font-bold animate__animated animate__fadeIn'> Sign Up</h1>
        <p className='text-white/70 text-center p-12 animate__animated animate__fadeIn '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam facere consequatur eius quidem dolorem, blanditiis quibusdam non expedita nam error natus culpa voluptas ad molestias est vel incidunt accusantium?
        </p>
</div>
<div className='flex items-center justify-center flex-col'>
  < form className='w-lg flex flex-col gap-4'>
   <input 
    name='fullname'
    placeholder='FullName'
    className='border-b border-b-gray-300 py-3 focus:outline-none  focus:border-b-blue-500 focus:border-b-2  focus:placeholder-blue-600 focus:font-medium'
   required
   />
    <input 
    name='email'
    placeholder='email id'
    className='border-b border-b-gray-300 py-3 focus:outline-none  focus:border-b-blue-500 focus:border-b-2  focus:placeholder-blue-600 focus:font-medium'
   required
   />
    <input 
    name='password'
    type='password'
    placeholder='password'
    className='border-b border-b-gray-300 py-3 focus:outline-none  focus:border-b-blue-500 focus:border-b-2  focus:placeholder-blue-600 focus:font-medium'
   required
   />

   <button className='bg-linear-to-r from-sky-600 to bg-indigo-400 text-white font-medium py-3 rounded-lg'>
    Sign up
   </button>
  </form>
  <div className='mt-3 text-black/60 '>
already have an account 
    <Link to="/Login" className='text-blue-400 font-medium hover:underline hover:text-blue-600'> 
    login
    </Link>
  </div>
</div>
<div>
      </div>
    </div>
  )
}

export default Signup
