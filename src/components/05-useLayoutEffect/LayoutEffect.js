import React, {useLayoutEffect, useRef, useState} from "react";
import '../02-useEffect/effects.css';
import {useFetch} from "../../hooks/useFetch";
import {useCounter} from "../../hooks/useCounter";


export const Layout = () => {

    const [counter, increment] = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data && data[0];

    const tag = useRef();

    const [box, setBox] = useState({});
    useLayoutEffect(() => {
        console.log(tag.current.getBoundingClientRect());
        setBox(tag.current.getBoundingClientRect())
    }, [quote]);

    return (
        <>
            <h1>Layouth Effect</h1>
            <hr/>
            <blockquote className="blockquote text right">
                <p
                    ref={tag}
                    className="mb-0">
                    {quote}
                </p>
            </blockquote>

            <pre>
                {
                    JSON.stringify(box)
                }
            </pre>
            <button
                onClick={() => increment()}
                className="btn btn-primary">
                Next
            </button>
        </>
    )
}