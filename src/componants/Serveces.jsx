import React from 'react'
import { Link } from 'react-router'
import '../style/serveces.css'
const Serveces = () => {
  const Cards = [
    {name: 'Монтаж балластной кровли', image: '../../images/ballasta.png', path: 'балластной'},
    {name: 'Монтаж мембранной кровли', image: '../../images/membrana.png', path: 'мембранной'},
    {name: 'Монтаж наплавляемой кровли', image: '../../images/naplav.png', path: 'наплавляемой'},
    {name: 'МОбследование и ремонт кровель', image: '../../images/recover.png', path: 'ремонт'},
    {name: 'Монтаж кровель промышленных и складских зданий', image: '../../images/promishlen.png', path: 'промышленных'},
    {name: 'Эксплуатируемая кровля', image: '../../images/ekspluatatsiya.png', path: 'Эксплуатируемая'}
  ]
  return (
    <div>

      <div className="flex items-start gap-[200px] servediv">
        <div className="bg-[#11183A0D] w-18 py-2 px-3 rounded-[10px] flex justify-center relative top-4 servesDiv2">
        <p className='servesP2 text-[16px] text-[#11183A4D]'>Услуги</p>
      </div>
      <h1 className='ServeH1 text-[42px] font-medium text-[#11183A] w-[800px]'>В среднем 7 дней на монтаж плоской кровли площадью 250 м²</h1>
      </div>
      <div className="flex flex-wrap gap-3">
    {Cards.map((el, index) => (
      <div key={index} className="bg-white w-[370px] flex flex-col p-2 rounded mt-12 servecard">
          <img src={el.image} alt={el.name} />
          <h3 className='w-[330px]'>{el.name}</h3>
          <Link to={el.path} className=''>
           <div  className={`buttondiv5 cursor-pointer flex items-center w-[145px] gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pr-1 px-2.5 py-1 rounded-[10px] transition-all  ${
          index === 3 || index === 5 ? 'mt-7' : 'mt-3'
        }`}>
            <button className='cursor-pointer'>

          Подробнее
            </button>
            <div className="vector4">

        <img className='' src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
          </Link>
      </div>
    ))}
      </div>
    </div>
  )
}

export default Serveces