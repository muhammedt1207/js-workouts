import React from 'react';

// This component will only re-render if its props change
const MemoizedComponent = React.memo(({ value, onClick }) => {
    console.log('Rendering MemoizedComponent');
    return (
        <div>
            <p>Value: {value}</p>
            <button onClick={onClick}>Click me</button>
        </div>
    );
});

const ParentComponent = () => {
    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState('Initial value');

    // Memoized callback function
    const handleClick = React.useCallback(() => {
        setValue('Updated value');
    }, []); // Empty dependency array means handleClick will not change

    // Function to increment count
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <MemoizedComponent value={value} onClick={handleClick} />
            <button onClick={incrementCount}>Increment Count</button>
            <p>Count: {count}</p>
        </div>
    );
};

export default ParentComponent;
