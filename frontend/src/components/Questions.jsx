import React from 'react'
import { questions } from '../assets/db'
import { useState } from 'react';

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='max-w-6xl mx-auto my-10 p-6'>
      <h1 className='text-2xl font-bold mb-6 text-[#0077B6] flex items-center gap-2'>Frequently Asked Quesstion</h1>
      {questions.map((question,index)=>(
        <div key={index} className=" border-2 border-gray-400 py-4 px-2 mt-4 rounded-xl cursor-pointer hover:border-[#0077B6] hover:shadow hover:shadow-[#0077B6]">
            <button className='w-full flex justify-between items-center text-left focus:outline-none cursor-pointer  ' onClick={()=>toggle(index)}>
                 <span className='font-semibold text-gray-800 text-lg'>{question.questions}</span>
            <span className='text-xl text-green-600 font-bold cursor-pointer'>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
            <div className="mt-3 text-gray-600 leading-relaxed transition-all duration-300 font-semibold">
              {question.answer}
            </div>
          )}
           
        </div>
      ))}
    </div>
  )
}

export default Questions
