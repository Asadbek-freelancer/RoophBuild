import React from 'react'
import '../style/coments.css'
const Coments = () => {
  return (
    <div>
        <div className="flex items-start gap-[222px] commentDiv">

         <div className="bg-[#11183A0D] w-18 p-2 rounded-[10px] flex justify-center relative top-4 comentsDiv">
        <p className='text-[16px] text-[#11183A4D] comentP1'>Отчеты</p>
      </div>
      <div className="comentsDiv2">
        <h1 className='comentsH1 text-[#11183A] text-[42px] font-medium'>Вы всегда в курсе событий</h1>
        <p className='comentsP mt-8 text-[#11183A80] w-[290px]'>Ежедневные фото и видеоотчеты о всех выполняемых работах и поставках материала на Whatsapp или Telegram</p>
      </div>
        </div>
        <div className="flex items-end gap-5 comentsChat mt-8">
            <img className='avatar' src="../../images/avatar1.png" alt="" />
            <div className="bg-[#DDDFE8] rounded-[10px] p-5 w-[590px] cmd1">
                <h3 className='comentsH3 w-[350px] text-2xl'>Добрый день! Направляю вам отчет о ходе работ на объекте</h3>
            </div>
        </div>
        <div className="flex items-end gap-5 mt-3 firstcoment">
            <img className='avatar' src="../../images/avatar1.png" alt="" />
            <div className="bg-[#DDDFE8] p-5 w-[590px] rounded-[10px]">

            <img src="../../images/comentsRooph.png" alt="" />
            <div className="flex gap-[10px] mt-[10px] comentallimg">
                <img  className='comentimg' src="../../images/tools.png" alt="" />
                <img  className='comentimg' src="../../images/blackrooph.png" alt="" />
                <div className="w-[176px] flex justify-center items-center">

                <img className='comentimg'  src="../../images/morepictures.png" alt="" />
                <h2 className='text-3xl text-[#F3F5FB] absolute '>+3</h2>
                </div>
            </div>
            </div>
            <p className='text-[#020615] opacity-10 time'>9:01</p>
        </div>
        <div className="flex justify-end">

        <div className="flex items-end gap-5 mt-5 lastdivcoment">
            <div className="bg-[#4560E9] rounded-[10px] p-5 w-[590px] flex justify-end lastcoment">
                <h4 className='text-2xl w-[340px] text-end text-[#FFFFFF] lastH4'>Добрый, спасибо большое!Все отлично</h4>
            </div>
            <img className='avatar' src="../../images/avatar2.png" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Coments