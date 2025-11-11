import React from 'react'
import { brand } from '../assets/db'


const ShopbyBrands = () => {
  return (
    <div className='flex flex-col px-10 py-4 gap-5 '>
      <h1 className='text-2xl font-bold text-[#0077B6]'>Shop by brands</h1>
      <div className='flex flex-row gap-5'>
      {brand.map((b,index)=>(
        
        <div key={index} className='flex p-5 justify-center border-2 border-gray-300 cursor-pointer hover:border-[#0077B6] rounded-lg p-6 w-[150px] mt-10 h-[140px] items-center'>
            <img src={b.img} alt="" className='w-22' />
        </div>
      ))}
      </div>
    </div>
  )
}

export default ShopbyBrands
