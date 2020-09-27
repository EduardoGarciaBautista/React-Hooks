import React, { useEffect, useReducer } from 'react'
import { TodoForm } from '../TodoForm.js/TodoForm';
import { TodoList } from '../TodoList/TodoList';
import './styles.css';
import { TodoRedurer } from './TodoReducer';




const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todo, dispatch] = useReducer(TodoRedurer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo));
    }, [todo])


    const handleRemove = (todoId) => {

        const action = {
            type: 'REMOVE',
            payload: todoId
        }
        dispatch(action)
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'TOGGLE',
            payload: todoId
        }
        dispatch(action);
    }

    const handleAddToDo = (newTodo) => {
    
        dispatch({
            type: 'ADD',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>Todo App ({todo.length})</h1>
            <hr />

            <div className="row">
                <div className="col-md-7">
                   <TodoList 
                   todo={todo}
                   handleRemove={handleRemove}
                   handleToggle={handleToggle}
                   />
                </div>

                <div className="col-md-5">
                    <TodoForm handleAddToDo={handleAddToDo} />
                </div>
            </div>
        </div>
    )
}
