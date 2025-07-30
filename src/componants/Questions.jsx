import React from 'react'
import { HiOutlinePlus } from "react-icons/hi";
import '../style/question.css'
const Questions = () => {
    const questions = [
        {name:'Какую выбрать кровлю?'},
        {name:'На каком этапе необходимо приступать к монтажу плоской кровли?'},
        {name:'Если у меня нет проекта кровли?'},
        {name:'Предоставляете ли вы услуги по ремонту и обслуживанию кровли'},
        {name:'Как выбрать подходящую систему для моей плоской кровли?'},
        {name:'Какая кровля лучше Балластная или мембранная?'},
        {name:'На какую толщину необходимо утеплять кровлю?'},
        {name:'Какие лучше воронки парапетные (наружные) или внутренние?'},
        {name:'Сколько составляет срок службы плоской кровли?'},
        {name:'Что входит в 3 варианта расчета? '},
        {name:'Сколько стоит монтаж плоской кровли?'},
        {name:'От чего зависит стоимость кровли?'},
    ]
  return (
    <div>
          <div className="flex items-start gap-[175px] questions">
             <div className="bg-[#11183A0D] w-36 p-2 rounded-[10px] flex justify-center relative top-3 questionDiv2">
        <p className='text-[16px] text-[#11183A4D] questionP'>Частые вопросы</p>
      </div>
      <h1 className='SertificateH1 text-[42px] text-[#11183A] font-medium leading-tight'>Возможно, вы хотели спросить</h1>
        </div>
        <div className="mt-14">
            {questions.map((e, index) =>(
                <div key={index} className="flex justify-between mt-4 pb-4 items-center border-b-1 border-b-[#11183A0D] quesDiv">
                    <p className='questionP text-[#11183A] text-[16px] font-medium'>{e.name}</p>
                <HiOutlinePlus color='#11183A'/>

                </div>   
            ))}
        </div>
    </div>
  )
}

export default Questions