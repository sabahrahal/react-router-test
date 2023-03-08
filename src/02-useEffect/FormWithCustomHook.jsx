import React from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
  
    const {formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: ''
    });

    const { username, email } = formState; 


  return (
    <>

    <h1>Form With Custom Hook</h1>

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

    <button onClick={ onResetForm } className='btn btn-primary mt-2'>Reset</button>
    </>

  )
}
