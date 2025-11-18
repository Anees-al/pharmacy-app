import React from 'react'
import { babyCareProducts } from '../assets/db'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

const Babecare = () => {
  const [products,setProducts]=useState([]);


  useEffect(()=>{
    const fetchProducts=async()=>{
    try {
      const res=await axios.get(`http://localhost:3000/api/product/getproductbycategory/personal%20care`);
      
      setProducts(res.data.product||[])
      
    }catch(error){
          alert(error)
    }
  }
  fetchProducts()
},[])
  return (
    <div className='flex flex-col gap-3 p-10'>
          <h1 className='text-3xl font-bold text-[#0077B6] mb-10'>Baby Care</h1>
          <div className='flex flex-row gap-4'>
            {products.slice(0, 5).map((item,index)=>(
                <div className='flex flex-col justify-start border-2 p-4 border-gray-100 rounded-lg gap-3 h-[400px] 'key={index}>
                 <div className='flex justify-center'>
                   <img src='' alt=""  className='flex w-20 min-h-22 '/>
    
                 </div>
                 <p className='text-lg font-semibold '>{item.productName}</p>
                 <p className='text-xs font-semibold text-gray-500'>{item.productDescription}</p>
                 <p className='text-xl font-semibold'>₹ {item.price}</p>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-1 cursor-pointer font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transition-all duration-300">
            Buy Now
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white mt-2 cursor-pointer font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 hover:shadow-lg transition-all duration-300">
  Add to Cart
</button>

                </div>
            ))}
          </div>
        </div>
  )
}

export default Babecare
