import React, {useEffect, useState} from "react";

export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y:0});

    const {x, y} = coords;
    useEffect(() => {
        console.log('Componente montado');
        const mouseMove = (e) => {
            const {x, y} = e;
            setCoords({x, y})
            console.log(`X${x} and Y${y}`);
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove)
        }
    }, []);

    return (
        <h1>Message{x} {y}</h1>
    )
}