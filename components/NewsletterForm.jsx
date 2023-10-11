"use client"

import { useState } from "react"

export default function Newsletter(){
    const [status, setStatus] = useState("idle");
    const [email, setEmail] = useState("");
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    async function submitContact(e){
        e.preventDefault();

        console.log('in function')

        if(emailRegex.test(email)) {
            const response = await fetch('/api/post-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                })
            });

            if(response.status === 200){
                setStatus("success");
                setEmail("")
            }
        } else { 
            setStatus("invalid");
            setEmail("");
        }
    }

    function handleInputChange(e){
        setEmail(e.target.value);
        setStatus("idle");
    }

    return (
        <form onSubmit={submitContact}>
            <input disabled={status === "success" ? true : false} value={email} onChange={e => handleInputChange(e)} placeholder="Please enter your email" />
            {status === "idle" && <button type="submit">SUBMIT</button>}
            {status === "invalid" && <button type="submit">INVALID</button>}
            {status === "success" && <button disabled>SUCCESS</button>}
        </form>
    )
}