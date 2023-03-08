import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

    const { id, description } = todo; 

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span 
            className={ `${todo.done ? 'text-decoration-line-through' : ''}` }
            onClick={() => onToggleTodo(id)}
            >
                { description }
            </span>
            <button 
            className='btn btn-danger'
            onClick={ () => onDeleteTodo( id ) }
            >x</button>
        </li>
    )
}
