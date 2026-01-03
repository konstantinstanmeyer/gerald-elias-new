"use client"

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export function ResolveScroll() {
    const { status } = useSession();
    
    useEffect(() => {
        if (status === "authenticated") {
            const hash = window.location.hash;
            if (hash.startsWith('#scroll-')) {
                const scrollY = parseInt(hash.replace('#scroll-', ''), 10);
                if (!isNaN(scrollY)) {
                    window.scrollTo(0, scrollY);

                    // Clean up the URL by removing the hash after scrolling has completed, without refreshing the page
                    window.history.replaceState(null, '', window.location.pathname);
                }
            }
            const savedPosition = sessionStorage.getItem('scrollPosition');
            if (savedPosition) {
                window.scrollTo(0, parseInt(savedPosition, 10));
                sessionStorage.removeItem('scrollPosition');
            }
        }
    }, [status]);
    
    return null;
}