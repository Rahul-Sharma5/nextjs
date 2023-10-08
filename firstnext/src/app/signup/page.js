"use client";
import './signup.css'
import Link from "next/link";

export default function Signup(){
    return(
        <div>
            <h1 className="heading">Create Your Account</h1>
            <Link href="/"><h4 className="sub-heading">Back To Home</h4></Link>
        </div>
    )
}