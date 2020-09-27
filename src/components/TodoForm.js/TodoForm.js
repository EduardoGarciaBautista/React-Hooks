import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoForm = ({ handleAddToDo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length > 1) {
            handleAddToDo({
                id: new Date().getTime(),
                desc: description,
                done: false
            });
            reset();
        }

    }

    return (
        <>
            <h4>Agregar Todo</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="false"
                    onChange={handleInputChange}
                    value={description}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block">
                    Agregar
                            </button>
            </form>
        </>
    )
}
