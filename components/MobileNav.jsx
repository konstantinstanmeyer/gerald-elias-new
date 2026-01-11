'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import options from '@/util/options';

export default function MobileNav() {
  const { writing, music, about } = options;

  const toggleMenu = () => {
    const nav = document.querySelector('#mobile-nav');
    const isActive = nav?.classList.contains('active');
    
    nav?.classList.toggle('active');
    
    if (isActive) {
      document.body.classList.remove('mobile-menu-open');
    } else {
      document.body.classList.add('mobile-menu-open');
    }
  };

  const closeMenu = () => {
    const nav = document.querySelector('#mobile-nav');
    nav?.classList.remove('active');
    document.body.classList.remove('mobile-menu-open');
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  return (
    <div id="mobile-nav">
      <div id="mobile-nav-header">
        <Link href="/" onClick={closeMenu}>
          <h3 id="mobile-gerald-elias">GERALD ELIAS</h3>
        </Link>
        <div id="hamburger-container">
          <button
            id="hamburger"
            onClick={toggleMenu}
            aria-label="Open menu"
            type="button"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
        <div id="close-menu" onClick={toggleMenu}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div id="mobile-nav-links">
        <div className="mobile-options">
          <h3>WRITING</h3>
          {writing.map((page, i) => 
            <Link 
              key={"writingLink-" + i} 
              href={page.url} 
              onClick={closeMenu}
              target={page?.externalLink ? "_blank" : null} 
            >
              {page.name}
            </Link>
          )}
        </div>
        <div className="mobile-options">
          <h3>MUSIC</h3>
          {music.map((page, i) => 
            <Link 
              key={"musicLink-" + i} 
              href={page.url} 
              onClick={closeMenu}
              target={page?.externalLink ? "_blank" : null} 
            >
              {page.name}
            </Link>
          )}
        </div>
        <div className="mobile-options">
          <h3>ABOUT</h3>
          {about.map((page, i) => 
            <Link 
              key={"aboutLink-" + i} 
              href={page.url} 
              onClick={closeMenu}
              target={page?.externalLink ? "_blank" : null} 
            >
              {page.name}
            </Link>
          )}
        </div>
        <Link href="/media-features" onClick={closeMenu}>
          MEDIA FEATURES
        </Link>
        <Link href="/events" onClick={closeMenu}>
          EVENTS
        </Link>
        <Link href="/posts" onClick={closeMenu}>
          POSTS
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          CONTACT
        </Link>
      </div>
    </div>
  );
}