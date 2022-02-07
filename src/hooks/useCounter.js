import React, { useState } from 'react';

const useCounter = (inicitialState = 10) => {
    const [state, setState] = useState(inicitialState);

    const increment = (factor = 1) => {
        setState(state + factor)
    }

    const decrement = (factor = 1) => {
        setState(state - factor)
    }

    const reset = () => {
        setState(inicitialState)
    }

    return ({
        state,
        increment,
        decrement,
        reset,
    })
};

export default useCounter;
