import React, {useEffect} from "react";
import './effects.css'
import {useForm} from "../../hooks/useForm";


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    useEffect(() => {
        console.log('CHANGE EMAIL')
    }, [email]);
    return (
        <>
            <h1>FormWithCustomHook</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder="Tu nombre"
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        autoComplete="off"
                        placeholder="****"
                        onChange={handleInputChange}
                        value={password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </>
    )
}