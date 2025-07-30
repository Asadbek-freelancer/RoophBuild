import React from 'react'
import Navbar from '../componants/Navbar'
import '../style/portfolio.css'
import { HiMiniUser } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import Footer from '../componants/Footer';
const PortfolioSecond = () => {
    const list = [
        {name: 'Битумная пароизоляция Биполь ЭПП'},
        {name: 'Теплоизоляция из плит Пеноплекс 150мм'},
        {name: 'Уклонообразующие плиты Пеноплекс УКЛОН 1,7%'},
        {name: 'Утепление парапетов 50мм'},
        {name: 'Разделительный слой 100г/м2'},
        {name: 'ПВХ мембрана Технониколь 1,5мм'},
        {name: 'Разделительный слой 350г/м2'},
        {name: 'Щебень фр.5-20мм'},
        {name: 'Воронки внутреннего водостока 3шт'}
    ]
  return (
    <div>
          <div className="PortfolioSecond">
 <div className="flex justify-center pb-[61px]">

        <Navbar />
        </div>
        <div className="flex flex-col items-center">

      
         <div className="flex gap-3 justify-center  PortMainDiv">
            <div className="flex gap-2.5">

          
            <div className="flex items-center gap-3">

            <h2 className='materialH2 text-[22px] text-[#F3F5FB]'>Главная</h2>
            <img className='mt-1' src="../../icons/arrowRight.svg" alt="" />
            </div>
            <div className="flex items-center gap-3">

            <h2 className='materialH2 text-[22px] text-[#F3F5FB]'>Портфолио</h2>
             <img className='mt-1' src="../../icons/arrowRight.svg" alt="" />
            </div>
              </div>
            <h2 className='PortfolioTWOH2 text-[22px] text-[#F3F5FB]'>Монтаж плоской кровли в КП «Голубое озеро»</h2>
        </div>
         <h1 className='MaterialH1 text-7xl text-[#F3F5FB] text-center mt-10 pb-[158px] w-[890px] font-medium '>Монтаж плоской кровли в КП «Голубое озеро»</h1>
          </div>
        </div>
        <div className="px-42 mt-28 PortFolioSecondMain">
            <div className="flex gap-[150px] items-start PortFolioSecondMainDiv">

            <div className="bg-[#11183A0D] w-46 p-2 rounded-[10px] flex justify-center relative top-4 ourproject">
        <p className='text-[16px] text-[#11183A4D] ourpP'>Комплектация кровли</p>
      </div>
      <h1 className='portseconmobileH1 text-5xl text-[#11183A] w-[480px] font-medium mt-2'>Что входит в монтаж плоской кровли</h1>
     
            </div>
            <div className="flex items-center gap-[130px] PortFolioSecondMainDiv">

            
            <div className="">
                <div className="">

                
                <div className="mt-20">
                    {list.map((el, index) =>(
                        <div key={index} className="flex items-center gap-3 mt-2.5 listmobile">
                            <img src="../../images/iconRight.svg" alt="" />
                            <p className='text-[#11183A80] text-[16px] PortPall'>{el.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-14 mt-20">

                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Площадь кровли</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>240 м²</h1>
                    </div>
                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Срок реализации</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>7 дней</h1>
                    </div>
            </div>
            </div>
            <img className='mt-20 imgmobileportfolioS' src="../../images/portsecondIMg.png" alt="" />
            </div>
             <div className="flex gap-[210px] items-start mt-32 PortFolioSecondMainDiv">

            <div className="bg-[#11183A0D] w-28 p-2 rounded-[10px] flex justify-center relative top-4 ourproject">
        <p className='text-[16px] text-[#11183A4D] ourpP'>Ход работ</p>
      </div>
      <h1 className='portseconmobileH1 text-5xl text-[#11183A] w-[480px] font-medium mt-2'>Как проходили работы на объекте</h1>
     
            </div>
            <div className="flex gap-3 flex-wrap mt-14 imgmobileportfoliodiv">
                <img className='imgmobileportfolio' src="../../images/port2imgcards.png" alt="" />
                <img className='imgmobileportfolio' src="../../images/port2imgcards.png" alt="" />
                <img className='imgmobileportfolio' src="../../images/port2imgcards.png" alt="" />
                <img className='imgmobileportfolio' src="../../images/port2imgcards.png" alt="" />
                <img className='imgmobileportfolio' src="../../images/port2imgcards.png" alt="" />
                <img className='imgmobileportfolio' src="../../images/port2imgcards.png" alt="" />
            </div>
              <div className=" mt-24 flex items-start gap-[190px] ABOUTUSRESPon">
                    
             <div className="bg-[#11183A0D] w-34 p-2 rounded-[10px] flex justify-center relative top-3 ">
                    <p className='text-[16px] text-[#11183A4D] aboutusP1'>Оставить заявку</p>
                  </div>
                  <div className="">
                    <h1 className='text-[#11183A] text-[44px] font-medium w-[690px] leading-tight ABOUUSH1Last'>Рассчитаем три варианта сметы и составим проект кровли</h1>
             <div className="mt-14">
                             
                       <div className="flex relative left-[-20px] ">
                       
                               <HiMiniUser color='#11183A33' size={'20px'} className='relative top-4 left-8'/>
                               <input type="text" placeholder='Ваше имя' className='inputRegis relative text-[16px] text-[#11183A33] px-[41px] py-3.5  bg-[#11183A1A] border-2 border-[#F3F5FB99] rounded-[10px]'/>
                       </div>
                       <div className="flex mt-[10px]  relative left-[-20px]">
                       
                               <HiPhone color='#11183A33' size={'20px'} className='relative top-4 left-8'/>
                               <input type="text" placeholder='Ваше имя' className='inputRegis relative text-[16px] text-[#11183A33] px-[41px] py-3.5  bg-[#11183A1A] border-2 border-[#F3F5FB99] rounded-[10px]'/>
                       </div>
                              <div className="">
                                <div className="buttondiv3 cursor-pointer flex items-center  w-[220px] gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pr-1 px-2.5 py-1.5 rounded-[10px] transition-all mt-3">
                                   <button className='cursor-pointer'>
                       
                                 Получить бесплатно
                                   </button>
                                   <div className="vector4">
                       
                               <img src="../../icons/Vector.svg" alt="" />
                               </div>
                               </div>
                              </div>
                    </div>
                    </div>
                   
                 </div>
        </div>
        <div className="Footer mt-28">
            <Footer />
        </div>
    </div>
  )
}

export default PortfolioSecond