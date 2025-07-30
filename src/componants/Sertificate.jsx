import React from 'react'
import '../style/sertificate.css'
const Sertificate = () => {
  return (
    <div>
        <div className="">
             <div className="flex items-start gap-[200px] sertificateDiv">
             <div className="bg-[#11183A0D] w-28 p-2 rounded-[10px] flex justify-center relative top-4 sertificateDiv2">
        <p className='text-[16px] text-[#11183A4D] sertificateP2'>Документы</p>
      </div>
      <h1 className='SertificateH1 text-[42px] text-[#11183A] font-medium leading-tight'>Имеем все необходимые сертификаты</h1>
        </div>
        <div className="flex flex-wrap gap-3 mt-14">

        <img className='sertificateimg' src="../../images/sertificate1.png" alt="" />
        <img className='sertificateimg' src="../../images/sertificate2.png" alt="" />
        <img className='sertificateimg' src="../../images/sertificate3.png" alt="" />
        <img className='sertificateimg' src="../../images/sertificate4.png" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Sertificate