import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import '../style/ballasta.css'
const Naplav = () => {
    const cards = [
        {image: '../../images/Naplavimg1.png', describtion: 'В качестве пароизоляции предлагаем использовать недорогой наплавляемый битумно-полимерный материал также с маркировкой ЭПП.В качестве теплоизоляции - экструдированный пенополистирол (ЭППС), толщина подбирается в зависимости от региона и энергоэффективности здания. Для нашего региона, оптимальная толщина составляет 200мм.С помощью керамзита можно выполнить любые, самые сложные формы уклонов кровли к водосточным воронкам.По керамзиту выполняется стяжка, она может быть цементно-песчаной толщиной 50-60мм, либо сборной, состоящей из двух слоев плоского шифера и служит надежным основанием для последующего монтажа наплавляемой гидроизоляции.'},
        {image: '../../images/Naplavimg2.png', describtion: 'Основное преимущество сборной стяжки в том, что она быстро монтируется. При монтаже отсутствуют «мокрые» процессы, поэтому не  ждать, когда стяжка высохнет и соответственно такую стяжку можно монтировать даже при минусовой температуре. Шифер укладывается в два слоя с перехлестом стыков между слоями, скручивается оцинкованными саморезами и получается единая, жестка конструкция. Затем выполняется устройство наплавляемой гидроизоляции. '},
        {image: '../../images/Naplavimg3.png', describtion: 'Наплавляемая кровля — это надежное решение для гидроизоляции плоских крыш. Ее преимущества включают высокую герметичность, устойчивость к климатическим воздействиям и доступную стоимость. Однако монтаж проводится при температуре воздуха от +5°C и выше, требует осторожности и профессионального подхода из-за использования огня. Если ваш проект соответствует условиям, где наплавляемая кровля будет эффективной, это покрытие обеспечит защиту крыши на долгие годы при условии правильного ухода и обслуживания.'},
        { image: '../../images/Naplavimg4.png', describtion: ''}
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
    
            <h2 className='materialTwoH2 text-[22px] text-[#F3F5FB] text-center'>Наплавляемая кровля</h2>
        </div>
         <h1 className='MaterialH1 text-7xl text-[#F3F5FB] text-center mt-5 pb-[158px] w-[890px] font-medium '>Наплавляемая кровля для частных домов</h1>
          </div>
        </div>
        <div className="px-96 BALLASTA">
            <div className="">

           
            <h1 className='BallastaH1 text-[#11183A] text-[42px] font-medium mt-24'>Когда применяется</h1>
            <img className='ballastafirstimg mt-6' src="../../images/Naplavimg.png" alt="" />
            <p className='ballastaP text-[#11183A80] text-[18px] w-[830px] mt-6'>Наплавляемая кровля - это классический вариант выполнения плоской кровли с применением керамзита, стяжки и газовой горелки. В качестве гидроизоляции применяются современные наплавляемые битумно-полимерный материалы, которые устраиваются в 2 и более слоев.</p>
        </div>
<div className="">
    {cards.map((el, index) =>(
        <div key={index} className="">
            <p className='ballastaP1 text-[#11183A80] text-[18px] mt-8 w-[660px]'>{el.name}</p>
            <img className='ballastaimg mt-6' src={el.image} alt="" />
            <p className='ballastaP2 text-[#11183A80] text-[18px] mt-6 w-[830px]'>{el.describtion}</p>
        </div>
    ))}
</div>
<div className="">
    <h1 className='text-[#11183A] text-[42px] BallastaH1 mt-20 font-medium'>Стоимость работ и материалов для монтажа мембранной плоской кровли</h1>
    <h2 className='text-[#11183A] text-[72px] ballaH2 mt-13 font-medium'>от 6 000 р/м²</h2>
    <p className='text-[#11183A80] text-[16px] ballaP mt-6'>Материал</p>
    <h2 className='text-[#11183A] text-[72px] ballaH2 mt-6 font-medium'>от 2 200 р/м²</h2>
    <p className='text-[#11183A80] text-[16px] ballaP mt-6'>Работа</p>
</div>
        </div>
        <div className="Footer mt-26">
            <Footer />
        </div>
    </div>
  )
}

export default Naplav