import React from 'react'

const Button = ({children="Button",theme="one",icon=null}) => {
    if (theme==="one")
    
  return (
    
      <button className=" onClick={onClick} bg-red-600 hover:bg-yellow-50  hover:text-black scale-125 gap-4 flex  text-2xl px-6 py-2  p-3 font-medium mt-3 flex items-center gap-2 text-bold text-white ">
        {icon}
         {children}
        </button>
  )
   if (theme==="two")
    
  return (
    
      <button className=" onClick={onClick} bg-yellow-600 text-2xl px-6 py-2 hover:bg-yellow-500 active:bg-red-500 p-3 font-medium mt-3 flex items-center gap-2 text-bold text-white rounded-2xl">
        {icon}
         {children}
        </button>
  ) 
  if (theme==="three")
    
  return (
    
      <button className=" onClick={onClick}          bg-red-600 text-2xl px-6 py-2  p-3 font-medium mt-3 flex items-center gap-2 text-bold text-white rounded-2xl">
            {icon}
         {children}
        </button>
  )
   if (theme==="five")
    
  return (
    
      <button className=" bg-blue-600 text-2xl px-6 py-2  p-3 font-medium mt-3 flex items-center gap-2 text-bold text-white rounded-2xl">
       {icon}
         {children}
        </button>
  )
   if (theme==="four")
    
  return (
    
      <button className=" bg-pink-600 text-2xl px-6 py-2  p-3 font-medium mt-3 flex items-center gap-2 text-bold text-white rounded-2xl">
         {children}
        </button>
  ) 
    return (
    
      <button className=" bg-blue-600 text-2xl px-6 py-2  p-3 font-medium mt-3  hover:bg-blue-200 active:bg-amber-950 transition duration-300 hover:scale-105 active:scale-90  flex items-center gap-2 text-bold text-white ">
         {children}
        </button>
  )
}

export default Button
