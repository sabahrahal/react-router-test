import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm } = useForm({
        id: new Date().getTime(), 
        description: '',
        done: false
    }); 

    const { description } = formState; 

    const onFormSubmit = (event) => {
        event.preventDefault(); 

        const newTodo = {
            id: new Date().getTime(), 
            description,
            done: false
        }

        onNewTodo( newTodo );
        onResetForm(); 
    }

    return (
        <form onSubmit={ onFormSubmit }
        >
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className='form-control'
                name='description'
                value={ description }
                onChange= { onInputChange }
            />
            <button
                type='submit'
                className='btn btn-primary mt-1'
            >
                Agregar
            </button>
        </form>
    )
}
