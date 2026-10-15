import React from 'react'
import Button from './Button'
const desc = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."

const Card = ({title="Default Title", description= desc , extra}) => {
  return (
    <div className=" rounded-lg p-6 shadow-lg bg-white py-12   ">
      <h1 className='text-2xl font-bold '> {title}</h1>
      <p className='text-black/70 mt-1 '> {description}</p>
      {
        extra && <div className="mt-3">
          {extra}
        </div>
      }
    </div>
  )
}

export default Card
