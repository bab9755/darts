import prisma from "@/lib/prisma";
import validateEmail from "@/app/helpers/validateEmail";
import validatePassword from "@/app/helpers/validatePassword";
import bcrypt from 'bcryptjs'
import * as jose from 'jose'

export async function POST(request: Request){
    const body = await request.json()

    const {email, password} = body;

    if(!validateEmail(email) || !validatePassword(password)){
        return Response.json({
            error: 'Invalid Email or password'
        },
    {status: 400})
    }

    const user = await prisma.user.findFirst({
        where: {
            email,
        }
    });
    
    if(!user){ //if the user is not found send an error message
        return Response.json({
            error: 'Invalid email or password',
        },{status: 400})
    }
    const correctPassword = bcrypt.compareSync(password, user.password)

    if(!correctPassword){ //if the user is not found send an error message
        return Response.json({
            error: 'Invalid email or password',
        },{status: 400})
    }

    const secret = new TextEncoder().encode(
        process.env.JWT_SECRET
      )
      const alg = 'HS256' 
      const jwt = await new jose.SignJWT({})
        .setProtectedHeader({ alg })
        .setAudience('urn:example:audience')
        .setExpirationTime('72h')
        .setSubject(user.id.toString( ))
        .sign(secret)

    console.log(`${jwt} is the corresponding jwt token`)
      
    return Response.json({token: jwt}) 


}