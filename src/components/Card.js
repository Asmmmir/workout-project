import React, { useEffect, useState } from "react";

import discountImg from "../assets/images/star.svg";
import { useSelector } from "react-redux";

const Card = ({ data }) => {
  const timeIsUp = useSelector((state) => state.timer.timeIsUp);


  return (
    <>
      {data.isPopular && (
        <div className="relative flex flex-col items-center justify-center max-md:justify-start max-md:gap-5 border-4 rounded-2xl w-[187px] h-[261px] max-md:w-full max-md:h-full max-md:flex-row max-md:p-5 hover:border-[#01B9C5] hover:bg-teal-100 cursor-pointer">
          <div className="max-md:flex max-md:flex-col hidden">
          <span className="font-rubik uppercase text-[#687078] text-2xl pr-7">
            {data.name}
          </span>
          <p className="lg:none block">Привести тело впорядок</p>
          </div>
          <span className="font-rubik uppercase text-[#687078] text-2xl pr-7 max-md:hidden">
            {data.name}
          </span>
          <div className="max-md:flex max-md:flex-col">
          <p className="text-[50px] text-[#2D3242] font-bold">{data.price}₽</p>
          <span className="line-through self-end text-[24px] text-[#95979F] pr-7">
            990₽
          </span>
          </div>
          <p className="text-center max-md:hidden">Привести тело впорядок</p>
            <div className={`absolute transition-all right-2 top-[-40px] ${timeIsUp ? 'bg-red-400 top-[-1000px] opacity-0 duration-1000 ease-in-out' : '' }`}>
              <img className="relative" src={discountImg} alt="" />
              <span className="absolute top-[30%] left-[25%] text-white text-xl font-semibold">
                30%
              </span>
            </div>
          
        </div>
      )}
    </>
  );
};

export default Card;
