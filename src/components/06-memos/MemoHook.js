import React, {useMemo, useState} from "react";
import {useCounter} from "../../hooks/useCounter";

import '../02-useEffect/effects.css'
import {heavyProcess} from "../../helpers/HeavyProcess";


export const MemoHook = () => {

    const [counter, increment] = useCounter(5000);
    const [show, setShow] = useState(true);




   const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return(
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter : <small>{counter}</small></h3>
            <hr/>

            <p>{memoHeavyProcess}</p>
            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>

            <button
                className="btn btn-outline.primary ml-3"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/hide {JSON.stringify(show)}
            </button>

        </div>
    )
};