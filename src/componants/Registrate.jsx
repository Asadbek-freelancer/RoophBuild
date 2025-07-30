import React from 'react'
import '../style/registrate.css'
import InputInfor from '../input/InputInfor'
const Registrate = () => {
  return (
    <div className='flex gap-[30px] mainregistrate'>
        <div className=" registrateDiv1  pl-42 pt-14 pb-10 ">
 <div className="bg-[#F3F5FB0D] w-54 p-2 rounded-[10px] flex justify-center relative regisP1Div ">
        <p className='text-[16px] text-[#F3F5FB4D] regisP1'>Фиксированная стоимость</p>
      </div>
      <h1 className='regH1 text-[42px] font-medium text-[#F3F5FB] w-[530px] leading-tight mt-14'>Зафиксируйте стоимость сейчас, платите потом</h1>
      <p className='regP text-[16px] text-[#F3F5FB80] w-[330px] mt-7'>Цены на материалы растут ежемесячно.
Если вы только планируете строительство,
давайте договоримся о работе и зафиксируем цены</p>
<div className="mt-14">

        <InputInfor />
</div>
        </div>
          <img className='rounded-r-[10px] w-[780px] opacity-75 registrateimg' src="../../images/tools2.png" alt="" />
    </div>
  )
}

export default Registrate

