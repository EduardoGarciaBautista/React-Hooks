import React, {useEffect, useState} from "react";
import './effects.css'
import {Message} from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() => {
        //console.log('Hey 1')
        return() => {

        }
    }, []);

    useEffect(() => {
        //console.log('Hey form')
    }, [formState]);

    useEffect(() => {
        //console.log('email changes')
    }, [email]);

    const handleChange = (e) => {
        e.preventDefault();
        //console.log(e.target.name, e.target.value);
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h1>Useeffect</h1>
            <hr/>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Tu nombre"
                    onChange={handleChange}
                    value={name}
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="email"
                    autoComplete="off"
                    placeholder="Tu email"
                    onChange={handleChange}
                    value={email}
                />
            </div>


            {(name === '123') && <Message/>}
        </>
    )
}