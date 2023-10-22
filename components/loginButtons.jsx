"use client"

import { signIn } from "next-auth/react"

export default function LoginButtons(){
    return (
        <p onClick={() => {
            signIn("google");
        }}>login</p>
    )
}