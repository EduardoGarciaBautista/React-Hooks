import React, {useEffect, useRef, useState} from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null, loading: true, error: null
    });

    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({
            data: null, loading: true, error: null
        });


        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }
                }, 4000)
            });

    }, [url]);

    return state;
}