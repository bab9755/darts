import prisma from "@/lib/prisma";
import validateEmail from "@/app/helpers/validateEmail";
import validatePassword from "@/app/helpers/validatePassword";
import bcrypt from 'bcryptjs'
import * as jose from 'jose'


export async function POST(req: Request, res:Response){
    //The request body should look like the following
    // {
    //     ....,
    //     step,
    // }
    const body = await req.json()

    const token = await fetch(process.env.SERVER_URL + 'api/sign-in', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    })

    const { payload } = jose.jwtVerify()

    if (body.step === 'personalInfo'){

    } else if (body.step === 'travelPreferences'){

    }
    
}