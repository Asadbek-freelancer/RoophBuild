import React from 'react'
import Navbar from './Navbar'
import '../style/header.css'
import InputPhone from '../input/InputPhone'

const Header = () => {
  const cards = [
    {name: 'Экономия до 20% на материалах', icon: '../../icons/time.svg'},
    {name: 'Срок службы до 50 лет', icon: '../../icons/shield.svg'},
    {name: 'Работаем без предоплат', icon: '../../icons/money.svg'}
  ]
  return (
    <div className='div'>
        <div className="flex justify-center flex-wrap">     
        
        <Navbar />
      </div>
      <div className="flex flex-col items-center ">

      <h1 className='header_h1 leading-tight'>Монтаж плоских
кровель в Новосибирске
</h1>
<p className='headerP'>с готовностью 7 дней</p>
 

<InputPhone />
      
    <p className='secondP'>
      Рассчитаем 3 варианта сметы и составим проект кровли
      </p>

<div className="flex gap-9 flex-wrap cards">
  {cards.map((card, index ) => (
    <div key={index} className="card flex flex-col items-center bg-[#F3F5FB1A] py-6 px-32 ">
      <img src={card.icon} alt={card.name} className="cardIcon" />
      <p className="cardP w-[140px] text-center mt-5 text-[#F3F5FB]">{card.name}</p>
    </div>
))}
</div>
      </div>
    </div>
  )
}

export default Header