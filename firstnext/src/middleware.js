import { NextResponse } from "next/server";

export function middleware(request){
    //console.log("middleware")

    // if(request.nextUrl.pathname!="/"){
      return NextResponse.redirect(new URL("/", request.url))
    // }
}

export const config={
    //matcher:"/study/:path*"
     matcher:["/study/:path*","/adminlist/:path*"]
}