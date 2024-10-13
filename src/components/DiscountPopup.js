import React, { useEffect, useState } from "react";
import CardPopup from "./CardPopup";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRates } from "../store/timeSlice/discountSlice";

const DiscountPopup = () => {
  const [modalIsOpen, setModelIsOpen] = useState(true)

  const dispatch = useDispatch();
  const timeIsUp = useSelector((state) => state.timer.timeIsUp);
  const discounts = useSelector((state) => state.rates.discounts);

  const handleModalClose = () => {
    setModelIsOpen(false)
  }

  useEffect(() => {
    dispatch(fetchAllRates());
  }, [dispatch]);


  return (
    <>
      {timeIsUp && modalIsOpen && (
        <div>
          <div onClick={handleModalClose} className="fixed inset-0 opacity-50 bg-black"></div>
          <div className="absolute flex flex-col justify-between w-[750px] h-[660px] bg-[#E7EAF1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="relative top-0 left-10 w-max bg-[#01B9C5]">
              <p className="font-rubik text-white p-2">горящее предложение</p>
            </div>
            <div className="flex flex-col gap-4 items-center mt-3">
              <h2 className="uppercase font-rubik font-bold text-3xl">
                Не упусти свой{" "}
                <span className="text-[#01B9C5]">последний шанс</span>
              </h2>
              <p className="font-rubik text-2xl">
                Мы знаем, как трудно начать..{" "}
                <span className="font-bold">Поэтому!</span>
              </p>
              <div>
                <p className="font-rubik font-bold text-2xl border-2 p-2 rounded-xl border-[#01b9c5]">
                  Дарим скидку для{" "}
                  <span className="text-[#01B9C5]">Легкого старта</span>
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="my-5 text-[#12191D] text-xl font-bold">
                Посмотри, что мы для тебя приготовили 🔥
              </p>
              <div className="flex items-center justify-between gap-1">
                {discounts.map((card) => {
                  if (card.isDiscount) {
                    return <CardPopup data={card} key={card.id} />;
                  }
                })}
              </div>
            </div>
            <button className="self-center bg-[#fd4d35] py-5 px-20 mb-4 rounded-full text-xl text-white font-rubik">
              Начать тренироваться
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DiscountPopup;
