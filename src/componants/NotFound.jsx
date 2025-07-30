import React from 'react'
import Navbar from './Navbar'
import '../style/notfound.css'
import { Link } from 'react-router'
import Footer from './Footer'
const NotFound = () => {
  return (
    <div>
        <div className="NotFound">

        
        <div className="flex justify-center pb-[61px]">

        <Navbar />
        </div>
<div className="">


        <div className="flex gap-3 justify-center FaqDiv">
            <h2 className='FaqH2 text-[22px] text-[#F3F5FB]'>Главная</h2>
            <img className='mt-1' src="../../icons/arrowRight.svg" alt="" />
            <h2 className='FaqH2 text-[22px] text-[#F3F5FB]'>404</h2>
        </div>
<div className="flex flex-col items-center">

        <h1 className='notfoundH1 text-7xl text-[#F3F5FB] text-center mt-9 pb-[64px] font-medium'>404</h1>

        <p className='notFp text-[32px] text-[#F3F5FB] w-[360px] text-center leading-tight'>Упс.. похоже, такой страницы не существует</p>

<Link to='/' >

         <div className="buttonNotFLast cursor-pointer flex items-center text-[16px]  w-[155px] gap-3 bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 pl-3.5 rounded-[10px] transition-all mt-16">
            <button className='cursor-pointer'>

          На главную
            </button>
            <div className="vector4">

        <img src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
        </Link>
</div>
      </div>  
</div>
<div className="Footer">
  <Footer />
</div>

    </div>
  )
}

export default NotFound