import React from 'react'
import '../style/boss.css'
const Boss = () => {
  return (
    <div>
        <div className="px-42 pt-14 pb-12 bossDiv">
            <div className="flex items-start gap-[200px] bossDiv2">

           <div className="bg-[#F3F5FB0D] w-32 p-2 rounded-[10px] flex justify-center relative top-3  bossP2Div">
        <p className='bossP2 text-[16px] text-[#F3F5FB4D]'>Руководство</p>
      </div>
      <div className="">

    <h1 className='BossH1 text-[42px] text-[#F3F5FB] w-[700px] leading-tight font-medium'>Монтаж кровли — это легко, если вы работаете с профессионалами</h1>
    <div className="flex items-center gap-12 aboutBoss">

    
    <div className="">
        <h2 className='BossH2 text-[#F3F5FB] text-[22px] w-[280px] mt-14 font-medium'>Шнайдер Виталий, руководитель компании «РуфСтрой»</h2>
        <p className='BossP1 w-[355px] text-[#F3F5FB80] text-[14px]'>Закончил НГАСУ(Сибстрин) в 2014 году по специальности промышленное гражданское строительство.</p>
        <p className='BossP w-[355px] text-[#F3F5FB80] text-[14px] mt-6 '>Сейчас за плечами более десяти лет опыта в кровельных работах, за это время я детально изучил все нюансы этой профессии и знаю, как сделать крышу долговечной.</p>
        <p className='BossP w-[355px] text-[#F3F5FB80] text-[14px] mt-6'>Я лично курирую каждый проект и работаю с полной отдачей, что позволяет гарантировать высокий уровень качества выполняемых работ.</p>
    </div>
    <img className='imgBoss mt-14' src="../../images/Boss.png" alt="" />
    </div>
      </div>
            </div>
        </div>
    </div>
  )
}

export default Boss