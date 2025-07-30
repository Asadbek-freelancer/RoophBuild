import React from 'react'
import '../style/material.css'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
const Material = () => {
    const cards = [
        {name: 'Что нужно учитывать перед возведением плоской кровли?', image: '../../images/Materimg1.png'},
        {name: 'Монтаж кровли зимой', image: '../../images/Materimg2.png'},
        {name: 'Виды террасного покрытия для плоской кровли', image: '../../images/Materimg3.png'},
        {name: 'Плоская кровля для деревянного дома', image: '../../images/Materimg4.png'},
        {name: 'Утепление плоской кровли', image: '../../images/Materimg5.png'},
        {name: 'Ремонт кровли многоквартирного дома', image: '../../images/Materimg6.png'},
        {name: 'Устройство плоской крыши каркасного дома', image: '../../images/Materimg7.png'},
        {name: 'Как продлить срок службы битумной кровли', image: '../../images/Materimg8.png'},
        {name: 'Плюсы и минусы плоской крыши', image: '../../images/Materimg9.png'}
    ]
  return (
    <div>
        <div className="">

        
        <div className="Material">
 <div className="flex justify-center pb-[61px]">

        <Navbar />
        </div>
        <div className="flex flex-col items-center">

      
         <div className="flex gap-3 justify-center MaterialMainDIV">
            <div className="flex items-center gap-3">

            <h2 className='materialH2 text-[22px] text-[#F3F5FB]'>Главная</h2>
            <img className='mt-1' src="../../icons/arrowRight.svg" alt="" />
            </div>
            <h2 className='materialH2 text-[22px] text-[#F3F5FB]'>Статьи о плоской кровле для частных домов</h2>
        </div>
         <h1 className='MaterialH1 text-7xl text-[#F3F5FB] text-center mt-5 pb-[158px] w-[890px] font-medium '>Статьи о плоской кровле для частных домов</h1>
          </div>
        </div>
<div className="px-42 mt-30 MaterDivCards">


        <div className="flex items-start gap-[200px] MaterialDiv ">
            <div className="bg-[#11183A0D] w-17 p-2 rounded-[10px] flex justify-center relative top-4 aboutusP1Div">
        <p className='text-[16px] text-[#11183A4D] aboutusP1'>Статьи</p>
      </div>
      <h2 className='MateH2 text-[#11183A] text-[42px] font-medium w-[820px] leading-tight'>Полезные статьи для тех, кто выбирает или обслуживает плоскую крышу</h2>
      
        </div>
          <div className="flex flex-wrap gap-3 mt-14 imgsCard">
            {cards.map((el, index) =>(
                <div key={index} className="bg-white w-[370px] p-2.5 rounded">
                    <img className='imgMater' src={el.image} alt="" />
                    <h3 className='MatercardH3 text-[#11183A] text-[21px] leading-tight font-medium mt-2.5'>{el.name}</h3>
                </div>
            ))}
        </div>
        </div>
         <div className="mt-28 Footer">
      <Footer />
     </div>
        </div>
    </div>
  )
}

export default Material