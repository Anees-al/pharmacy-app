import React from 'react'
import logo from '../assets/logo.png'
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='flex flex-col  bg-[#CAF0F8] px-10'>
    <div className='flex flex-row  py-5 gap-16 justify-center'>
      <div className='flex flex-col gap-2 '>
        <h1 className=' font-semibold mb-3'>About Pharmacy</h1>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>About Us</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>FAQs</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Find a Pharmacy</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Careers</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Blog</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Health Queries</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Corporate</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Pharmacy sitemap</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Pharmacy Membership</p>

      </div>
      <div className='flex flex-col gap-2'>
        <h1 className=' font-semibold mb-3'>Services</h1>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Consult Physician</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Insurance</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Pro Health Program</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>All Doctors List</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Blog</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Parenting Guide</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Weight Management</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Credit Card</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Home Delivery</p>

      </div>
      <div className='flex flex-col gap-2'>
        <h1 className=' font-semibold mb-3'>Product Categories</h1>
         <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>View All Categories</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>View All Brands</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>View All Salts</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>View All Medicine</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>View All OTC</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Health Devices</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Personal Care</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Baby Care</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Skin Care</p>

      </div>
      <div className='flex flex-col gap-2'>
        <h1 className=' font-semibold mb-3 '>Book tests</h1>
         <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>RT PCR Test</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Book Lab Test</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Renal Profile</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Hemogram Test</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Lipid Profile Test</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Thyroid Profile Test</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>D Dimer Test</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>Urine Culture Test</p>
        <p className='text-xs font-semibold text-gray-600 ml-4 cursor-pointer hover:text-gray-800'>CBC Test</p>

      </div>
      
   
    </div>
     <div className="w-full h-[1px] bg-gray-500 my-4"></div>

     <div className='flex flex-row justify-between px-20 '>
      <img src={logo} alt="" className='w-20 cursor-pointer'/>
      <div className='flex flex-row gap-4 mt-10'>
       <FaInstagram className='cursor-pointer' size={20} color='#E4405F'/>
       <FaWhatsapp className='cursor-pointer' size={20} color='#25D366'/>
       <FaXTwitter className='cursor-pointer' size={20} color='#000000'/>
       <BiLogoGmail className='cursor-pointer' size={20} color='#EA4335'/>
      </div>
     </div>
      <div className="w-full h-[1px] bg-gray-500 my-4"></div>
      <div className='flex justify-center text-sm p-2 font-semibold text-gray-600'>
        <p>© 2025 Medicore Pharmacy. All rights reserved.</p>
      </div>
    </div>
     
  )
}

export default Footer
