import React from 'react'
import Navbar from '../componants/Navbar'
import '../style/aboutCompany.css'
import Footer from '../componants/Footer'
import Boss from '../componants/Boss'
import InputInfor from '../input/InputInfor'
import { HiMiniUser } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";

const AboutCompany = () => {
    const cards = [
        {name: 'Частные клиенты', number: '01', list: 'Плоская кровля может использоваться как терраса, зона отдыха, место для размещения солнечных панелей, кондиционеров или сада'},
        {name: 'С другими строительными компаниями', number: '02', list: 'Предлагаем познакомимся на одном небольшом заказе, наша ответственность и самоотдача все скажут за нас. Мы открыты к плодотворному долгосрочному сотрудничеству'},
        {name: 'С архитекторамии проектировщиками', number: '03', list: 'Поставщики материалов для плоской кровли обычно предоставляют узлы для промышленных объектов, а не загородных домов. «РуфСтрой» помогает спроектировать дом с плоской кровлей, подобрать конструкцию и проработать все узлы примыканий'}
    ]
  return (
    <div>
         <div className="FAQ">
<img className='contactsmobileimg' src="../../images/aboutcompanyMobile.png" alt="" />
        
        <div className="flex justify-center pb-[61px]">

        <Navbar />
        </div>
<div className="">


        <div className="flex gap-3 justify-center FaqDiv">
            <h2 className='FaqH2 text-[22px] text-[#F3F5FB]'>Главная</h2>
            <img className='mt-1' src="../../icons/arrowRight.svg" alt="" />
            <h2 className='text-[22px] text-[#F3F5FB] contactH2'>О компании</h2>
        </div>

        <h1 className='mobileH1Serv text-7xl text-[#F3F5FB] text-center mt-7 pb-[144px] font-medium'>О компании</h1>
       
      </div>  
</div>

    <div className="mt-28 px-42 ACD">
        <div className="flex items-start gap-[210px] ACD1">

        
        <div className="bg-[#11183A0D] w-15 p-2 rounded-[10px] flex justify-center relative top-1 aboutusP1Div">
        <p className='text-[16px] text-[#11183A4D] aboutusP1'>О нас</p>
      </div>
      <div className="">
        <h1 className='text-[#11183A] text-[44px] font-medium w-[650px] leading-tight ACH1'>«РуфСтрой» — надёжность под вашей крышей с 2021 года</h1>
      <p className='ACDBrandP text-[#11183A80] text-[16px] w-[520px] leading-tight mt-7'>Наша компания занимается всеми видами кровельных работ на плоской кровле в Новосибирске и области. Также мы выполняем проектирование и разработку узлов для плоских кровель, определяем подходящую систему исходя из параметров вашего объекта и выполняем поставку всех необходимых материалов. ыполняем как эксплуатриемы, так и неэксплутируемые кровли с применением ПВХ мембран и битумно полимерных матреиалов. 
Мы знаем как создать надежную и долговечную крышу для вашего объекта</p>
      </div>
      </div>
      <div className="mt-28 flex items-start gap-[210px] ACDNumber">
<div className="bg-[#11183A0D] w-24 p-2 rounded-[10px] flex justify-center relative top-2 ACDNumDiv">
        <p className='text-[16px] text-[#11183A4D] ACDNumP'>В цифрах</p>
      </div>
      <div className="">
        <h1 className='text-[#11183A] text-[44px] font-medium w-[650px] leading-tight AboutComH1 ACH1'>Опыт и масштаб</h1>
    <p className='AboutCP text-[#11183A80] text-[16px] mt-12'>Выполнили кровли на</p>
    <h2 className='AboutCH2 text-[#11183A] text-[86px] font-normal mt-6'>50+</h2>
    <p className='AboutCP text-[#11183A80] text-[16px] mt-6'>коттеджах</p>
    <h2 className='AboutCH2 text-[#11183A] text-[86px] font-normal mt-12'>10 000м²+</h2>
       <p className='AboutCP text-[#11183A80] text-[16px] mt-6'>Кровель за 2024 год</p>

       <div className="flex items-center gap-3.5 mt-14">
            <img className='relative top-0.5' src="../../images/iconRight.svg" alt="" />
            <p className='text-[#11183A80] text-[16px] AboutComP '>Частные дома</p>
       </div>
       <div className="flex items-center gap-3.5 mt-2.5">
            <img className='relative top-0.5' src="../../images/iconRight.svg" alt="" />
            <p className='text-[#11183A80] text-[16px] AboutComP '>Коммерческие объекты</p>
       </div>
       <div className="flex items-center gap-3.5 mt-2.5">
            <img className='relative top-0.5' src="../../images/iconRight.svg" alt="" />
            <p className='text-[#11183A80] text-[16px] AboutComP '>Склады и производственные здания</p>
       </div>
      </div>
      </div>
      <div className="flex gap-[210px] items-start mt-28 ACDAdvantages">

         <div className="bg-[#11183A0D] w-32 p-2 rounded-[10px] flex justify-center relative top-3 ">
        <p className='text-[16px] text-[#11183A4D] aboutusP1'>Преимущества</p>
      </div>
      <div className="">
        <h1 className='text-[#11183A] text-[44px] font-medium w-[650px] leading-tight ACH1'>Почему именно мы?</h1>
      <p className='ACDAdvanP text-[#11183A80] text-[16px] w-[520px] leading-tight mt-7'>Обращаясь в нашу компанию вы получите высокий уровень обслуживания. 
Мы выполняем комплекс работ с поставкой всех необходимых <br /> материалолв и гибкой системой скидок
Нам доверяют объекты высокого уровня</p>
      </div>
      </div>
      <div className="flex items-start gap-[245px] mt-[110px] ABOUTComPanyCustem">

     
        <div className="bg-[#11183A0D] w-22 p-2 rounded-[10px] flex justify-center relative top-3 aboutusP1Div">
        <p className='text-[16px] text-[#11183A4D] aboutusP1'>Клиенты</p>
      </div>
      <div className="">
        <h1 className='text-[#11183A] text-[44px] font-medium w-[650px] leading-tight ACH1'>Наши заказчики</h1>
      <p className='AboutComP22 text-[#11183A80] text-[16px] w-[280px] leading-tight mt-14'>Мы работаем с проверенными современными материалами</p>
      </div>
       </div>
      <div className="flex gap-2.5 mt-14 ACDCards">
            {cards.map((el, index) =>(
                <div key={index} className="bg-white w-[365px] p-2.5 rounded-[10px] flex flex-col">
                        <p className='CardAboutP1 text-[#11183A4D] text-[16px]'>{el.number}</p>
                        <h2 className='CardAboutH2 text-[#11183A] text-[22px] font-medium mt-4'>{el.name}</h2>
                        <p className='CardAboutP2 text-[#11183A80] text-[16px] mt-auto'>{el.list}</p>
                </div>
            ))}
      </div>
    </div>
    <div className="mt-28 Boss">
       <div className="px-42 pt-14 pb-12 bossDiv">
            <div className="flex items-start gap-[200px] bossDiv2">

           <div className="bg-[#F3F5FB0D] w-32 p-2 rounded-[10px] flex justify-center relative top-3  bossP2Div">
        <p className='bossP2 text-[16px] text-[#F3F5FB4D]'>Руководство</p>
      </div>
      <div className="">

    <h1 className='BossH1 text-[42px] text-[#F3F5FB] w-[700px] leading-tight font-medium'>Наш ведущий специалист</h1>
    <div className="flex items-center gap-12 aboutBoss">

    
    <div className="">
        <h2 className='BossH2 text-[#F3F5FB] text-[22px] w-[280px] mt-14 font-medium'>Шнайдер Виталий, руководитель компании «РуфСтрой»</h2>
        <p className='BossP1 w-[355px] text-[#F3F5FB80] text-[14px] mt-6 '>Закончил НГАСУ(Сибстрин) в 2014 году по специальности промышленное гражданское строительство.</p>
        <p className='BossP w-[355px] text-[#F3F5FB80] text-[14px] mt-6 '>Сейчас за плечами более десяти лет опыта в кровельных работах, за это время я детально изучил все нюансы этой профессии и знаю, как сделать крышу долговечной.</p>
        <p className='BossP w-[355px] text-[#F3F5FB80] text-[14px] mt-6'>Я лично курирую каждый проект и работаю с полной отдачей, что позволяет гарантировать высокий уровень качества выполняемых работ.</p>
    </div>
    <img className='imgBoss mt-14' src="../../images/Boss.png" alt="" />
    </div>
      </div>
            </div>
        </div>
     </div>
     <div className="px-42 mt-24 flex items-start gap-[190px] ABOUTUSRESPon">
        
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
    <div className="Footer mt-28">
        <Footer />
    </div>
    </div>
  )
}

export default AboutCompany