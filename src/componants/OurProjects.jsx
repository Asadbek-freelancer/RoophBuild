import React from 'react'
import { FaPlay } from "react-icons/fa6";
const OurProjects = () => {
   
  return (
    <div>
        <div className="">
            <div className="bg-[#11183A0D] w-28 p-2 rounded-[10px] flex justify-center ">
        <p className='text-[13px] text-[#11183A4D] '>Наши работы</p>
      </div>
            <h1 className='text-[32px] text-[#11183A] leading-tight font-medium mt-[30px]'>Работать с профессионалами —
это спокойно и без переплат</h1>

    <p className='text-[12px] text-[#11183A80] mt-8'>Мы делаем работу один раз, а служит она всю жизнь</p>
        </div>
        <div className="">
            <h2 className='mt-14 text-[#11183A] text-2xl font-medium mb-7'>Балластная кровля</h2>
            <div className="bg-white p-2 rounded mb-2.5">
                <img src="../../images/proj1.png" alt="" />
                <h3 className='text-[#11183A] text-[16px] font-medium mt-5'>Название проекта</h3>
                <p className='text-[#11183A80] text-[12px] mt-2.5'>Небольшое описание</p>
            </div>
            <div className="bg-white p-2 rounded  mb-2.5">
                <img src="../../images/proj2.png" alt="" />
                <h3 className='text-[#11183A] text-[16px] font-medium mt-5'>Название проекта</h3>
                <p className='text-[#11183A80] text-[12px] mt-2.5'>Небольшое описание</p>
            </div>
            <div className="bg-white p-2 rounded ">
                <div className="flex flex-col justify-center items-center ">

                <FaPlay  color='white' size={'20px'} className='z-10 absolute'/>
                <img src="../../images/proj3.png" alt="" />
                </div>
                <h3 className='text-[#11183A] text-[16px] font-medium mt-5'>Название проекта</h3>
                <p className='text-[#11183A80] text-[12px] mt-2.5'>Небольшое описание</p>
            </div>
             <h2 className='mt-7 text-[#11183A] text-2xl font-medium mb-7'>Мембранная кровля</h2>
            <div className="bg-white p-2 rounded mb-2.5">
                <img src="../../images/proj4.png" alt="" />
                <h3 className='text-[#11183A] text-[16px] font-medium mt-5'>Название проекта</h3>
                <p className='text-[#11183A80] text-[12px] mt-2.5'>Небольшое описание</p>
            </div>
             
            <div className="bg-white p-2 rounded mb-2.5">
                <img src="../../images/proj5.png" alt="" />
                <h3 className='text-[#11183A] text-[16px] font-medium mt-5'>Название проекта</h3>
                <p className='text-[#11183A80] text-[12px] mt-2.5'>Небольшое описание</p>
            </div>
            
           <div className="bg-white p-2 rounded ">
                <div className="flex flex-col justify-center items-center ">

                <FaPlay  color='white' size={'20px'} className='z-10 absolute'/>
                <img src="../../images/proj6.png" alt="" />
                </div>
                <h3 className='text-[#11183A] text-[16px] font-medium mt-5'>Название проекта</h3>
                <p className='text-[#11183A80] text-[12px] mt-2.5'>Небольшое описание</p>
            </div>
             <h2 className='mt-14 text-[#11183A] text-2xl font-medium mb-7'>Наплавляемая кровля</h2>
            <div className="bg-white p-2 rounded mb-2.5">
                <img src="../../images/proj7.png" alt="" />
                <h3 className='text-[#11183A] text-[16px] font-medium mt-5'>Название проекта</h3>
                <p className='text-[#11183A80] text-[12px] mt-2.5'>Небольшое описание</p>
            </div>
          
            <div className="bg-white p-2 rounded mb-2.5">
                <img src="../../images/proj8.png" alt="" />
                <h3 className='text-[#11183A] text-[16px] font-medium mt-5'>Название проекта</h3>
                <p className='text-[#11183A80] text-[12px] mt-2.5'>Небольшое описание</p>
            </div>
           
           <div className="bg-white p-2 rounded ">
                <div className="flex flex-col justify-center items-center ">

                <FaPlay  color='white' size={'20px'} className='z-10 absolute'/>
                <img src="../../images/proj9.png" alt="" />
                </div>
                <h3 className='text-[#11183A] text-[16px] font-medium mt-5'>Название проекта</h3>
                <p className='text-[#11183A80] text-[12px] mt-2.5'>Небольшое описание</p>
            </div>
              <div className="buttondiv3 cursor-pointer flex items-center  w-[200px] gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pr-1 px-2.5 py-1.5 rounded-[10px] transition-all mt-7">
            <button className='cursor-pointer'>

          Все наши проекты
            </button>
            <div className="vector4">

        <img src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default OurProjects