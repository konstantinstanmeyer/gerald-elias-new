'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const toggleMenu = () => {
    const nav = document.querySelector('#mobile-nav');
    const isActive = nav?.classList.contains('active');
    
    nav?.classList.toggle('active');
    
    // Toggle body scroll
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

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  return (
    <div id="mobile-nav">
      {/* Mobile Nav Header */}
      <div id="mobile-nav-header">
        <Link href="/" onClick={closeMenu}>
          <h3 id="mobile-gerald-elias">GERALD ELIAS</h3>
        </Link>

        {/* Hamburger Menu */}
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

        {/* Close Button - X icon */}
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

      {/* Mobile Nav Links */}
      <div id="mobile-nav-links">
        {/* Books Section */}
        <div className="mobile-options">
          <h3>BOOKS</h3>
          <Link href="/books" onClick={closeMenu}>
            Books
          </Link>
          <Link href="/books/free-story" onClick={closeMenu}>
            Free Story
          </Link>
        </div>

        {/* Music Section */}
        <div className="mobile-options">
          <h3>MUSIC</h3>
          <Link href="/music/concerts-and-recordings" onClick={closeMenu}>
            Concerts & Recordings
          </Link>
          <Link href="/music/conducting" onClick={closeMenu}>
            Conducting
          </Link>
          <Link href="/music/composing" onClick={closeMenu}>
            Composing
          </Link>
          <Link href="/music/teaching" onClick={closeMenu}>
            Teaching
          </Link>
        </div>

        {/* About Section */}
        <div className="mobile-options">
          <h3>ABOUT</h3>
          <Link href="/about/biography" onClick={closeMenu}>
            Biography
          </Link>
          <a
            href="https://www.goodreads.com/goodreadscomauthorgeraldelias"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Goodreads
          </a>
        </div>

        {/* Top-level Links */}
        <h3>
        <Link href="/media-features" onClick={closeMenu}>
          MEDIA FEATURES
        </Link>
        </h3>
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