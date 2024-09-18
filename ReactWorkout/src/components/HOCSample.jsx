import React from 'react';

const HOCSample = (WrappedComponent) => {
  return function UpperCase(props) {
    const upperProps = {
      ...props,
      text: props.text.toUpperCase(),
    };
    return <WrappedComponent {...upperProps} />;
  };
};

const TextDiv = ({ text }) => {
  return <h1>{text}</h1>;
};

export default HOCSample(TextDiv);
