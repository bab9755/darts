import validateEmail from '../../helpers/validateEmail'
import validatePassword from '../../helpers/validatePassword'
import bcrypt from 'bcryptjs'
import prisma from '../../../lib/prisma'
export async function POST(request: Request) {
    const body = await request.json()
    const {email, password} = body;

    if(!validateEmail(email) || !validatePassword(password)){
        return Response.json({
            error: 'Invalid email or password'
        },
    {status: 400})
    }

    const hash = bcrypt.hashSync(password, 8)
    await prisma.user.create({
        data: {
            email,
            password: hash
        }
    })
   
    return Response.json({message: 'success'})
  }