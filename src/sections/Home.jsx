import React from 'react'
import Navbar from '../componants/Navbar'
import Header from '../componants/Header'
import '../style/home.css'
import { Link } from 'react-router'
import Coments from '../componants/Coments'
import '../style/coments.css'
import Registrate from '../componants/Registrate'
import '../style/registrate.css'
import Serveces from '../componants/Serveces'
import OurProjects from '../componants/OurProjects'
import Boss from '../componants/Boss'
import Sertificate from '../componants/sertificate'
import Companys from '../componants/Companys'
import Questions from '../componants/Questions'
import Footer from '../componants/Footer'
const Home = () => {
  const works = [
    {name: 'КП «Локис»', image: '../../images/firsthouse.png', area: '280 м²', days: '12 дней' },
    {name: 'КП «Озерный»', image: '../../images/secondhouse.png', area: '140 м²', days: '4 дня'},
    {name: 'КП «Малые поляны »', image: '../../images/thirdhouse.png', area: '280 м²', days: '12 дней'}
  ]
  return (
    <div className=''>
      <Header />

     <div className="mt-28 px-42 flex items-start gap-[222px] homediv">
      <div className="bg-[#11183A0D] w-15 p-2 rounded-[10px] flex justify-center relative top-4 aboutusP1Div">
        <p className='text-[16px] text-[#11183A4D] aboutusP1'>О нас</p>
      </div>

      <div className="">

      <h1 className='firstH1 leading-tight '>Безупречный результат, <span className='text-[#11183A80]'> который прослужит вам </span>всю жизнь</h1>

      <div className="flex flex-col flex-wrap">
        <div className="flex gap-52 mt-16 flex-wrap aboutus1">

<div className="">
  <h2 className='firstH2 text-8xl'>10 <span className='spanyear text-5xl relative bottom-10 right-3'>лет</span></h2>
  <p className='years text-[16px] text-[#11183A80] w-48 mt-8'>опыт в монтаже плоских кровель</p>
</div>
<div className="">
  <h2 className='firstH2 text-8xl'>200.000 <span className='spanyear text-5xl relative bottom-8 right-3'>₽</span></h2>
  <p className='years text-[16px] text-[#11183A80] w-[290px] mt-8'>вы можете сэкономить на материалах благодаря нашему опыту и дилерским ценам, без потери качества</p>
</div>
        </div>
        <div className="flex gap-18 mt-8 flex-wrap">

<div className="">
  <h2 className='firstH2 text-8xl'>28 <span className='spanyear text-5xl relative bottom-10 right-3'>объектов</span></h2>
  <p className='years text-[16px] text-[#11183A80] w-54 mt-8'>успешно сданы в 2024 году, каждый из них соответствует высоким стандартам</p>
</div>
<div className="">
  <h2 className='firstH2 text-8xl'>100 <span className='spanyear text-5xl relative bottom-8 right-3'>%</span></h2>
  <p className='years text-[16px] text-[#11183A80] w-[290px] mt-8'>клиентов готовы нас рекомендовать. 
Вы можете сами спросить отзыв у наших клиентов</p>
</div>
        </div>
      </div>
      </div>
     </div>
     <div className="mt-44 px-42 ourProj">
      <div className="flex  items-start gap-40 allourprojects">

       <div className="bg-[#11183A0D] w-36 p-2 rounded-[10px] flex justify-center relative top-4 ourproject">
        <p className='text-[16px] text-[#11183A4D] ourpP'>Наши проекты</p>
      </div>
      <h1 className='ourprojects text-5xl text-[#11183A] w-[480px] font-medium mt-2'>8 из 10 заказов сдаем раньше срока</h1>
      </div>
      <div className="flex gap-5 mt-8 flex-wrap">
        {works.map((work, index) => (
          <div key={index} className="">
            <h2 className='mt-4 workh3'>{work.name}</h2>
            <img className='w-[370px]' src={work.image} alt="" />
            <div className="mobileWork">
              <div className="">
                <p className='workP'>Площадь кровли</p>
                <h2 className='area'>{work.area}</h2>
              </div>
              <div className="">
                <p className='workP'>Срок реализации</p>
                <h2 className='area'>{work.days}</h2>
              </div>

            </div>
            <h2 className='mt-4 workh2'>{work.name}</h2>
            </div>
        ))}
        <Link to="/portfolio2" >
          <div className="buttondiv2 cursor-pointer flex items-center absolute left-[73.7%] bottom-[-250%] gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pr-1 px-2.5 py-1 rounded-[15px] transition-all mt-9">
            <button className='cursor-pointer' type="submit">

          Все наши работы 
            </button>
            <div className="vector3">

        <img src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
        </Link>
        <Link to="/portfolio" >
          <div className="buttondiv4 cursor-pointer flex items-center relative left-[960px] gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pr-1 px-2.5 py-1 rounded-[15px] transition-all mt-9">
            <button className='cursor-pointer' type="submit">

          Все наши работы 
            </button>
            <div className="vector3">

        <img src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
        </Link>
      </div>
     </div>
     <div className="mt-44 px-42 freeSection">
      <div className="flex items-start gap-36 free">

      
       <div className="bg-[#11183A0D] w-[180px] p-2 rounded-[10px] flex justify-center relative top-4 freeP1Div">
        <p className='text-[16px] text-[#11183A4D] freeP1'>Бесплатная экскурсия</p>
      </div>

      <div className="freeDiv">
        <div className="w-[820px] freeDiv2">
          <h1 className='freeH1 text-[#11183A] text-[40px] font-medium leading-tight'>Запишитесь на экскурсию по объектам, чтобы убедиться в качестве</h1>
          <p className='freeP w-[450px] text-[#11183A80] mt-8'>Приглашаем посмотреть нас в деле. Подберем объекты под ваши параметры, готовые и в процессе монтажа, чтобы вы смогли оценить подход и качество нашей работы</p>
        </div>
        <div className="mt-14 flex items-center gap-6">
          

         <div className="buttondiv5 cursor-pointer flex items-center w-36 gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pr-1 px-2.5 py-1 rounded-[15px] transition-all ">
            <button className='cursor-pointer' type="submit">

          Записаться
            </button>
            <div className="vector3">

        <img src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
          
        <h4 className='freeH4 text-[#11183A] text-[16px] opacity-50'>150+ реализованных работ</h4>
        </div>
      </div>
</div>
        <div className="">
          <img className='w-6xl mt-16' src="../../images/freeImg.png" alt="" />
        </div>
     </div>
     <div className="mt-32 px-42 Coments">
        <Coments />
     </div>

     <div className="mt-28 registrate ">
      <Registrate />
     </div>
     <div className="mt-28 px-42 servecesMain">
      <Serveces />
     </div>
     <div className="mt-[90px] OurProjects">
       <OurProjects />
     </div>
     <div className="mt-28 Boss">
      <Boss />
     </div>
      <div className="mt-28 px-42 servecesMain2">
      <Serveces />
     </div>
     <div className="mt-28 px-42 Sertificate">
      <Sertificate />
     </div>
     <div className="mt-28 px-42 Company">
      <Companys />
     </div>
     <div className="mt-28 pl-42 pr-53 Question">
        <Questions />
     </div>
     <div className="mt-28 Footer">
      <Footer />
     </div>
    </div>
  )
}

export default Home 