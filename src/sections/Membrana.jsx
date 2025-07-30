import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import '../style/ballasta.css'
import '../style/membrana.css'
const Membrana = () => {
    const cards = [
        { image: '../../images/memnranaimg1.png', describtion: 'Механическое крепление мембраны при устройстве кровли, как правило, применяется в тех случаях, когда нет возможности использовать балластный способ. Например, когда несущая конструкция не рассчитана на значительные нагрузки.'},
        { image: '../../images/memnranaimg2.png', describtion: 'Данную систему можно применять в кровля с уклонами более 3%, пирог надежно фиксируется крепежом и способен воспринимать высокие ветровые нагрузки.'},
    ]
  return (
    <div>
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
    
            <h2 className='materialTwoH2 text-[22px] text-[#F3F5FB] text-center'>Мембранная кровля</h2>
        </div>
         <h1 className='MembranaH1 text-7xl text-[#F3F5FB] text-center mt-5 pb-[158px] w-[630px] font-medium '>Монтаж кровли
из ПВХ мембраны</h1>
          </div>
        </div>
        <div className="px-96 BALLASTA">
            <div className="">

           
            <h1 className='BallastaH1 text-[#11183A] text-[42px] font-medium mt-24'>Когда применяется</h1>
            <img className='ballastafirstimg mt-6' src="../../images/Membranaimg.png" alt="" />
            <p className='ballastaP text-[#11183A80] text-[18px] w-[830px] mt-6'>Мембранная кровля. Система кровли с применением ПВХ-мембраны и механической фиксацией — это один из самых распространённых способов устройства плоской неэксплуатируемой кровли. Мембрана укладывается поверх основания и крепится через все слои утеплителя и уклона специальной системой крепежа (Телескопический крепеж + саморезы + анкерный элемент) к несущему основанию. Швы между полотнами герметизируются сваркой горячим воздухом</p>
        </div>
<div className="">
    {cards.map((el, index) =>(
        <div key={index} className="">
            <p className='ballastaP1 text-[#11183A80] text-[18px] mt-8 w-[660px]'>{el.name}</p>
            <img className='ballastaimg mt-6' src={el.image} alt="" />
            <p className='ballastaP2 text-[#11183A80] text-[18px] mt-6 w-[650px]'>{el.describtion}</p>
        </div>
    ))}
</div>
<div className="">
    <h1 className='text-[#11183A] text-[42px] BallastaH1 mt-20 font-medium'>Стоимость работ и материалов для монтажа мембранной плоской кровли</h1>
    <h2 className='text-[#11183A] text-[72px] ballaH2 mt-13 font-medium'>от 4 200 р/м²</h2>
    <p className='text-[#11183A80] text-[16px] ballaP mt-6'>Материал</p>
    <h2 className='text-[#11183A] text-[72px] ballaH2 mt-6 font-medium'>от 1 500 р/м²</h2>
    <p className='text-[#11183A80] text-[16px] ballaP mt-6'>Работа</p>
</div>
        </div>
        <div className="Footer mt-26">
            <Footer />
        </div>
    </div>
  )
}

export default Membrana