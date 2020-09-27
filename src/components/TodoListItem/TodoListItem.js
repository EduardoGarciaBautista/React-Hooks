import React from 'react'
import PropTypes from 'prop-types';


export const TodoListItem = ({todo, index, handleToggle, handleRemove}) => {
    return (
        <li
        className="list-group-item"
        key={todo.id}
    >
        <div className="row justify-content-between w-100">
            <p
            onClick={() => {
                handleToggle(todo.id)
            }}
            className={`${todo.done && 'complete'}`}>{index + 1} {todo.desc}</p>

            <button
                className="btn btn-danger"
                onClick={(e) => {
                    e.preventDefault();
                    handleRemove(todo.id)
                }}
            >Borrar</button>
        </div>
    </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired, 
    index: PropTypes.number.isRequired, 
    handleToggle: PropTypes.func.isRequired, 
    handleRemove: PropTypes.func.isRequired
}