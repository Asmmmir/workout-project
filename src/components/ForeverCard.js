import React, { useState } from 'react'

import discountImg from "../assets/images/star.svg";
import { useSelector } from 'react-redux';

const ForeverCard = ({data}) => {
    const timeIsUp = useSelector((state) => state.timer.timeIsUp)

  return (
    <div className="relative flex items-center justify-between max-md:justify-start border-4 rounded-2xl font-rubik my-5 p-5 gap-8 hover:border-[#01B9C5] hover:bg-teal-100 cursor-pointer">
      <div className='max-md:flex max-md:flex-col hidden'>
    <p className="uppercase font-bold text-2xl">{data.name}</p>
    <p>Всегда быть в форме ⭐️</p>
      </div>
    <p className="uppercase font-bold text-2xl text-[#2D3242] max-md:hidden">{data.name}</p>
    <div className="flex flex-col text-[#2D3242]">
      <p className="font-bold text-[50px]">{data.price}₽</p>
      <span className="text-[#95979F] text-[24px] self-end line-through">
        18 990₽
      </span>
    </div>
    <p className='max-md:hidden text-[#2F4353]'>Всегда быть в форме и поддерживать своё здоровье ⭐️</p>
        <div className={`absolute right-2 top-[-30px] ${timeIsUp ? 'bg-red-400 top-[-1000px] opacity-0 duration-1000 ease-in-out' : '' }`}>
          <img className="relative" src={discountImg} alt="" />
          <span className="absolute top-[30%] left-[25%] text-white text-xl font-semibold">
            30%
          </span>
        </div>
      
  </div>
  )
}

export default ForeverCard