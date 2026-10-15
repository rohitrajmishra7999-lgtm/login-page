import { ArrowRight, Home , Bird} from 'lucide-react'
import React from 'react'
import { Link,Outlet } from 'react-router-dom'


const Layout = () => {
const menus = [
{
    label: "Home",
    link:'/home'
},
{
    label: "Courses",
    link:'/courses'
},
{
    label: "Tutorials",
    link:'/tutorials'
},
{
    label: "Contactus",
    link:'/contactus'
}
]


  return (

    <div>
      <nav className=' border-b border-b-slate-100 p-8  text-white bg-gray-300 flex items-center justify-around sticky top-0 left-0 z-[20] '>
        <div className='flex items-center gap-2'>
            <div className='bg-linear-to-t from-sky-500 to-indigo-500 rounded-2xl'>
            <Bird className=" w-11 h-11 text-black"/>
            </div>
            <div>
                <h1 className='text-blue-600 font-bold'>
                    Birdling
                </h1>
                <p className='text-sky-500 font-medium text-xs'>
                    making learning easier
                </p>
            </div>
        </div>
    <div className='flex items-center gap-8'>

    {
    menus.map((item,index )=>(
    <Link to ={item.link} className='text-black/70 font-bold hover:text-black '> {item.label}</Link>
    ))


    }
    </div> 
     <div className=' flex gap-7 items-center'>
        <Link to ="/login"  className='text-black/70 font-bold hover:text-black '> Login</Link>
        <Link  to ="/signup" className='bg-linear-to-t from-sky-500 to-indigo-500 flex items-center gap-2 font-medium text-white px-8 py-2.5 rounded-lg hover:scale-105 transition duration-300 active:scale-75'  >
        <ArrowRight className='w-4 h-4  '/> Signup </Link>

     </div>  
     </nav>
      <section >
        <Outlet/>
      </section>
      <footer className='h-125 text-white bg-linear-to-t from-sky-500 to-indigo-500 rounded-t-[100px] p-24 shadow-2xl'>
        <div className='grid grid-cols-4 gap-8'>
        <div> 
            <h1 className='text-xl font-bold text-white'>
                Birdling
            </h1>
            <p className='text-white/70 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab temporibus maxime provident consequatur nostrum omnis quibusdam illo natus facere distinctio quaerat quia possimus, culpa illum libero odit eveniet. Eos.</p>
        </div>
        <div> 
            <h1 className='text-xl font-bold text-white'>
                inquiry
            </h1>
            <p className='text-white/70 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab temporibus maxime provident consequatur nostrum omnis quibusdam illo natus facere distinctio quaerat quia possimus, culpa illum libero odit eveniet. Eos.</p>
        </div>
        <div> 
            <h1 className='text-xl font-bold text-white'>
                location
            </h1>
            <p className='text-white/70 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab temporibus maxime provident consequatur nostrum omnis quibusdam illo natus facere distinctio quaerat quia possimus, culpa illum libero odit eveniet. Eos.</p>
        </div>
        <div> 
            <h1 className='text-xl font-bold text-white'>
                about us
            </h1>
            <p className='text-white/70 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab temporibus maxime provident consequatur nostrum omnis quibusdam illo natus facere distinctio quaerat quia possimus, culpa illum libero odit eveniet. Eos.</p>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
