"use client"

import { useState } from "react";

const BASE_URL = "https://mysteriesandmusic.com";

export default function Contact(){
    // const [captchaVal, setCaptchaVal] = useState(null);
    const [status, setStatus] = useState("");
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    async function handleSubmit(e){
        e.preventDefault();
        setStatus("loading");
        // console.log(e.target.elements.name.value);
        const elements = e.target.elements;
        const body = {
            name: elements.name.value,
            email: elements.email.value,
            phoneNumber: elements.phoneNumber.value,
            message: elements.message.value,
        }

        if(!body?.name || !body.message || !body.email){
            return setStatus("empty");
        } else if (!emailRegex.test(body.email)) {
            return setStatus("invalid");
        } else {
            try {
                const response = await fetch(BASE_URL + '/api/post-email', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        "Content-type": "application/json"
                    }
                });
    
                if(response.status === 200){
                    setStatus("success")
                } else {
                    setStatus("error");
                };
            } catch(e) {
                setStatus("error");
            }
        }
    }

    return (
        <div id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} id="contact-form">
                <h6>Name*</h6>
                <input name="name" />
                <h6>Email*</h6>
                <input name="email" />
                <h6>Phone</h6>
                <input name="phoneNumber" />
                <h6>Message*</h6>
                <textarea name="message" />
                <button disabled={status === "success" ? true : false} type="submit">SUBMIT</button>
                {status === "invalid" && <span className="error">invalid email address</span>}
                {status === "success" && <span className="success">success</span>}
                {status === "loading" && <span>loading...</span>}
                {status === "error" && <span className="error">error</span>}
                {status === "captcha" && <span className="error">error</span>}
                {status === "empty" && <span className="error">fill all required fields (marked by "*")</span>}
                {/* {status} */}
            </form>
            {/* <ReCAPTCHA 
                sitekey="6LdztMAoAAAAADaqCV9VcvGnu4bRBIjjcKW4Ryk2"
                onChange={(val) => setCaptchaVal(val)}
            /> */}
        </div>
    )
}