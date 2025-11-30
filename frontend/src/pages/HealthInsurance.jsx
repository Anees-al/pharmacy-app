import React from 'react'
import Nav from '../components/Nav'
import wellness from '../assets/wellness-corner.svg'
import starhealth from '../assets/star-health.svg'
import niva from '../assets/niva.svg'
import icic from '../assets/icic.png'
import bajaj from '../assets/bajaj.svg'
import care from '../assets/care.svg'
import Footer from '../components/Footer'
const HealthInsurance = () => {

    const insurance=[
        {id:'1',name:'HDFC ERGO Health insurance',description:'Large reach — 13,000+ network hospitals across India; good variety of plans (individual, family floater, top-up, critical illness, etc.); generally high claim-settlement track-record.',link:'https://www.hdfcergo.com/',img:wellness},
        {id:2,name:'Star Health and Allied insurance company',description:'India’s first standalone health-insurance provider; wide hospital network; strong for individual/family plans; known for flexibility and variety (senior citizen plans, critical-illness covers, etc.)',link:'https://www.starhealth.in/',img:starhealth},
        {id:3,name:'Niva bupa Health insurance',description:'Offers customizable plans for individuals, families, senior citizens; straightforward claims process; has a decent nationwide hospital network.',link:'https://www.nivabupa.com/',img:niva},
        {id:4,name:'ICICI Lombard General Insurance',description:'Strong brand and backing; offers general- and health-insurance plans; known for reliability, wide coverage, and reasonably fast claims processing.',link:'https://www.icicilombard.com/',img:icic},
        {id:5,name:'Bajaj Allianz General Insurance',description:'Offers flexible health-insurance plans (individual, family, top-up, critical illness), and has a good reputation for digital/online processing and broad hospital tie-ups.',link:'https://www.bajajgeneralinsurance.com/',img:bajaj},
        {id:6,name:'Care Health Insurance',description:'Known for competitive premiums, range of policies, and good reach. Suitable for individuals/families looking for affordable but decent coverage.',link:'https://www.careinsurance.com/',img:care}

    ]
  return (
    <div>
        <Nav/>
      <div className=' grid grid-cols-3   w-full min-h-screen p-4'>
           {
            insurance.map((i)=>(
                <div
  key={i.id}
  className="
    flex flex-col items-center 
    border border-gray-200 
    bg-white 
    shadow-md 
    hover:shadow-xl 
    transition-shadow 
    rounded-2xl 
    p-8 
    gap-5 
    w-full max-w-sm
    mt-10
  "
>
  <img
    src={i.img}
    alt=""
    className="w-24 h-14 object-contain mx-auto"
  />

  <p className="text-2xl font-bold text-gray-900 text-center">
    {i.name}
  </p>

  <p className="text-sm font-medium text-gray-600 text-center leading-relaxed">
    {i.description}
  </p>

  <a
    href={i.link}
    className="
      mt-3 
      bg-blue-600 
      hover:bg-blue-700 
      text-white 
      font-semibold 
      text-lg 
      px-6 py-2 
      rounded-xl 
      shadow 
      hover:shadow-lg 
      transition-all
      w-full 
      text-center
    "
  >
    Visit Site
  </a>
</div>

            ))
           }
      </div>

      <Footer/>
    </div>
  )
}

export default HealthInsurance
