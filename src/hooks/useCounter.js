import react, { useState } from 'react';

const useCounter = (inicitialState = 10) => {
    const [counter, setCounter] = useState(inicitialState);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(inicitialState)
    }

    return ({
        counter,
        increment,
        decrement,
        reset,
    })
};

export default useCounter;
