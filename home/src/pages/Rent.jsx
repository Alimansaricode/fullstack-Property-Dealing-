import React from 'react'
import buys from '../Buys'
import { Link } from 'react-router-dom'

function Rent() {
  return (
    <div>
     
    <div className='max-h-full bg-gray-100 '>
      <h1 className='text-3xl font-bold text-center py-20 '>Rent In Noida</h1>
      <div className='flex flex-wrap gap-6  justify-center '>
        {buys.slice(0, 9).map((item) => (
          <div key={item.id} className='w-[330px] h-[380px] mx-1 border rounded-lg my-2 bg-white shadow-md overflow-hidden shadow-black/70'>
<div className='w-full h-[60%] overflow-hidden px-2 py-2'>
<img src={item.image} className='w-full h-full object-cover' alt="" />
</div>

<div className='w-full h-[40%] px-2 gap-7'>
<p className='text-sm font-normal px-4'>{item.title}</p>

<p className='text-xl font-bold px-4 py-1'> {item.price}</p>
<p className='text-sm font-light px-4'>{item.location} </p>
<button className='bg-[#338584] hover:bg-[#006766] text-white px-5 py-2 mx-4 my-6 rounded-md'><Link to="/about">Rent</Link></button>
</div>
        </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Rent
