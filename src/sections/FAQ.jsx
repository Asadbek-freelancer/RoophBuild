import React from 'react'
import '../style/faq.css'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import '../style/footer.css'
const FAQ = () => {
  return (
    <div className=''>
        <div className="FAQ">
<img className='faqmobileimg' src="../../images/faqmobileimg.png" alt="" />
        
        <div className="flex justify-center pb-[61px]">

        <Navbar />
        </div>
<div className="">


        <div className="flex gap-3 justify-center FaqDiv">
            <h2 className='FaqH2 text-[22px] text-[#F3F5FB]'>Главная</h2>
            <img className='mt-1' src="../../icons/arrowRight.svg" alt="" />
            <h2 className='FaqH2 text-[22px] text-[#F3F5FB]'>Вопрос-ответ</h2>
        </div>

        <h1 className='FaqH1 text-7xl text-[#F3F5FB] text-center mt-5 pb-[144px] font-medium'>Вопрос-ответ</h1>
      </div>  
</div>
      <div className="mt-30 px-42 FaqDIV">
            <div className="flex gap-2.5 FaqDIVLetter">
                <p className='text-[#11183A4D] text-[16px] FaqNumber '>01</p>
                <div className="mb-[65px]">

                <h3 className='FaqH3 text-[#11183A] text-[33px] leading-tight font-medium'>Как выбрать подходящую систему для моей плоской кровли?</h3>
                <p className='FaqP text-[#11183A80] text-[16px] w-[1090px] mt-3.5 leading-tight'>В большинстве случаев под параметры плоской кровли подходит практически любая система, самыми эффективными и распространнеными являются кровли с ПВХ мебраной - это балластная кровля и кровля с механической фиксацией в основание (без балласта).</p>
                </div>
            </div>
            <div className="flex gap-2.5 FaqDIVLetter">
                <p className='text-[#11183A4D] text-[16px] FaqNumber '>02</p>
                <div className="mb-[60px]">

                <h3 className='FaqH3 text-[#11183A] text-[33px] leading-tight font-medium'>Какая кровля лучше Балластная или мембранная?</h3>
                <p className='FaqP text-[#11183A80] text-[16px] w-[1090px] mt-3.5 leading-tight'>В случае с применением балластной системы, ПВХ мембрана защищена от попадания прямых солнечных лучей, что продлевает срок ее службы.</p>
                </div>
            </div>
            <div className="flex gap-2.5 FaqDIVLetter">
                <p className='text-[#11183A4D] text-[16px] FaqNumber '>03</p>
                <div className="mb-[45px]">

                <h3 className='FaqH3 text-[#11183A] text-[33px] leading-tight font-medium'>На какую толщину необходимо утеплять кровлю?</h3>
                <p className='FaqP text-[#11183A80] text-[16px] w-[1090px] mt-3.5 leading-tight'>В нашем регионе минимальная толщина утепления кровли материалами из экструзинного пенополистерола составляет 180мм, Но в некоторых проектах мы встречаем толщину 150мм. Для эффективной работы конструкции рекомендуемая толщина для частных домов составляет 200мм.4.</p>
                </div>
            </div>
            <div className="flex gap-2.5 FaqDIVLetter">
                <p className='text-[#11183A4D] text-[16px] FaqNumber '>04</p>
                <div className="mb-[45px]">

                <h3 className='FaqH3 text-[#11183A] text-[33px] leading-tight font-medium'>Какие лучше воронки парапетные (наружные) или внутренние?</h3>
                <p className='FaqP text-[#11183A80] text-[16px] w-[1090px] mt-3.5 leading-tight'>Если выбирать между внутренним и наружные водостоком, более надёжным вариантом является внутренний водосток. В большинстве случаев труба идёт через контур здания и находится в тёплом помещении. Поэтому нет опасений, что в зимнее время может образоваться ледяная пробка в отличие от парапетной. </p>
                </div>
            </div>
            <div className="flex gap-2.5 FaqDIVLetter">
                <p className='text-[#11183A4D] text-[16px] FaqNumber '>05</p>
                <div className="mb-[45px]">

                <h3 className='FaqH3 text-[#11183A] text-[33px] leading-tight font-medium'>Сколько составляет срок службы плоской кровли? </h3>
                <p className='FaqP text-[#11183A80] text-[16px] w-[520px] mt-3.5 leading-tight'>Срок службы плоской кровли без ремонта, может доходить до 50 лет. Все завист от выбора системы и соблюдения правил эксплуатации.</p>
                </div>
            </div>
            <div className="flex gap-2.5 FaqDIVLetter">
                <p className='text-[#11183A4D] text-[16px] FaqNumber '>06</p>
                <div className="mb-[120px]">

                <h3 className='FaqH3 text-[#11183A] text-[33px] leading-tight font-medium'>Что входит в 3 варианта расчета?</h3>
                <p className='FaqP text-[#11183A80] text-[16px] w-[1090px] mt-3.5 leading-tight'>Подробные расчеты смет оптимыльных решений для вашей кровли, например: 1-й вариант - Балластная, 2 - мембранная , 3 - со стяжкой</p>
                </div>
            </div>
      </div>
      <div className="Footer">
      <Footer />
     </div>
    </div>
  )
}

export default FAQ