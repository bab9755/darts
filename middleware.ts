import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies  } from 'next/headers'
import * as jose from 'jose'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    //you check for the cookie

    const cookie = cookies().get('Authorization')
    if (!cookies){
        return NextResponse.redirect(new URL('/signin', request.url))
    }
    //and after that you validate it to make sure they are authorized on the path set by the middleware
    const secret = new TextEncoder().encode(
        process.env.JWT_SECRET,
      )
      const jwt = cookie?.value

      if (!jwt) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }

    try{

        const { payload } = await jose.jwtVerify(jwt, secret, {})
        console.log(payload);
    } catch(error){

    }
      
      
      
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}