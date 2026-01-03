"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
    const providers = [
        { 
            id: "google", 
            name: "Google", 
            icon: "/google.webp" 
        },
    ];

    const handleSignIn = async (providerId) => {
        try {
            await signIn(providerId);
        } catch (error) {
            console.error(`Failed to sign in with ${providerId}:`, error);
        }
    };

    return (
        <div className="signin-container">
            <div className="provider-list">
                {providers.map((provider) => (
                    <button
                        key={provider.id}
                        onClick={() => handleSignIn(provider.id)}
                        className="provider-button"
                    >
                        <Image 
                            alt={provider.name} 
                            width={40} 
                            height={40} 
                            src={provider.icon}
                            className="provider-icon"
                        />
                        <span className="provider-text">
                            Sign in with {provider.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}