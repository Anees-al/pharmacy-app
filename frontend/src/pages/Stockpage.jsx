import axios from 'axios';
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { FaHome,FaUser } from 'react-icons/fa';
import { MdInventory } from 'react-icons/md';
import { RiBillFill } from 'react-icons/ri';

const Stockpage = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const res =await axios.get('http://localhost:3000/api/product/getallproducts');
                setProducts(res.data.allproducts)
            } catch (error) {
                alert(error)
            }
        }
        fetchdata();
    },[])
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between p-2 bg-gray-800 px-7'>
                          <img src={logo} alt="" className='w-10 bg-white rounded-lg' />
                      
                      <h1 className='text-xl font-semibold cutive-mono-regular text-white'>Medicore Admin</h1>
                     
                      </div>
                       <hr className='border border-gray-400'/>
              <div className='flex flex-row'>
                        <div className='flex flex-col w-1/6 min-h-screen bg-gray-800'>
                   <div className='flex flex-row p-5 '>
                      <p className='text-white cutive-mono-regular text-lg cursor-pointer'>Dashboard</p>
                      <FaHome className='text-white ml-1' size={22}/>
                   </div>
      
                   <h1 className='text-2xl cutive-mono-regular font-bold text-white ml-5 mt-10 mb-5'>Admin</h1>
                   <div className='flex flex-row  py-2 px-5  hover:bg-gray-500 cursor-pointer'>
                       <FaUser className='text-white ml-1' size={22}/>
                      <p className='text-white cutive-mono-regular text-lg cursor-pointer ml-2'>Users</p>
                     
                   </div>
                   <div className='flex flex-row  py-2 px-5 '>
                       <MdInventory className='text-white ml-1' size={22}/>
                      <p className='text-white cutive-mono-regular text-lg cursor-pointer ml-2'>Stocks</p>
                     
                   </div>
                   <div className='flex flex-row  py-2 px-5 '>
                       <RiBillFill className='text-white ml-1' size={22}/>
                      <p className='text-white cutive-mono-regular text-lg cursor-pointer ml-2'>Billing</p>
                     
                   </div>
                  </div>
                 <div className='flex flex-col bg-gray-500 w-full text-white '>
                    <h1 className='text-2xl font-semibold mt-10 ml-6'>Total no of Products:{products.length}</h1>
                
                {products.map((product,index)=>(
                    <div className='flex flex-col border px-6 py-2 w-[500px] ml-6 mt-10 rounded-lg bg-gradient-to-r from-blue-800 to-sky-400 font-bold' key={index}>
                        <p>Product Name: <span className='font-normal'>{product.productName}</span></p>
                        <p>Prouduct Description: <span className='font-normal text-sm'>{product.productDescription}</span> </p>
                        <p>Product Code:<span className='font-normal'>{product.productCode}</span></p>
                        <p>Prize: <span className='font-normal'>{product.price}</span></p>
                        <p>Product Category:<span className='font-normal'>{product.category}</span></p>
                        <p>Product Brand:<span className='font-normal'>{product.brand}</span></p>
                        <p>Product created at: <span className='text-sm bg-white text-blue-500 px-4 py-1 rounded-lg'>{new Date(product.createdAt).toLocaleString()}</span></p>
                        <p className='mt-4'>Product updated at: <span className='text-sm bg-white text-blue-500 px-4 py-1 rounded-lg'>{new Date(product.updatedAt).toLocaleString()}</span></p>
                        <div className='flex flex-row gap-3 mt-6'>
                        <button className='bg-red-600 px-4 p-1 rounded-lg'>Delete</button>
                        <button className='bg-green-600 px-4 p-1 rounded-lg'>update</button>
                        </div>
                    </div>
                ))}
              </div>
                
              </div>
              
      
    </div>
  )
}

export default Stockpage
