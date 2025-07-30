import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import '../style/ballasta.css'
const Ballasta = () => {
    const cards = [
        {name: 'Преимуществ балластной системы намного больше, чем недостатков.', image: '../../images/ballastacardimg.png', describtion: '1. При использовании данной системы, мы не нарушаем слой пароизоляции проколом основания, это позволяет пароизоляции выполнять свою функцию практически на 100%. В случае с системой с механической фиксацией, крепеж в основание оставляет прокол, через который происходит попадание влаги в пирог кровли, хоть и в небольшом количестве.  '},
        {name: ' 2. Очень важная роль балласта для ПВХ мембраны, это защита от попадания прямых солнечных лучей, основное разрушение и старение мембраны происходит от попадания воздействие УФ лучей', image: '../../images/ballastamobileimg2.png', describtion: ' 3.Балластная кровля может дольше обходиться без обслуживания, поскольку ее устройство не способствует быстрому засорению лиственников, как в случае механического крепления.'},
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
    
            <h2 className='materialTwoH2 text-[22px] text-[#F3F5FB] text-center'>Балластная кровля</h2>
        </div>
         <h1 className='MaterialH1 text-7xl text-[#F3F5FB] text-center mt-5 pb-[158px] w-[890px] font-medium '>Балластная кровля для частных домов </h1>
          </div>
        </div>
        <div className="px-96 BALLASTA">
            <div className="">

           
            <h1 className='BallastaH1 text-[#11183A] text-[42px] font-medium mt-24'>Когда применяется</h1>
            <img className='ballastafirstimg mt-6' src="../../images/ballastaimg.png" alt="" />
            <p className='ballastaP text-[#11183A80] text-[18px] w-[830px] mt-6'>Балластная кровля с применением ПВХ-мембраны — это один из популярных и эффективных способов устройства плоской эксплуатируемой или неэксплуатируемой крыши, при котором все слои кровельного пирога(утеплитель, уклонообразующий слой, ПВХ мембрана) свободно укладываются на основание и прижимаются сверху балластом (например, щебнем, гравием или тротуарной плиткой).
<br />
<br />
 Особенности монтажа:
- Мембрана укладывается без клея и без механического крепления (только по периметру и в местах примыканий).
- Все швы свариваются горячим воздухом, образуя герметичное соединение.
- На парапетах, примыканиях к трубам, шахтам и т.д. мембрана заводится вертикально и фиксируется.
- Поверх мембраны укладывается геотекстиль (не менее 300 г/м²) как защитный слой.
 Балласт (например, щебень фр. 5–20 мм) распределяется равномерно по всей поверхности — от 40 до 120 кг/м² в зависимости от ветровой нагрузки.</p>
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
    <h2 className='text-[#11183A] text-[72px] ballaH2 mt-13 font-medium'>от 4 400 р/м²</h2>
    <p className='text-[#11183A80] text-[16px] ballaP mt-6'>Материал</p>
    <h2 className='text-[#11183A] text-[72px] ballaH2 mt-6 font-medium'>от 1 600 р/м²</h2>
    <p className='text-[#11183A80] text-[16px] ballaP mt-6'>Работа</p>
</div>
        </div>
        <div className="Footer mt-26">
            <Footer />
        </div>
    </div>
  )
}

export default Ballasta