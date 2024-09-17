'use client';
import React from 'react'
import { redirect } from 'next/navigation' 
import signup from './_actions'
import { useFormState } from 'react-dom';
const SignUp = () => {

   const [error, formAction] = useFormState(signup, undefined)
    return ( 
    <div>
        <h1>Sign Up</h1>
        <form action={formAction}>
        <input type="email" name='email' />
        <input type="password" name='password' />
        <button type='submit'>Sign up</button>
        </form>
        {error && <p>{error}</p>}
    </div>
  ) 
}

export default SignUp
