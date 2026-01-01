'use client';

import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('');
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('loading');

        const elements = e.target.elements;
        const body = {
            name: elements.name.value,
            email: elements.email.value,
            phoneNumber: elements.phoneNumber.value,
            message: elements.message.value,
        };

        if (!body?.name || !body.message || !body.email) {
            return setStatus('empty');
        }

        if (!emailRegex.test(body.email)) {
            return setStatus('invalid');
        }

        try {
            const response = await fetch('https://www.mysteriesandmusic.com/api/post-email', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                setStatus('success');
            } else {
                setStatus('error');
                console.error('Form submission error:', response);
            }
        } catch (error) {
            setStatus('error');
            console.error('Form submission error:', error);
        }
    }

    return (
        <main id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} id="contact-form">
            <div>
                <h6>Name*</h6>
                <input 
                name="name" 
                type="text"
                autoComplete="name"
                />
            </div>
            <div>
                <h6>Email*</h6>
                <input 
                name="email" 
                type="email"
                autoComplete="email"
                />
            </div>
            <div>
                <h6>Phone</h6>
                <input 
                name="phoneNumber" 
                type="tel"
                autoComplete="tel"
                />
            </div>
            <div>
                <h6>Message*</h6>
                <textarea 
                name="message"
                rows={8}
                />
            </div>
            <button 
                type="submit" 
                disabled={status === 'success'}
            >
                SUBMIT
            </button>
            {status === 'invalid' && (
                <span className="error">Invalid email address</span>
            )}
            {status === 'success' && (
                <span className="success">Success! Thank you for reaching out</span>
            )}
            {status === 'loading' && (
                <span>Sending...</span>
            )}
            {status === 'error' && (
                <span className="error">Error submitting form. Please try again.</span>
            )}
            {status === 'empty' && (
                <span className="error">Fill all required fields (marked by *)</span>
            )}
            </form>
        </main>
    );
}