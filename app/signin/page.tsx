'use client';
import React from 'react'
import { redirect } from 'next/navigation' 
import { useFormState } from 'react-dom';
import signin from './_actions';
const SignIn = () => {

   const [error, formAction] = useFormState(signin, undefined)
    return ( 
    <div>
        <h1>Sign In</h1>
        <form action={formAction}>
        <input type="email" name='email' />
        <input type="password" name='password' />
        <button type='submit'>Sign up</button>
        </form>
        {error && <p>{error}</p>}
    </div> 
  ) 
}

export default SignIn
