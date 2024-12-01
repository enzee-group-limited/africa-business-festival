import React, { useState, useEffect } from "react";

const CountDown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDateObject = new Date(targetDate);
    
    if (isNaN(targetDateObject)) {
      console.error('Invalid target date:', targetDate);
      return;
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDateObject - now;
      console.log("Current Time:", now);
      console.log("Target Time:", targetDateObject);
      console.log("Difference in ms:", difference);

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full h-96 rounded-2xl flex gap-9 flex-col items-center justify-center bg-cover bg-center">
      <div className="flex items-start justify-center w-full gap-1.5 count-down-main">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="timer">
            <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
              <h3 className="countdown-element font-manrope font-semibold text-2xl text-white text-center">
                {value}
              </h3>
              <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountDown;
