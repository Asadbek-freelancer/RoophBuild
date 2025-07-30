import React from 'react'
import '../style/companys.css'
const Companys = () => {
  return (
    <div>
         <div className="flex items-start gap-[130px] sertificateDiv">
             <div className="bg-[#11183A0D] w-48 p-2 rounded-[10px] flex justify-center relative top-3 companyPdiv">
        <p className='text-[16px] text-[#11183A4D] companyP'>Надежные компаньоны</p>
      </div>
      <h1 className='companyH1 text-[42px] text-[#11183A] font-medium leading-tight'>Наши партнеры</h1>
        </div>
        <div className="flex gap-3 mt-14 flex-wrap">
            <div className="bg-[#11183A0D] p-3 rounded-[10px]">

            <img className='brandimg' src="../../images/brand1.svg" alt="" />
            </div>
            <div className="bg-[#11183A0D] p-3 flex justify-center rounded-[10px]">

            <img className='brandimg' src="../../images/brand2.svg" alt="" />
            </div>
            <div className="bg-[#11183A0D] p-3 flex rounded-[10px] brandimgDiv3">

            <img className='brandimg' src="../../images/brand3.svg" alt="" />
            </div>
            <div className="bg-[#11183A0D] p-3 flex rounded-[10px] brandimgDiv4">

            <img className='brandimg' src="../../images/brand4.svg" alt="" />
            </div>
            <div className="bg-[#11183A0D] p-3 px-4 rounded-[10px] brandimgDiv5">

            <img className='brandimg1' src="../../images/brand5.svg" alt="" />
            </div>
            <div className="bg-[#11183A0D] p-3 px-4 rounded-[10px] flex brandimgDiv6">

            <img  className='brandimg2' src="../../images/brand6.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Companys