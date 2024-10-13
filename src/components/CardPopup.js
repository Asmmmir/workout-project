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
    <div onClick={handleSelectSub} className={`relative flex flex-col justify-between w-[210px] h-[200px] border-4 border-[#E7EAF1] bg-white rounded-2xl cursor-pointer p-2 hover:border-[#01B9C5] hover:bg-teal-100 cursor-pointer ${selectedCard == data.id ? "border-[#01B9C5] bg-teal-100" : ""}`}>
      <div className="flex justify-between items-center">
        <div className="relative flex flex-col">
          <p className="font-bebas text-2xl text-[#2D3242]">{data.name}</p>
          <span className="text-[#2D3242] text-xl font-bold opacity-70">990₽</span>
          <img className="absolute bottom-1" src={crossImg} alt="cross" />
        </div>
        <input checked={selectedCard == data.id} onChange={handleInputSub}  className="self-start w-[22px] h-[22px]" type="radio" name="subscription" value={data.id} />
      </div>
      <div>
        <p className="font-bold text-[#2D3242] text-5xl">{data.price}₽</p>
      </div>
      <div className="absolute right-2 bottom-2">
          <img className="relative" src={discountImg} alt="" width={50}/>
          <span className="absolute top-[25%] left-[23%] text-white text-md font-semibold">
            30%
          </span>
        </div>
    </div>
  );
};

export default CardPopup;
