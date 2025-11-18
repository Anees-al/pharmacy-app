import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import { IoCartSharp } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'



const Admin = () => {

const [users,setusers]=useState([])
const[products,setproducts]=useState([])
const navigate=useNavigate()

useEffect(()=>{
const fetchusers=async()=>{
  try {
const [userres,productres]=await Promise.all([
  axios.get('http://localhost:3000/api/user/getallusers'),
  axios.get('http://localhost:3000/api/product/getallproducts')
])

setusers(userres.data.users||[]);
setproducts(productres.data.allproducts||[])

  } catch (error) {
    alert(error)
  }
}
fetchusers();
},[])
  return (
    <div className='flex flex-col  '>
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
                 <RiBillFill className='text-white ml-1' size={22}/>
                <p className='text-white cutive-mono-regular text-lg cursor-pointer ml-2'>Billing</p>
               
             </div>
            </div>


            <div className='grid grid-cols-3 gap-2 p-5'>
                <div className='flex flex-col  h-[200px] w-[350px] bg-gradient-to-r from-blue-500 to-sky-400 rounded-md'>
                  <div className='flex flex-row p-4 justify-between flex-1'>
                    <div className='flex flex-col justify-between '>
                        <p className='text-7xl text-white font-semibold'>{users.length}</p>
                        <p className='text-2xl text-white font-semibold mt-6'>Users</p>
                    </div>
                    <FaUsers size={90} className='text-gray-600 mt-5'/>
                  </div>
                  <button className='bg-blue-600 text-white text-lg font-semibold p-2 rounded-b-lg cursor-pointer hover:bg-blue-800' onClick={()=>navigate('/users')}>More info</button>
              </div>

              <div className='flex flex-col  h-[200px] w-[350px] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-md ml-6'>
                  <div className='flex flex-row p-4 justify-between flex-1'>
                    <div className='flex flex-col justify-between '>
                        <p className='text-7xl text-white font-semibold'>{products.length}</p>
                        <p className='text-2xl text-white font-semibold mt-6'>Stocks</p>
                    </div>
                    <MdInventory size={90} className='text-gray-600 mt-5'/>
                  </div>
                  <button className='bg-green-600 text-white text-lg font-semibold p-2 rounded-b-lg cursor-pointer hover:bg-green-800'>More info</button>
              </div>


              <div className='flex flex-col  h-[200px] w-[350px] bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-md ml-6'>
                  <div className='flex flex-row p-4 justify-between flex-1'>
                    <div className='flex flex-col justify-between '>
                        <p className='text-7xl text-white font-semibold'>10</p>
                        <p className='text-2xl text-white font-semibold mt-6'>Orders</p>
                    </div>
                    <IoCartSharp size={90} className='text-gray-600 mt-5'/>
                  </div>
                  <button className='bg-yellow-600 text-white text-lg font-semibold p-2 rounded-b-lg cursor-pointer hover:bg-yellow-800'>More info</button>
              </div>


              <div className='flex flex-col  h-[200px] w-[350px] bg-gradient-to-r from-red-700 to-red-400 rounded-md mt-[-200px]'>
                  <div className='flex flex-row p-4 justify-between flex-1'>
                    <div className='flex flex-col justify-between '>
                        <p className='text-7xl text-white font-semibold'>10</p>
                        <p className='text-2xl text-white font-semibold mt-6'>Reports</p>
                    </div>
                    <IoCartSharp size={90} className='text-gray-600 mt-5'/>
                  </div>
                  <button className='bg-red-600 text-white text-lg font-semibold p-2 rounded-b-lg cursor-pointer hover:bg-red-800'>More info</button>
              </div>
            </div>

        </div>
      
    </div>
  )
}

export default Admin
