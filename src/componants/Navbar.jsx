import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import '../style/mobileNavbar.css'
import '../style/menu.css'
const navItems = [
  { name: 'РуфСтрой', path: '/' },
  { name: 'Портфолио', path: '/portfolio' },
  { name: 'Цены', path: '/prices' },
  { name: 'О компании', path: '/about' },
  { name: 'Услуги', path: '/services' },
  { name: 'Сертификаты', path: '/certificates' },
  { name: 'Материалы', path: '#' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Контакты', path: '/contacts' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setopenMenu] = useState(false)
  const dropdownRef = useRef(null)
const [activeItem, setActiveItem] = useState(navItems[0])
  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }
  const handleToggle2 = () => {
    setopenMenu(prev => !prev)
  }
 

/*   const [isMenuOpen, setIsMenuOpen] = useState(false);
 */

  // Закрытие dropdown при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="bg-gray-500 py-1 relative z-10 rounded-2xl w-[1105px] flex items-center gap-3 justify-center mt-9  maindiv">
        <div className=" ">
<ul className="flex gap-2 bg-[#F3F5FB]/20 px-0 py-3 rounded-2xl font-inter text-[13.5px] relative items-center full-nav">
  {navItems.map((item, index) =>
    item.name === 'Материалы' ? (
      <li key={index} className="relative" ref={dropdownRef}>
        <button
          onClick={handleToggle}
          className={`flex items-center justify-center gap-1 px-3 py-1 rounded-full transition duration-200 ${
            isOpen
              ? 'bg-white text-black font-bold shadow-md -translate-y-[2px] z-20'
              : 'text-[#F3F5FB99] hover:text-gray-700 hover:font-medium'
          }`}
        >
          {item.name}
          <MdOutlineKeyboardArrowDown className="text-[14px]" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded p-2 w-56 z-50">
            <ul className=" space-y-2">
              <li>
                <NavLink
                  to="/materials/one"
                  className="block text-gray-700 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Что нужно учитывать
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/materials/two"
                  className="block text-gray-700 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Другой материал
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </li>
    ) : (
      <li key={index}>
        <NavLink
        onClick={() => {
  setIsOpen(false);
  setActiveItem(item);
}}
          to={item.path}
          className={({ isActive }) =>
            `px-4 py-4 rounded-2xl transition duration-200 ${
              isActive
                ? 'bg-white text-black font-bold shadow- -translate-y-[10px]'
                : 'text-[#F3F5FB99] hover:text-gray-700 hover:font-medium'
            }`
          }
        >
          {item.name}
        </NavLink>
      </li>
    )
  )}
</ul>
<div className="flex gap-1.5 justify-center">


<div className="active-label  ">
  <NavLink
    to={activeItem.path}
    className="text-black text-sm w-[110px] text-center font-bold px-3 py-3 rounded-xl bg-white"
    >
    {activeItem.name}
  </NavLink>
</div>

<div onClick={handleToggle2} className="flex items-center gap-5 cursor-pointer menudiv ">
    <p className='menu'>Меню</p>
    <img src="../../icons/menu.svg" alt=""  className='burgermenu'/>
</div>

<div className="">
  {openMenu && (
    <ul className="flex flex-col mt-1 bg-[#535458] px-2 py-4 rounded-2xl text-sm absolute top-14 right-32 items-center full-nav-mobile">
  {navItems.map((item, index) =>
    item.name === 'Материалы' ? (
      <li key={index} className="relative" ref={dropdownRef}>
        <button
          onClick={handleToggle}
          className={`flex items-center justify-center gap-3 px-3 py-1 rounded-full transition duration-200 ${
            isOpen
              ? 'bg-white text-black font-bold shadow-md -translate-y-[2px] z-20'
              : 'text-[#F3F5FB99] hover:text-gray-700 hover:font-medium'
          }`}
        >
          {item.name}
          <MdOutlineKeyboardArrowDown className="text-[14px]" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded p-2 w-56 z-50">
            <ul className=" space-y-2 ">
              <li>
                <NavLink
                  to="/materials/one"
                  className="block text-gray-700 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Что нужно учитывать
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/materials/two"
                  className="block text-gray-700 hover:text-black"
                  onClick={() => setopenMenu(false)}
                >
                  Другой материал
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </li>
    ) : (
      <li key={index}>
        <NavLink
        onClick={() => {
  setIsOpen(false);
  setActiveItem(item);
}}
          to={item.path}
          className={({ isActive }) =>
            `px-4 py-4 rounded-2xl transition duration-200 ${
              isActive
                ? 'bg-white text-black font-bold shadow- -translate-y-[10px]'
                : 'text-[#F3F5FB99] hover:text-gray-700 hover:font-medium'
            }`
          }
        >
          {item.name}
        </NavLink>
      </li>
    )
  )}
</ul>
  )}
</div>
      </div>
   
       </div>
       <a href="tel:+998901234567" className="text-[#F3F5FB] firstbtn">
        <button className='cursor-pointer bg-[#4560E9] py-3.5 px-4 rounded-2xl'>

      +998 (90) 123-45-67
        </button>
    </a>
       <a href="tel:+998901234567" className="text-[#F3F5FB] btnphone">
        <div className='flex items-center gap-[10px] cursor-pointer bg-[#4560E9] py-1.5 px-2 rounded-2xl'>

      Позвонить
        <div className="vector">

        <img src="../../icons/Vector.svg" alt="" />
        </div>
        </div>
    </a>
    </div>
  )
}

export default Navbar
