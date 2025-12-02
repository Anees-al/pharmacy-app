import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer';

const Labtest = () => {
    const category=[
        {id:1,name:'Bio chemistry',description:'Blood chemistry tests for organs & metabolism.',list:["Liver Function Test (LFT)","Kidney Function Test (KFT)","Lipid Profile","Blood Glucose","Thyroid Profile"]},
        {id:2,name:'Hematology',description:"Complete blood analysis & clotting studies.",list:["Complete Blood Count (CBC)","Hemoglobin (Hb)","Platelet Count","ESR","RBC Count","WBC Count","Coagulation Profile"]},
        {id:3,name:'Microbiology',description:'Infection detection through cultures & rapid tests.',list:["Urine Culture",  "Blood Culture", "Sputum Culture","Throat Swab Culture","Stool Culture",  "Widal Test (Typhoid)", "TB Test (AFB Smear)"]},
        {id:4,name:'Immunology',description:'Autoimmune, allergy & inflammation markers.',list:[ "CRP (C-Reactive Protein)","Rheumatoid Factor (RF)", "ANA Test (Antinuclear Antibody)","Allergy IgE Total","HIV Test (ELISA)","Hepatitis B Surface Antigen (HBsAg)","Thyroid Antibodies (Anti-TPO)"]},
        {id:5,name:'Pathology',description:'Tissue & cell analysis (biopsy, cytology).',list:["Biopsy (Tissue Examination)","Fine Needle Aspiration Cytology (FNAC)","Pap Smear","Histopathology","Cytology (Fluid Analysis)","Bone Marrow Examination","Frozen Section"]},
        {id:6,name:'Radiology',description:'Imaging tests like X-ray, CT, MRI, Ultrasound.',list:["X-Ray","Ultrasound (USG)","CT Scan","MRI Scan","Mammography","DEXA Scan (Bone Density)","ECG / EKG"]}


    ]


    const [openCategory, setOpenCategory] = useState(null);


  return (
    <div className='flex flex-col h-auto'>
        <Nav/>

    <h1 className='mt-10 ml-20 text-4xl font-black'>Our Diagnostic Services</h1>
      <div className='mb-10'>

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


      <Footer/>
    </div>
  )
}

export default Labtest
