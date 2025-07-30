import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import { HiMiniUser } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";

const Portfolio = () => {
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
    
            <h2 className='materialTwoH2 text-[22px] text-[#F3F5FB] text-center'>Портфолио</h2>
        </div>
         <h1 className='MaterialH1 text-7xl text-[#F3F5FB] text-center mt-5 pb-[158px] w-[890px] font-medium '>Плоская кровля
в Новосибирске и области</h1>
          </div>
        </div>
        <div className="px-42 mt-28 PortfolioMAIN">
          <div className="flex gap-[200px] items-start PortfolioMAINDIV">

                <div className="bg-[#11183A0D] w-30 p-2 rounded-[10px] flex justify-center relative top-4 PortPFirtsDiv">
        <p className='text-[16px] text-[#11183A4D] PortPFirts'>Наши работы</p>
      </div>
      <h2 className='MateH2 text-[#11183A] text-[42px] font-medium w-[700px] leading-tight'>Работать с профессионалами — это спокойно и без переплат</h2>
          </div>
      <div className="">
        <div className="bg-white p-5 rounded-[10px] flex items-end gap-7 mt-10 MAINPORTCARDS">
          <div className="">

         
          <h1 className='text-[#11183A] text-[32px] mb-3'>КП «Локис»</h1>
          <div className="">

          <img src="../../images/PRTFimf.png" alt="" />
          <div className="flex gap-[35px] mt-3.5 sliderimgs" >
            <img src="../../images/portsliderimg.png" alt="" />
            <img src="../../images/PRTFimg1.png" alt="" />
            <img src="../../images/PRTFimg2.png" alt="" />
            <img src="../../images/PRTFimg3.png" alt="" />
          </div>
          </div>
           </div>
        <div className="">
          <h3 className='PortfirstH3 text-[#11183A80] text-[24px]'>Было выполнено:</h3>
          <ul className='LIPortfolio text-[#11183A80] text-[24px] ml-5'>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>пароизоляционная пленка</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>теплоизоляция из плит Пеноплекс 150мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>уклонообразующие плиты Пеноплекс УКЛОН 1,7%</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>утепление парапетов 50мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 100г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>ПВХ мембрана Технониколь 1,5мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>воронки с электрообогревом 2шт</li>
            </div>
          </ul>
            <div className="flex gap-14 mt-[116px] mb-[-15px] bluenumbers">

                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Площадь кровли</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>260 м²</h1>
                    </div>
                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Срок реализации</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>12 дней</h1>
                    </div>
            </div>
        </div>
        </div>
        <div className="bg-white p-5 rounded-[10px] flex items-end gap-7 mt-10 MAINPORTCARDS">
          <div className="">

         
          <h1 className='text-[#11183A] text-[32px] mb-3'>КП «Озерный»</h1>
          <div className="">

          <img src="../../images/A.png" alt="" />
          <div className="flex gap-[35px] mt-3.5 sliderimgs" >
            <img src="../../images/A21.png" alt="" />
            <img src="../../images/A22.png" alt="" />
            <img src="../../images/A23.png" alt="" />
            <img src="../../images/A24.png" alt="" />
          </div>
          </div>
           </div>
        <div className="">
          <h3 className='PortfirstH3 text-[#11183A80] text-[24px]'>Было выполнено:</h3>
          <ul className='LIPortfolio text-[#11183A80] text-[24px] ml-5'>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>битумная пароизоляция Биполь ЭПП</li>
            </div>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>теплоизоляция из плит Пеноплекс 150мм</li>
            </div>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>уклонообразующие плиты Пеноплекс УКЛОН 1,7%</li>
            </div>
           
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>утепление парапетов 50мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 100г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>ПВХ мембрана Технониколь 1,5мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 350г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>Щебень фр.5-20мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>Воронки внутреннего водостока 3ш  </li>
            </div>
          </ul>
            <div className="flex gap-14 mt-[40px] mb-[-15px] bluenumbers">

                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Площадь кровли</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>140 м²</h1>
                    </div>
                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Срок реализации</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>4 дня</h1>
                    </div>
            </div>
        </div>
        </div>
        <div className="bg-white p-5 rounded-[10px] flex items-end gap-7 mt-10 MAINPORTCARDS">
          <div className="">

         
          <h1 className='text-[#11183A] text-[32px] mb-3'>КП «Малые поляны»</h1>
          <div className="">

          <img src="../../images/B.png" alt="" />
          <div className="flex gap-[35px] mt-3.5 sliderimgs" >
            <img src="../../images/A17.png" alt="" />
            <img src="../../images/A18.png" alt="" />
            <img src="../../images/A19.png" alt="" />
            <img src="../../images/A20.png" alt="" />
          </div>
          </div>
           </div>
        <div className="">
          <h3 className='PortfirstH3 text-[#11183A80] text-[24px]'>Было выполнено:</h3>
          <ul className='LIPortfolio text-[#11183A80] text-[24px] ml-5'>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>пароизоляционная пленка</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>теплоизоляция из плит Пеноплекс 150мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>уклонообразующие плиты Пеноплекс УКЛОН 1,7%</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>утепление парапетов 50мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 100г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>ПВХ мембрана Технониколь 1,5мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>воронки с электрообогревом 2шт</li>
            </div>
          </ul>
            <div className="flex gap-14 mt-[116px] mb-[-15px] bluenumbers">

                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Площадь кровли</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>280 м²</h1>
                    </div>
                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Срок реализации</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>12 дней</h1>
                    </div>
            </div>
        </div>
        </div>
        <div className="bg-white p-5 rounded-[10px] flex items-end gap-7 mt-10 MAINPORTCARDS">
          <div className="">

         
          <h1 className='text-[#11183A] text-[32px] mb-3'>с. Морозово</h1>
          <div className="">

          <img src="../../images/C.png" alt="" />
          <div className="flex gap-[35px] mt-3.5 sliderimgs" >
            <img src="../../images/A13.png" alt="" />
            <img src="../../images/A14.png" alt="" />
            <img src="../../images/A15.png" alt="" />
            <img src="../../images/A16.png" alt="" />
          </div>
          </div>
           </div>
        <div className="">
          <h3 className='PortfirstH3 text-[#11183A80] text-[24px]'>Было выполнено:</h3>
            <ul className='LIPortfolio text-[#11183A80] text-[24px] ml-5'>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>битумная пароизоляция Биполь ЭПП</li>
            </div>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>теплоизоляция из плит Пеноплекс 150мм</li>
            </div>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>уклонообразующие плиты Пеноплекс УКЛОН 1,7%</li>
            </div>
           
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>утепление парапетов 50мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 100г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>ПВХ мембрана Технониколь 1,5мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 350г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>Щебень фр.5-20мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>Воронки внутреннего водостока 3ш  </li>
            </div>
          </ul>
            <div className="flex gap-14 mt-[40px] mb-[-15px] bluenumbers">

                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Площадь кровли</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>180 м²</h1>
                    </div>
                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Срок реализации</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>8 дней</h1>
                    </div>
            </div>
        </div>
        </div>
        <div className="bg-white p-5 rounded-[10px] flex items-end gap-7 mt-10 MAINPORTCARDS">
          <div className="">

         
          <h1 className='text-[#11183A] text-[32px] mb-3'>Банный комплекс</h1>
          <div className="">

          <img src="../../images/CC.png" alt="" />
          <div className="flex gap-[35px] mt-3.5 sliderimgs" >
            <img src="../../images/A9.png" alt="" />
            <img src="../../images/A10.png" alt="" />
            <img src="../../images/A11.png" alt="" />
            <img src="../../images/A12.png" alt="" />
          </div>
          </div>
           </div>
        <div className="">
          <h3 className='PortfirstH3 text-[#11183A80] text-[24px]'>Было выполнено:</h3>
              <ul className='LIPortfolio text-[#11183A80] text-[24px] ml-5'>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>битумная пароизоляция Биполь ЭПП</li>
            </div>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>теплоизоляция из плит Пеноплекс 150мм</li>
            </div>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>уклонообразующие плиты Пеноплекс УКЛОН 1,7%</li>
            </div>
           
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>утепление парапетов 50мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 100г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>ПВХ мембрана Технониколь 1,5мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 350г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>Щебень фр.5-20мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>Воронки 6шт</li>
            </div>
          </ul>
            <div className="flex gap-14 mt-[40px] mb-[-15px] bluenumbers">

                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Площадь кровли</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>650 м²</h1>
                    </div>
                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Срок реализации</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>20 дней</h1>
                    </div>
            </div>
        </div>
        </div>
        <div className="bg-white p-5 rounded-[10px] flex items-end gap-7 mt-10 MAINPORTCARDS">
          <div className="">

         
          <h1 className='text-[#11183A] text-[32px] mb-3'>КП «Тандем»</h1>
          <div className="">

          <img src="../../images/CCC.png" alt="" />
          <div className="flex gap-[35px] mt-3.5 sliderimgs" >
            <img src="../../images/A5.png" alt="" />
            <img src="../../images/A6.png" alt="" />
            <img src="../../images/A7.png" alt="" />
            <img src="../../images/A8.png" alt="" />
          </div>
          </div>
           </div>
        <div className="">
          <h3 className='PortfirstH3 text-[#11183A80] text-[24px]'>Было выполнено:</h3>
            <ul className='LIPortfolio text-[#11183A80] text-[24px] ml-5'>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>битумная пароизоляция Биполь ЭПП</li>
            </div>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>теплоизоляция из плит Пеноплекс 150мм</li>
            </div>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>уклонообразующие плиты Пеноплекс УКЛОН 1,7%</li>
            </div>
           
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>утепление парапетов 50мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 100г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>ПВХ мембрана Технониколь 1,5мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 350г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>Щебень фр.5-20мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>Воронки внутреннего водостока 3ш  </li>
            </div>
          </ul>
            <div className="flex gap-14 mt-[40px] mb-[-15px] bluenumbers">

                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Площадь кровли</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>360 м²</h1>
                    </div>
                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Срок реализации</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>14 дней</h1>
                    </div>
            </div>
        </div>
        </div>
        <div className="bg-white p-5 rounded-[10px] flex items-end gap-0 mt-10 MAINPORTCARDS">
          <div className="">

         
          <h1 className='text-[#11183A] text-[32px] mb-3'>Кафе на Михайловской набережной</h1>
          <div className="">

         <img src="../../images/CCCC.png" alt="" />
          <div className="flex gap-[35px] mt-3.5 sliderimgs" >
            <img src="../../images/A1.png" alt="" />
            <img src="../../images/A2.png" alt="" />
            <img src="../../images/A3.png" alt="" />
            <img src="../../images/A4.png" alt="" />
          </div>
          </div>
           </div>
        <div className="">
          <h3 className='PortfirstH3 text-[#11183A80] text-[24px]'>Было выполнено:</h3>
          <ul className='LIPortfolio text-[#11183A80] text-[24px] ml-5'>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>битумная пароизоляция Биполь ЭПП</li>
            </div>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>теплоизоляция из плит Пеноплекс 150мм</li>
            </div>
            <div className="flex items-center gap-2">

            <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>уклонообразующие плиты Пеноплекс УКЛОН 1,7%</li>
            </div>
           
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>утепление парапетов 50мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 100г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>ПВХ мембрана Технониколь 1,5мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>разделительный слой 350г/м2</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>Щебень фр.5-20мм</li>
            </div>
            <div className="flex items-center gap-2">

             <div className="bg-[#11183A80] p-1 w-2 rounded-2xl mt-1 text-[24px] "></div>
            <li>Воронки внутреннего водостока 3ш  </li>
            </div>
          </ul>
            <div className="flex gap-14 mt-[10px] mb-[-15px] bluenumbers">

                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Площадь кровли</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>180 м²</h1>
                    </div>
                    <div className="">
                        <h3 className='text-[#4560E9] opacity-50 text-[24px] PSecH3'>Срок реализации</h3>
                        <h1 className='text-[#4560E9] text-[48px] font-medium PSecP'>14 дней</h1>
                    </div>
            </div>
        </div>
        </div>
      
      </div>
       <div className=" mt-24 flex items-start gap-[190px] ABOUTUSRESPon">
                          
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
        </div>
        <div className="Footer mt-20">
          <Footer />
        </div>
    </div>
  )
}

export default Portfolio