import React, {useRef} from "react";
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();


    const handleClick = (e) => {
        e.preventDefault();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus</h1>
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary mt-5"
            onClick={handleClick}
            >
                Focus
            </button>

        </div>
    )
}