import React, { useEffect, useState } from "react";

import discountImg from "../assets/images/star.svg";
import crossImg from "../assets/images/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectSub } from "../store/timeSlice/discountSlice";

const CardPopup = ({ data }) => {
const dispatch = useDispatch()
const selectedCard = useSelector((state) => state.rates.selectedSub)

    const handleSelectSub = () =>{ 
        dispatch(selectSub(data.id))
    }

    const handleInputSub = (event) => {
        dispatch(selectSub(data.id));
      };

  return (
    <div onClick={handleSelectSub} className={`relative flex flex-col max-md:flex-row-reverse justify-between md:w-[210px] md:h-[200px] w-full border-4 border-[#E7EAF1] bg-white rounded-2xl cursor-pointer p-2 hover:border-[#01B9C5] hover:bg-teal-100 cursor-pointer ${selectedCard == data.id ? "border-[#01B9C5] bg-teal-100" : ""}`}>
      <div className="flex justify-between items-center">
        <div className="relative flex flex-col">
          <p className="font-bebas text-2xl text-[#2D3242] md:block hidden">{data.name}</p>
          <span className="text-[#2D3242] text-xl font-bold opacity-70">990₽</span>
          <img className="absolute bottom-1" src={crossImg} alt="cross" />
        </div>
        <input checked={selectedCard == data.id} onChange={handleInputSub}  className="self-start w-[22px] h-[22px]" type="radio" name="subscription" value={data.id} />
      </div>
      <div className="relative max-md:flex-1">
      <p className="font-bebas text-2xl text-[#2D3242] max-md:block hidden">{data.name}</p>
      <div className="relative">
        <p className="font-bold text-[#2D3242] text-5xl">{data.price}₽</p>
        <div className="absolute md:right-2 md:bottom-5 max-md:left-[65%] max-md:top-0 ">
        <div className="relative">
          <img className="relative" src={discountImg} alt="" width={50}/>
          <span className="absolute top-[30%] left-[23%] text-white text-md font-semibold">
            30%
          </span>

        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardPopup;
