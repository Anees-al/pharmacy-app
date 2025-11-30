import React, { useState } from 'react'
import Nav from '../components/Nav'

const Labtest = () => {
    const category=[
        {id:1,name:'Bio chemistry',description:'Blood chemistry tests for organs & metabolism.',list:["Liver Function Test (LFT)","Kidney Function Test (KFT)","Lipid Profile","Blood Glucose","Thyroid Profile"]},
        {id:2,name:'Hematology',description:"Complete blood analysis & clotting studies."},
        {id:3,name:'Microbiology',description:'Infection detection through cultures & rapid tests.'},
        {id:4,name:'Immunology',description:'Autoimmune, allergy & inflammation markers.'},
        {id:5,name:'Pathology',description:'Tissue & cell analysis (biopsy, cytology).'},
        {id:6,name:'Radiology',description:'Imaging tests like X-ray, CT, MRI, Ultrasound.'}


    ]


    const [openCategory, setOpenCategory] = useState(null);


  return (
    <div className='flex flex-col h-auto'>
        <Nav/>

    <h1 className='mt-10 ml-20 text-4xl font-black'>Our Diagnostic Services</h1>
      <div>

        <div className='grid grid-cols-3 gap-6 mt-6 ml-10'>
           {
   
category.map((cat)=>(
    <div key={cat.id} className='flex flex-col border border-gray-500 p-4 cursor-pointer  rounded-lg hover:border-blue-600' onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
>
        <p className='text-xl font-semibold'>{cat.name}</p>
        <p>{cat.description}</p>
        {openCategory === cat.id && (
      <div className='flex flex-col mt-3'>
        {cat.list?.map((li, index) => (
          <p 
            key={index} 
            className='text-xs p-3 bg-gray-100 mb-1 rounded hover:bg-gray-500 hover:text-white'
          >
            {li}
          </p>
        ))}
      </div>
    )}
        
    </div>
))} 
        </div>
       


      </div>
    </div>
  )
}

export default Labtest
