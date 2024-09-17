'use server';

import { redirect } from "next/navigation";
export default async function signup(currentState: any, formData: FormData): Promise<string> {
   
    const email = formData.get('email')
    const password = formData.get('password')
    const res = await fetch(process.env.ROOT_URL + '/api/sign-up', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    })

    const json = await res.json().catch(() => null); // Handle JSON parsing error
    if (res.ok){
        redirect('/signin')
        return ''
    } else {
        console.error('Error:', json); // Log the error response
        return json.error;
    }
}