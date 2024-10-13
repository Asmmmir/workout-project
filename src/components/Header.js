import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { timeToggle } from "../store/timeSlice/timeSlice";

const Header = () => {
  const [time, setTime] = useState(120);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          dispatch(timeToggle());
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="flex justify-center items-center gap-10 py-5 bg-white">
      <div>
        <h2 className="font-bold text-3xl font-rubik">Скидка действует:</h2>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <p className={`font-bebas text-5xl ${
              time > 30 ? "text-cyan-400" : "text-red-400 animate-pulse"
            }`}
          >
            {`${Math.floor(time / 60)}`.padStart(2, 0)}
          </p>
          <span className="font-rubik">минут</span>
        </div>
        <span className="text-5xl text-cyan-400 self-start">:</span>
        <div className="flex flex-col items-center">
          <p className={`font-bebas text-5xl ${
              time > 30 ? "text-cyan-400" : "text-red-400 animate-pulse"
            }`}
          >
            {`${time % 60}`.padStart(2, 0)}
          </p>
          <span className="font-rubik">секунд</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
