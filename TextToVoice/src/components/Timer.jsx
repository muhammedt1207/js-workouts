import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);   
  const [isRunning, setIsRunning] = useState(false);  

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); 
      }, 1000);
    }

 
    return () => clearInterval(interval);

  }, [isRunning]); 

 
  const startTimer = () => {
    setIsRunning(true); 
  };

  
  const stopTimer = () => {
    setIsRunning(false); 
  };

  const resetTimer = () => {
    setIsRunning(false);  
    setTime(0);         
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Timer: {time}s</h1>
      <div>
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
