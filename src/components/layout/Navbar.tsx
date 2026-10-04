'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';

export default function Navbar() {
  const pathname = usePathname();
  const { openSearch, openJoin, mobileNavOpen, setMobileNavOpen, toggleMobileNav } = useApp();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Community', href: '/community' },
    { label: 'Learn', href: '/learn' },
    // { label: 'Labs', href: '/labs' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Events', href: '/events' },
    // { label: 'Resources', href: '/opportunities' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav>
      <div className="wrap">
        <Link href="/" className="logo" onClick={() => setMobileNavOpen(false)}>
          <span className="cube"></span>
          <span>
            TheBTech<i>Guy</i>
          </span>
        </Link>

        {/* Clean direct navigation links with NO dropdowns */}
        <div className={`links ${mobileNavOpen ? 'open' : ''}`} id="links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? 'on' : ''}
              onClick={() => setMobileNavOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search trigger */}
        <button className="srch" id="sb" aria-label="Search" onClick={openSearch}>
          <span style={{ fontSize: '15px' }}>⌕</span>
          <span className="t">Search</span>
          <kbd className="t">Ctrl K</kbd>
        </button>

        {/* Desktop Action Buttons */}
        <button className="btn desk" onClick={openJoin}>
          Login
        </button>
        <button className="btn p desk" onClick={openJoin}>
          Join Community →
        </button>

        {/* Mobile Toggle */}
        <button
          className="btn mob"
          id="mb"
          aria-label="Menu"
          onClick={toggleMobileNav}
        >
          {mobileNavOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
