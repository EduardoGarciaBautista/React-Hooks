import React from 'react'
import { TodoListItem } from '../TodoListItem/TodoListItem'
import PropTypes from 'prop-types';


export const TodoList = ({ todo, handleToggle, handleRemove }) => {
    return (
        <ul className="list-group list-group-flush">
            {todo.map((todo, index) => {
                return (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                        handleToggle={handleToggle}
                        handleRemove={handleRemove}
            />
            )
            })
        }
        </ul>
    )
}
TodoList.propTypes = {
    todo: PropTypes.array.isRequired, 
    handleToggle: PropTypes.func.isRequired, 
    handleRemove: PropTypes.func.isRequired
}