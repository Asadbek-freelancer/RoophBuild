import React from 'react'
import '../style/faq.css'
import Navbar from '../componants/Navbar'

import Footer from '../componants/Footer'
import Sertificate from '../componants/Sertificate'
const Sertificates = () => {
  return (
    <div>
         <div className="FAQ">
<img className='faqmobileimg' src="../../images/faqmobileimg.png" alt="" />
        
        <div className="flex justify-center pb-[61px]">

        <Navbar />
        </div>
<div className="">


        <div className="flex gap-3 justify-center FaqDiv">
            <h2 className='FaqH2 text-[22px] text-[#F3F5FB]'>Главная</h2>
            <img className='mt-1' src="../../icons/arrowRight.svg" alt="" />
            <h2 className='FaqH2 text-[22px] text-[#F3F5FB]'>Сертификаты</h2>
        </div>

        <h1 className='FaqH1 text-7xl text-[#F3F5FB] text-center mt-5 pb-[144px] font-medium'>Сертификаты</h1>
      </div>  
</div>
<div className="mt-28 px-42 Sertificate">
    <Sertificate />
</div>

<div className="mt-28 Footer">
      <Footer />
     </div>
    </div>
  )
}

export default Sertificates