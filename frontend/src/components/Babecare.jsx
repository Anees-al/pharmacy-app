import React from 'react'
import { babyCareProducts } from '../assets/db'

const Babecare = () => {
  return (
    <div className='flex flex-col gap-3 p-10'>
          <h1 className='text-3xl font-bold text-[#0077B6] mb-10'>Baby Care</h1>
          <div className='flex flex-row gap-4'>
            {babyCareProducts.map((item,index)=>(
                <div className='flex flex-col justify-start border-2 p-4 border-gray-100 rounded-lg gap-3 h-[400px] 'key={index}>
                 <div className='flex justify-center'>
                   <img src={item.img} alt=""  className='flex w-20 min-h-22 '/>
    
                 </div>
                 <p className='text-lg font-semibold '>{item.productName}</p>
                 <p className='text-xs font-semibold text-gray-500'>{item.description}</p>
                 <p className='text-xl font-semibold'>₹ {item.price}</p>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-10 cursor-pointer font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transition-all duration-300">
            Buy Now
          </button>
                </div>
            ))}
          </div>
        </div>
  )
}

export default Babecare
