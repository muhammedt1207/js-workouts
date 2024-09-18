import React, { useState } from 'react';

const ChildComponent = React.memo(({ count }) => {
  console.log("ChildComponent is re-rendered!");
  return <h2>Count: {count}</h2>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  return (
    <div>
      <h1>React.memo Example</h1>
      <ChildComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
    </div>
  );
};

export default ParentComponent;
