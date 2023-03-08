import React, { useState } from 'react'

export const SimpleForm = () => {

    const [form, setForm] = useState({
        username: '', 
        email: ''
    });
    
    const { username, email } = form; 

    const onInputChange = ({ target }) => {
        const { name, value } = target; 
        setForm({
            ...form, 
            [ name ]: value
        });
    };
    
 return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
        type='text' 
        className='form-control'
        placeholder='username'
        name='username'
        value={ username }
        onChange={ onInputChange }
        />

        <input 
        type='email' 
        className='form-control mt-2'
        placeholder='email@gmail.com'
        name='email'
        value={ email }
        onChange={ onInputChange }
        />
    </>
  )
}
