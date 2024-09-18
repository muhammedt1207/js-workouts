import React, { useEffect, useState } from 'react';

const useThrottle = (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, limit);

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};

const Throttling = () => {
  const [text, setText] = useState('');
  const throttledText = useThrottle(text, 1000); 
  useEffect(() => {
    if (throttledText) {
      console.log(throttledText);
    }
  }, [throttledText]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setText(e.target.value)}
      />
      <h1>{throttledText}</h1>
    </div>
  );
};

export default Throttling;
