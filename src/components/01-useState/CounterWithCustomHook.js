import React from "react";
import './CounterApp'
import {useCounter} from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const [state, increment, decrement, resetCounter] = useCounter(1);

    return (
        <>
            <h1>Counter with Hook {state}</h1>
            <hr/>
            <button
                className="btn"
                onClick={() => increment(4)}
            > + 1
            </button>
            <button
                className="btn"
                onClick={() => decrement(1)}
            >- 1
            </button>
            <button onClick={() => resetCounter()}>
                Reset
            </button>
        </>
    )
}