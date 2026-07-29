import React from 'react'
import imagee2 from '../assets/imagee2.png'
import imagee3 from '../assets/imagee1.png'
import imagee1 from '../assets/imagee3.png'
import { Link } from 'react-router-dom'

function main3() {
  return (

    <div className='w-full h-screenflex items-center justify-start flex max-lg:flex-col gap-10 px-10 py-10'>
      <div className='  flex flex-col justify-center items-center gap-2 overflow-auto px-10 py-2 rounded-lg  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
<img
                src={imagee2} className='w-auto h-auto object-cover px-5'
                alt= ""
               
              />
              <h3 className='text-xl flex justify-center font-bold'>Buy</h3>
              <p className='text-base font-light'> With over 100K+ new and resale properties across India, let us help you get you the right property at the right price</p>
              <button className='bg-[#338584] hover:bg-[#006766] text-white px-2 py-2 rounded-md'><Link to="/buy">Properties for sale</Link></button>
      </div>

       <div className='  flex flex-col justify-center items-center gap-2 overflow-auto px-10 py-2 rounded-lg  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
<img
                src={imagee1} className='w-auto h-auto object-cover px-5'
                alt= ""
               
              />
              <h3 className='text-xl flex justify-center font-bold'>Rent</h3>
              <p className='text-base font-light'>PropertyWala can help you easily find a home or office for rent that you'll love from our large database of broker and owner listings.</p>
              <button className='bg-[#338584] hover:bg-[#006766] text-white px-2 py-2 rounded-md'><Link to="/rent">Properties for Rent</Link></button>
      </div>
       <div className='  flex flex-col justify-center items-center gap-2 overflow-auto px-10 py-2 rounded-lg  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
<img
                src={imagee3} className='w-auto h-auto object-cover px-5'
                alt= ""
               
              />
              <h3 className='text-xl flex justify-center font-bold'>Advertise</h3>
              <p className='text-base font-light'> Advertise your property on PropertyWala and sell or rent it in no time. Advertising your property on PropertyWala is fast and free!</p>
              <button className='bg-[#338584] hover:bg-[#006766] text-white px-2 py-2 rounded-md'><Link to="/buy">Properties for Free</Link></button>
      </div>

       


      
    </div>
  ) 
}

export default main3
