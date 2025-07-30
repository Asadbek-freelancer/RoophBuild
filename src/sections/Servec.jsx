import React from 'react'
import Navbar from '../componants/Navbar'
import '../style/servec.css'
import { Link } from 'react-router'
import Footer from '../componants/Footer'
const Servec = () => {
     const Cards = [
    {name: 'Монтаж балластной кровли', image: '../../images/Serveimg1.png', path: 'балластной'},
    {name: 'Монтаж мембранной кровли', image: '../../images/Serveimg2.png', path: 'мембранной'},
    {name: 'Монтаж наплавляемой кровли', image: '../../images/Serveimg3.png', path: 'наплавляемой'},
    {name: 'МОбследование и ремонт кровель', image: '../../images/Serveimg4.png', path: 'ремонт'},
    {name: 'Монтаж кровель промышленных и складских зданий', image: '../../images/Serveimg5.png', path: 'промышленных'},
    {name: 'Эксплуатируемая кровля', image: '../../images/Serveimg6.png', path: 'Эксплуатируемая'}
  ]
  return (
    <div>
           <div className="FAQ">
<img className='contactsmobileimg' src="../../images/imgContacts.png" alt="" />
        
        <div className="flex justify-center pb-[61px]">

        <Navbar />
        </div>
<div className="">


        <div className="flex gap-3 justify-center FaqDiv">
            <h2 className='FaqH2 text-[22px] text-[#F3F5FB]'>Главная</h2>
            <img className='mt-1' src="../../icons/arrowRight.svg" alt="" />
            <h2 className='text-[22px] text-[#F3F5FB] contactH2'>Услуги</h2>
        </div>

        <h1 className='mobileH1Serv text-7xl text-[#F3F5FB] text-center mt-7 pb-[144px] font-medium'>Услуги</h1>
       
      </div>  
</div>
    <div className="mt-28 px-42 SERVE">

   
 <div className="flex items-start gap-[200px] servediv">
        <div className="bg-[#11183A0D] w-18 py-2 px-3 rounded-[10px] flex justify-center relative top-4 servesDiv2">
        <p className='servesP2 text-[16px] text-[#11183A4D]'>Услуги</p>
      </div>
      <h1 className='ServeH1 text-[42px] font-medium text-[#11183A] w-[450px]'>Типы кровли, которые мы выполняем</h1>
      </div>
      <div className="flex flex-wrap gap-3">
    {Cards.map((el, index) => (
      <div key={index} className="bg-white w-[370px] flex flex-col p-2 rounded mt-12 servecard">
          <img src={el.image} alt={el.name} />
          <h3 className='w-[330px]'>{el.name}</h3>
          <Link to={el.path}>
           <div  className={`buttondivSerV cursor-pointer flex items-center w-[150px] gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pr-2 px-2.5 py-2 rounded-[10px] transition-all ${
          index === 3 || index === 5 ? 'mt-7' : 'mt-3'
        }`}>
            <button className='cursor-pointer'>

          Подробнее
            </button>
            <div className="vectorServ">

        <img className='' src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
          </Link>
      </div>
    ))}
      </div>
 </div>

<div className="Footer mt-22">
    <Footer />
</div>
    </div>
  )
}

export default Servec