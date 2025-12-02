import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'

const Nav = () => {
    const [hover,setHover]=useState(null);
    const [hover2,setHover2]=useState(null)
    const navItems= ["Buy Medicine", "Find Doctor", "Lab Tests", "Health Records"];
    const navItems2=["Products","Baby Care","Supplements","Women Care","Personal Care","Health Devices"]
    const navigate=useNavigate()
  return (
    <div className='flex flex-col w-full ' >
      <div className='flex flex-row justify-between p-2 '>
        
            <img src={logo} alt="" className='w-10 ml-10 cursor-pointer'  onClick={()=>navigate('/')} />

        <div className=' flex flex-row mr-10 gap-5'>
            <BiSolidOffer size={24} className='mt-2 cursor-pointer'/>
            <MdOutlineShoppingCart size={24} className='mt-2 cursor-pointer' onClick={()=>navigate('/cart')}/>
            <button className=' flex flex-row justify-between py-2 px-4 border w-26 rounded-lg text-[#0077B6] font-semibold cursor-pointer hover:text-white hover:bg-[#0077B6] ' onClick={()=>navigate('/Login')}><p>Login</p> <p className='mt-1 '><CgProfile size={20} /></p></button>
        </div>

      </div>
      <hr className='border-gray-200 border-t-2'/>
      <div className='flex flex-row justify-center gap-6 text-sm font-semibold p-2'>
       {navItems.map((navItems,index)=>(
        <div key={index} className='relative cursor-pointer' onMouseEnter={()=>setHover(index)}  onMouseLeave={()=>setHover(null)}>
            <p className={`transition-colors duration-300 ${hover === index ? "text-[#0077B6]" : "text-black"}`}>{navItems}</p>
            {hover === index && (
              <motion.div
                layoutId="underline"
                className="absolute left-2 bottom-[-4px]  h-[2px] bg-[#0077B6] "
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
        </div>
       ))}
       
      </div>
      <div className='flex flex-row justify-center gap-8 text-sm text-white font-semibold p-2 bg-[#0077B6]'>
        {navItems2.map((navItems,index)=>(
            <div key={index} className='relative cursor-pointer' onMouseEnter={()=>setHover2(index)}  onMouseLeave={()=>setHover2(null)}>
                <p>{navItems}</p>
                {hover2 === index && (
              <motion.div
                layoutId="underline"
                className="absolute left-2 bottom-[-4px]  h-[2px] bg-white "
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Nav
