import React, { useEffect } from "react";
import MyImg from "../assets/images/human.png";
import Card from "./Card";
import DiscountPopup from "./DiscountPopup";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRates } from "../store/timeSlice/discountSlice";
import ForeverCard from "./ForeverCard";

const Main = () => {
  const dispatch = useDispatch()
  const discounts = useSelector((state) => state.rates.discounts);
  const timeIsUp = useSelector((state) => state.timer.timeIsUp);
  
  useEffect(() => {
    dispatch(fetchAllRates());
  }, [dispatch]);


  return (
    <main className="container mx-auto mt-10 p-2 relative">
      <h1 className="uppercase font-rubik text-[40px] text-[#2D3242] text-center">
        Выберите подходящий тарифный план
      </h1>
      <div className="flex container mx-auto mt-12 justify-around items-center max-md:flex-col">
        <div className="flex-1 flex justify-center">
          <img src={MyImg} alt="" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center gap-2 max-md:flex-col">
            {discounts.map((card) =>  {
            if(card.name != 'навсегда' && card.isPopular)  {
              return <Card data={card} key={card.id} />
            }   
            }
            )}
            {
             timeIsUp && discounts.map((card) => {
                if(card.isDiscount && card.name != 'навсегда') {
                  return <Card data={card} key={card.id} />
                }
              })
            }
          </div>
              {discounts.map((card) => {
                if(card.name == 'навсегда' && card.isPopular) {
                  return <ForeverCard data={card} key={card.id} />
                }
              })}
          <div className="p-2">
            <p className="font-rubik md:text-2xl text-sm text-[#2D3242] mb-5">
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
            </p>
          </div>
          <div className="flex items-center gap-2 p-2">
            <input className="w-[25px] h-[25px]" id="privacy" type="checkbox" />
            <label className="text-[#95979F] md:text-xl text-sm" htmlFor="privacy">
              Я соглашаюсь с{" "}
              <a className="text-[#2D97F9]" href="#">
                Правилами сервиса{" "}
              </a>{" "}
              и условиями{" "}
              <a className="text-[#2D97F9]" href="#">
                Публичной оферты.
              </a>
            </label>
          </div>
          <button className="self-start max-md:self-center bg-[#fd4d35] py-5 px-20 rounded-full uppercase text-xl text-white font-rubik my-7 focus:animate-pulse">
            Купить
          </button>
          <span className="text-[#818798] text-md font-rubik p-2">
            Нажимая «Купить», Пользователь соглашается на автоматическое
            списание денежных средств по истечению купленного периода.
            Дальнейшие списания по тарифам участвующим в акции осуществляются по
            полной стоимости согласно оферте.
          </span>
        </div>
      </div>
      <DiscountPopup />
    </main>
  );
};

export default Main;
