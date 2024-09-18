import React, { useState } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    if (time < 10 && !intervalId) {
      const id = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime >= 10) {
            clearInterval(id);
            setIntervalId(null);
            return 10;
          }
          return prevTime + 1;
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleMinus = () => {
    if (time > 0 && !intervalId) {
        const id = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime <= 0) {
              clearInterval(id);
              setIntervalId(null);
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
        setIntervalId(id);
      }
   
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-4xl font-bold">{time}</div>
      <div className="space-x-2">
        <button onClick={handleStart} disabled={intervalId || time >= 10}>
          Start
        </button>
        <button onClick={handleMinus} disabled={time === 0}>
          Minus
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;