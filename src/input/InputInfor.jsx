import React from 'react'
import { HiMiniUser } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
const InputInfor = () => {
  return (
    <div>
        
<div className="flex relative left-[-20px] ">

        <HiMiniUser color='#ffffff33' size={'20px'} className='relative top-4 left-8'/>
        <input type="text" placeholder='Ваше имя' className='inputRegis relative text-[16px] text-[#ffffff33] px-[41px] py-3.5  bg-[#F3F5FB1A] border-2 border-[#F3F5FB99] rounded-[10px]'/>
</div>
<div className="flex mt-[10px]  relative left-[-20px]">

        <HiPhone color='#ffffff33' size={'20px'} className='relative top-4 left-8'/>
        <input type="text" placeholder='Ваше имя' className='inputRegis relative text-[16px] text-[#ffffff33] px-[41px] py-3.5  bg-[#F3F5FB1A] border-2 border-[#F3F5FB99] rounded-[10px]'/>
</div>
       <div className="">
         <div className="buttondiv3 cursor-pointer flex items-center  w-[175px] gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pr-1 px-2.5 py-1.5 rounded-[10px] transition-all mt-3">
            <button className='cursor-pointer'>

          Зафиксировать
            </button>
            <div className="vector4">

        <img src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
       </div>
    </div>
  )
}

export default InputInfor