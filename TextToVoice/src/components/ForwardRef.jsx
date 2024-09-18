import React, { forwardRef, useRef } from 'react';

const InputComponent = forwardRef((props, ref) => {
  return <input ref={ref} placeholder="Enter " {...props} />;
});

const ParentComponent = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Forward Ref Example</h1>
      <InputComponent ref={inputRef} />
      <button onClick={focusInput}>Focus the input</button>
    </div>


  );
};

export default ParentComponent;
