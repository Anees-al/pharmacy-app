import React from 'react'
import Nav from '../components/Nav'
import diabates from '../assets/analysis.png'
import cardiac from '../assets/examination.png'
import stomachcare from '../assets/gastroenterology.png'
import liver from '../assets/liver.png'
import tooth from '../assets/tooth-hygiene.png'
import cardoffer from '../assets/cardoffer.png'
import pain from '../assets/pain.png'
import oldcare from '../assets/old-man.png'
import Questions from '../components/Questions'
import ShopbyBrands from '../components/ShopbyBrands'
import Vitamin from '../components/Vitamin'
import Babecare from '../components/Babecare'
const Home = () => {
  return (
    <div>
      <Nav/>
      <div className='flex flex-row mt-10 justify-center gap-10'>
       <div className='p-6 rounded-lg bg-green-50 font-semibold text-green-500 cursor-pointer w-[200px] hover:border-green-600 hover:border-2 hover:shadow-green-200 hover:shadow transition-all duration-100'>Pharmacy Near Me</div>
       <div className='p-6 rounded-lg bg-yellow-50 font-semibold text-yellow-500 cursor-pointer w-[200px] hover:border-yellow-400 hover:border-2 hover:shadow-yellow-200 hover:shadow transition-all duration-100'>Get 20% off</div>
       <div className='p-6 rounded-lg bg-purple-50 font-semibold text-purple-500 cursor-pointer w-[200px] hover:border-purple-400 hover:border-2 hover:shadow-purple-200 hover:shadow transition-all duration-100'>Doctor Appointment</div>
       <div className='p-6 rounded-lg bg-blue-50 font-semibold text-blue-500 cursor-pointer w-[200px] hover:border-blue-600 hover:border-2 hover:shadow-blue-200 hover:shadow transition-all duration-100'>Health Insurance</div>
       <div className='p-6 rounded-lg bg-red-50 font-semibold text-red-500 cursor-pointer w-[200px] hover:border-red-600 hover:border-2 hover:shadow-red-200 hover:shadow transition-all duration-100'>Lab Tests</div>
        
      </div>  


      <div className='flex flex-col px-12 mt-10'>
        <h1 className='text-3xl font-bold'>Browse by Health Condition</h1>
        </div>    

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-10">
  {[
    { img: diabates, label: "Diabetes Care" },
    { img: cardiac, label: "Cardiac Care" },
    { img: stomachcare, label: "Stomach Care" },
    { img: liver, label: "Liver Care" },
    { img: tooth, label: "Oral Care" },
    { img: pain, label: "Pain Relief" },
    { img: oldcare, label: "Elderly Care" },
    { img: oldcare, label: "Elderly Care" },
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-4 border-2 border-gray-300 rounded-2xl px-4 py-5 cursor-pointer hover:shadow-xs hover:shadow-[#0077B6] hover:border-[#0077B6]  transition-all duration-200 bg-white"
    >
      <img
        src={item.img}
        alt={item.label}
        className="w-12 h-12 p-2 bg-gray-100  rounded-lg border border-[#0077B6]"
      />
      <p className="text-gray-700 font-semibold text-base">{item.label}</p>
    </div>
  ))}
</div>
         <Vitamin/>
         <Babecare/>
       <div className='px-10 py-5 cursor-pointer'>
          <img src={cardoffer} alt="" className='w-full h-[400px] rounded-md' />
       </div>
       <ShopbyBrands/>
       <Questions/>
        
    </div>
    
  )
}

export default Home
