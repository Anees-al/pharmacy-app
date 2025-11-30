import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaHome, FaUsers } from 'react-icons/fa'
import { MdInventory } from 'react-icons/md'
import { RiBilibiliFill } from 'react-icons/ri'
import axios from 'axios'
import { brand } from '../assets/db'

const AddStocks = () => {
    const [formdata,setFormdata]=useState({
        name:"",
        description:"",
        code:"",
        price:"",
        category:"",
        brand:""
    })


  const handleInputChange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }


  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
        const res=await axios.post('http://localhost:3000/api/product/createstock',formdata);
        setFormdata({
             name:"",
        description:"",
        code:"",
        price:"",
        category:"",
        brand:""
        })
        

        
    } catch (error) {
        alert(error)
    }
  }
    
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
                                   <FaUsers className='text-white ml-1' size={22}/>
                                  <p className='text-white cutive-mono-regular text-lg cursor-pointer ml-2'>Users</p>
                                 
                               </div>
                               <div className='flex flex-row  py-2 px-5 '>
                                   <MdInventory className='text-white ml-1' size={22}/>
                                  <p className='text-white cutive-mono-regular text-lg cursor-pointer ml-2'>Stocks</p>
                                 
                               </div>
                               <div className='flex flex-row  py-2 px-5 '>
                                   <RiBilibiliFill className='text-white ml-1' size={22}/>
                                  <p className='text-white cutive-mono-regular text-lg cursor-pointer ml-2'>Billing</p>
                                 
                               </div>
                              </div>
                              <div className="flex justify-center items-center h-screen ml-20">
  <form className="flex flex-col border rounded-lg border-black w-[400px] h-[550px] p-6" onSubmit={handleSubmit}>
    <h1 className="text-2xl font-bold mb-10">Create stocks</h1>

    <div className="grid grid-cols-2 gap-2 items-center">
      <label className="text-lg font-semibold">Name:</label>
      <input type="text" className="border p-2 rounded-lg" name='name' value={formdata.name} onChange={handleInputChange} />
    </div>

    <div className="grid grid-cols-2 gap-2 items-center mt-4">
      <label className="text-lg font-semibold">Description:</label>
      <input type="text" className="border p-2 rounded-lg" name='description' value={formdata.description} onChange={handleInputChange} />
    </div>
     <div className="grid grid-cols-2 gap-2 items-center mt-4">
      <label className="text-lg font-semibold">Code:</label>
      <input type="text" className="border p-2 rounded-lg" name='code' value={formdata.code} onChange={handleInputChange}/>
    </div>
     <div className="grid grid-cols-2 gap-2 items-center mt-4">
      <label className="text-lg font-semibold">Price:</label>
      <input type="text" className="border p-2 rounded-lg" name='price' value={formdata.price} onChange={handleInputChange} />
    </div>
     <div className="grid grid-cols-2 gap-2 items-center mt-4">
      <label className="text-lg font-semibold">Category:</label>
      <input type="text" className="border p-2 rounded-lg" name='category' value={formdata.category} onChange={handleInputChange} />
    </div>
     <div className="grid grid-cols-2 gap-2 items-center mt-4">
      <label className="text-lg font-semibold">Brand:</label>
      <input type="text" className="border p-2 rounded-lg" name='brand' value={formdata.brand} onChange={handleInputChange} />
    </div>

    <button className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold cursor-pointer hover:bg-blue-800'>Submit</button>
  </form>
</div>

                  
               </div>
    </div>
  )
}

export default AddStocks
