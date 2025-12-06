import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DoctorListing = () => {
  const{branch}=useParams();

  const [doctor,setDoctor]=useState([]);


  useEffect(()=>{
   const fetchDoctor=async()=>{
    try {
      const res=await axios.get(`http://localhost:3000/api/doctor/getdoctorbybranch/${branch}`);
      setDoctor(res.data.doctors);
    } catch (error) {
      console.error("Error fetching doctor:", error);
    }
   }

   fetchDoctor()
  }
 
  ,[branch])

  return (
    <div>
        <Nav/>
        <div className='flex flex-row'>
           <div className='flex flex-col w-1/6 p-6 h-auto border-r-2 border-gray-500'>

           </div>
           <div className='flex flex-col gap-10 w-3/4 p-10'>
            {doctor.map((doc)=>(
              <div key={doc._id} className='flex flex col justify-between'>
                <img src="" alt="" className='p-5 border border-gray-500 w-[150px]' />
                <div>
                  <p className='text-xl font-semibold tracking-wider'>{doc.doctorname}</p>
                  <p className='font-semibold text-gray-600'>{doc.branch}</p>
                  <div className='flex flex-row gap-3 font-semibold  text-gray-600 w-[500px]'>{doc.qualification.map((qualification,index)=>(
                    <p key={index}>{qualification}</p>
                  ))}</div>
                  <p className='font-semibold text-gray-500'>{doc.specialization}</p>
                  <p className='font-semibold text-gray-500'>{doc.experience} years of experience</p>
                  <p className='font-semibold text-gray-500'>{doc.clinic}</p>
                  <p className='font-semibold text-gray-500'>{doc.location}</p>
                </div>


                <button className='text-sm px-4 py-2 bg-blue-400 text-white font-semibold h-[40px] rounded-lg shadow-md hover:shadow-lg shadow-gray-400 hover:bg-blue-600 cursor-pointer'>Book appointment</button>
                
              </div>
              
            ))}
           </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default DoctorListing
