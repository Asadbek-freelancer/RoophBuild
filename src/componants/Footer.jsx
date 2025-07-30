import React from 'react'
import '../style/footer.css'
import { HiPhone } from "react-icons/hi2";
const Footer = () => {
    const info = [
        {name: '630099, г. Новосибирск, ул. Чаплыгина 2/1, офис 509, этаж 5', icon: '../../icons/location.svg'},
        {name: 'Пн-Сб с 9:00 до 18:00', icon: '../../icons/calendar.svg'},
        {name: '+7 903 935 7899', icon: '../../icons/phone.svg'},
        {name: 'roofstroy54@ya.ru', icon: '../../icons/mail.svg'}
    ]
  return (
    <div>
        
                <div className="flex items-start gap-[200px] px-42 py-14 Footerdiv">
             <div className="bg-[#F3F5FB0D] w-28 p-2 rounded-[10px] flex justify-center relative top-2 footerDiv">
        <p className='text-[16px] text-[#F3F5FB4D] footerP1'>Наш адрес</p>
      </div>
      <div className="">

      <h1 className=' text-[42px] text-[#F3F5FB] font-medium leading-tight w-[460px] footerH1'>Место, где мы можем познакомиться</h1>
      <div className="mt-14 footerUL">
        {info.map((element, index) => (
            <div key={index} className="flex items-center gap-3.5 mb-3.5 footerP">
                <img src={element.icon} alt="" />
                <p className='text-[#F3F5FB80] footerP2'>{element.name}</p>
            </div>
        ))}
      </div>
      <div className="flex items-center gap-8 footerDivquestion">
        <h2 className='text-white text-[30px] footerH2'>Остались вопросы?</h2>
        <div className="flex mt-[10px]  relative left-[-20px] footerinput">
        
                <HiPhone color='#ffffff33' size={'18px'} className='relative top-4 left-8'/>
                <input type="text" placeholder='Ваш телефон' className='inputRegis relative text-[16px] text-[#ffffff33] px-[41px] py-[11px]  bg-[#F3F5FB1A] border-2 border-[#F3F5FB99] rounded-[10px]'/>
        </div>
          <div  className="buttondiv5 cursor-pointer flex justify-center w-[135px] gap-3 bg-indigo-600 hover:bg-indigo-700 text-white  px-2 py-3 rounded-[15px] transition-all mt-2">
            <button className='cursor-pointer'>

          Отправить
            </button>
          
        </div>
      </div>
      <div className="">
         <div className='rounded-[10px] w-[828px] h-[300px] mt-7 map' style={{ position: 'relative', overflow: 'hidden' }}>
      <a
        href="https://yandex.uz/maps/65/novosibirsk/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 0 }}
      >
        Новосибирск
      </a>
      <a
        href="https://yandex.uz/maps/65/novosibirsk/house/ulitsa_chaplygina_2_1/bEsYfwdnSEAEQFtvfXxzdXlkbQ==/?ll=82.907153%2C55.024580&utm_medium=mapframe&utm_source=maps&z=16.67"
        style={{ color: '#eee', fontSize: 12, position: 'absolute', top: 14 }}
      >
        Улица Чаплыгина, 2/1 — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=82.907153%2C55.024580&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzA5MjE1NBJI0KDQvtGB0YHQuNGPLCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDRg9C70LjRhtCwINCn0LDQv9C70YvQs9C40L3QsCwgMi8xIgoNdtClQhUrGVxC&z=16.67"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
        title="Яндекс карта"
        style={{ position: 'relative' }}
      ></iframe>
    </div>
      </div>
      <div className="flex gap-6 mt-8 footerbtn">
          <div  className="buttondiv5 cursor-pointer flex items-center w-[135px] gap-3.5 bg-indigo-600 hover:bg-indigo-700 text-white px-2.5 py-1 rounded-[10px] transition-all">
            <button className='cursor-pointer'>

          Telegram
            </button>
            <div className="vector9 flex justify-center relative left-1.5">

        <img className='w-[10px]' src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
          <div  className="buttondiv5 cursor-pointer flex items-center w-[135px] gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pr-1 px-2.5 py-1 rounded-[10px] transition-all">
            <button className='cursor-pointer'>

          WhatsApp
            </button>
            <div className="vector0">

        <img className='w-[10px]' src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
      </div>
      <div className="mt-14">

      <p className='footerlastP text-[16px] text-[#F3F5FB80] mb-3.5'>Разработка сайта ↗</p>
      <p className='footerlastP text-[16px] text-[#F3F5FB80]'>Политика конфиденциальности ↗</p>
      </div>
      </div>
        </div>
        </div>
  
  )
}

export default Footer