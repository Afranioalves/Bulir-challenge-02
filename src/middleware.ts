import { NextRequest, NextResponse } from "next/server"

const middleware = (request:NextRequest) =>{
    const token = request.cookies.get('TOKEN')?.value
    const signInUrl = new URL('/', request.url)
    const homeUrl = new URL('/home', request.url)

    if(!token){
        if(request.nextUrl.pathname === '/') return NextResponse.next();
        return NextResponse.redirect(signInUrl)
    }

    if(request.nextUrl.pathname === '/') return NextResponse.redirect(homeUrl)
    
    
}

export default middleware

export const config = {
    matcher:['/', '/home/:path*']
}