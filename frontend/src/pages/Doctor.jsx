import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import doctor from '../assets/doctor-hero.jpg'
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import cardiology from '../assets/cardiology.jpg'
import ent from '../assets/ent.jpg'
import dermatology from '../assets/dermatology.jpg'
import nuerology from '../assets/nuerology.jpg'
import  general from '../assets/general.jpg'
const Doctor = () => {
  return (
    <div className='flex flex-col'>
        <Nav/>
    <div style={{backgroundImage:`url(${doctor})`,backgroundSize:"cover"}} className=' relative w-full h-[500px] p-10 '>
        <div className="absolute inset-0 bg-black/50"></div>

         <p className=' relative text-4xl font-black text-white text-center mt-20 leading-relaxed'>
            Experience a smarter way to access quality healthcare — find leading doctors, explore medical services, and book confirmed appointments with complete confidence
         </p>


         
    </div>

      <div className='flex flex-col p-10'>
             <div className='flex flex-row w-full h-[100px] border border-gray-200 rounded-lg shadow-md shadow-gray-300 hover:shadow-lg px-10 py-5 gap-10 items-center justify-center'>
                 <div className='flex flex-col items-center gap-2 cursor-pointer'>
                   <p className='text-center p-3 rounded-full bg-orange-500'> <TbBrandBooking  size={20} color='white'/></p>
                   <p className='text-sm font-semibold text-gray-600'>Book an appointments</p>

                 </div>
                 <div  className='flex flex-col items-center gap-2 cursor-pointer'>
                    <p className='text-center p-3 rounded-full bg-red-500'><FaUserDoctor size={20} color='white'/></p>
                    <p className='text-sm font-semibold text-gray-600'>Talk to doctors</p>
                 </div>
                 <div  className='flex flex-col items-center gap-2 cursor-pointer'>
                  <p className='text-center p-3 rounded-full bg-purple-500'><FaRegHospital size={20} color='white' /></p>  
                    <p className='text-sm font-semibold text-gray-600'>Hospital and clinics</p>
                 </div>
                 <div  className='flex flex-col items-center gap-2 cursor-pointer'>
                  <p className='text-center p-3 rounded-full bg-green-500'><MdOutlineHealthAndSafety size={20} color='white'/></p>  
                  <p className='text-sm font-semibold text-gray-600'>Health care</p>
                 </div>
                 
             </div>
         </div>


         <div className='flex flex-col items-center mb-20'>
            <p className='text-white font-semibold px-4 py-1 bg-[#00BFFF] rounded-lg'>Top specialities</p>
            <p className='text-3xl font-bold text-gray-600 mt-5'>Highlight the Care and Support</p>

            <div className='flex flex-row gap-10 mt-6'>
                <div className='flex p-4 border border-gray-100 h-[200px] w-[150px]  rounded-lg items-center justify-center  shadow-gray-500 hover:shadow-lg cursor-pointer' style={{backgroundImage:`url(${cardiology})`,backgroundSize:'cover' ,backgroundPosition:'center'}}>
                    <p className='text-sm font-bold text-white'>Cardiology</p>
                </div>
                <div  className='flex p-4 border border-gray-100 h-[200px] w-[150px]  rounded-lg items-center justify-center  shadow-gray-500 hover:shadow-lg cursor-pointer' style={{backgroundImage:`url(${ent})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                    <p className='text-sm font-bold text-white'>ENT</p>
                </div>
                <div  className='flex p-4 border border-gray-100 h-[200px] w-[150px]  rounded-lg items-center justify-center  shadow-gray-500 hover:shadow-lg cursor-pointer' style={{backgroundImage:`url(${dermatology})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                    <p className='text-sm font-bold text-white'>Dermatology</p>
                </div>
                <div  className='flex p-4 border border-gray-100 h-[200px] w-[150px]  rounded-lg items-center justify-center  shadow-gray-500 hover:shadow-lg cursor-pointer' style={{backgroundImage:`url(${nuerology})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                  <p className='text-sm font-bold text-white'>Nuerology</p>
                </div>
                <div  className='flex p-4 border border-gray-100 h-[200px] w-[150px]  rounded-lg items-center justify-center  shadow-gray-500 hover:shadow-lg cursor-pointer' style={{backgroundImage:`url(${general})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                    <p className='text-sm font-bold text-white'>General medicine</p>
                </div>
            </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Doctor
