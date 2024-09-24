'use server';
import { cookies  } from "next/headers";
import { redirect } from "next/navigation";
export default async function signin(currentState: any, formData: FormData): Promise<string> {
   
    const email = formData.get('email')
    const password = formData.get('password')
    const res = await fetch(process.env.ROOT_URL + '/api/sign-in', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    })

    const json = await res.json().catch(() => null); // Handle JSON parsing error

    cookies().set('Authorization', json.token, {
        secure: true,
        httpOnly: true,
        expires: Date.now() + 24*60*60*1000*3,
        path: '/',
        sameSite: "strict" 
    })
    if (res.ok){
        redirect('/onboarding ')
        return ''
    } else {
        console.error('Error:', json); // Log the error response
        return json.error;
    }
}