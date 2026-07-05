'use client';

import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('navHamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    const onScroll = () => nav?.classList.toggle('up', window.scrollY > 20);
    onScroll(); // set correct state immediately (e.g. if page loads mid-scroll)
    window.addEventListener('scroll', onScroll, { passive: true });

    const onHamburgerClick = () => {
      const isOpen = mobileMenu?.classList.toggle('open');
      hamburger?.setAttribute('aria-expanded', String(!!isOpen));
    };
    hamburger?.addEventListener('click', onHamburgerClick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      hamburger?.removeEventListener('click', onHamburgerClick);
    };
  }, []);

  return (
    <>
      <nav id="nav" role="navigation" aria-label="Main navigation">
        <a href="#" className="nlogo mag" aria-label="codeq — home">
          <div className="nlogo-sq" aria-hidden="true">Q</div>
          <div>
            <span className="nlogo-name">codeq</span>
            <span className="nlogo-sub">.tech</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="nlinks" role="list">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#cta">Contact</a></li>
        </ul>

        <button
          type="button"
          className="ncta mag"
          aria-label="Start a project with codeq"
          onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
        >
          <span>Start a Project</span>
        </button>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          id="navHamburger"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="mobileMenu"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="2"/>
            <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="2"/>
            <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="mobile-menu" id="mobileMenu" role="dialog" aria-label="Mobile navigation">
        <a href="#services" onClick={() => closeMobileMenu()}>Services</a>
        <a href="#work"     onClick={() => closeMobileMenu()}>Work</a>
        <a href="#process"  onClick={() => closeMobileMenu()}>Process</a>
        <a href="#about"    onClick={() => closeMobileMenu()}>About</a>
        <a href="#cta"      onClick={() => closeMobileMenu()}>Contact</a>
      </div>
    </>
  );
}

// referenced in onClick — will be overridden by JS init
function closeMobileMenu() {
  if (typeof window !== 'undefined') {
    const menu = document.getElementById('mobileMenu');
    const btn  = document.getElementById('navHamburger');
    menu?.classList.remove('open');
    btn?.setAttribute('aria-expanded', 'false');
  }
}
