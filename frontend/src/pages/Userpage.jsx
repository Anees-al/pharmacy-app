import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

import { FaHome } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'
import { MdInventory } from 'react-icons/md'
import { RiBillFill } from 'react-icons/ri'
import axios from 'axios'

const Userpage = () => {
    const [users,setusers]=useState([]);


    useEffect(()=>{
   const fetchusers=async()=>{
    try {
        const res=await axios.get('http://localhost:3000/api/user/getallusers')
        setusers(res.data.users);
    } catch (error) {
        alert(error)
    }
   }
   fetchusers()
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

          <div className='flex flex-col p-10 bg-gray-400 w-full'>
            <h1 className='text-2xl font-bold text-blue-700'>Total current Users: {users.length}</h1>
         {users.map((user,index)=>(
            <div key={index} className='p-3 rounded-lg border-2 border-blue-400 mt-4 w-[700px] bg-gradient-to-r from-blue-800 to-sky-600 text-white font-bold'><p>
                Name of User: <span className='font-normal text-sm'>{user.username}</span></p>
                <p>Email of user: <span className='font-normal text-sm'> {user.email}</span></p>
                <p>User created at: <span className='font-normal text-sm p-1 bg-white text-blue-500 rounded-lg px-4'>{new Date(user.createdAt).toLocaleString()}</span></p></div> 
         ))}
          </div>
        </div>
      
    </div>
  )
}

export default Userpage
