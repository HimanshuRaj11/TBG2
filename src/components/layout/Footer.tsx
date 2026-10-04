'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { openJoin } = useApp();

  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <Link href="/" className="logo">
              <span className="cube"></span>
              <span>
                TheBTech<i>Guy</i>
              </span>
            </Link>
            <p style={{ margin: '12px 0', lineHeight: '1.6' }}>
              A community for India&apos;s next generation of builders, founders and creators.
            </p>
            <div className="row" style={{ marginTop: '10px' }}>
              <span className="tag" style={{ cursor: 'pointer' }}>𝕏</span>
              <span className="tag" style={{ cursor: 'pointer' }}>in</span>
              <span className="tag" style={{ cursor: 'pointer' }}>ig</span>
              <span className="tag" style={{ cursor: 'pointer' }}>yt</span>
              <span className="tag" style={{ cursor: 'pointer' }}>dc</span>
            </div>
          </div>

          <div>
            <b>Product</b>
            <Link href="/community">Community</Link>
            <Link href="/learn">Learn</Link>
            <Link href="/labs">Labs</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/ventures">Ventures</Link>
          </div>

          <div>
            <b>Resources</b>
            <Link href="/jobs">Jobs</Link>
            <Link href="/events">Events</Link>
            <Link href="/hackathons">Hackathons</Link>
            <Link href="/startups">Startups</Link>
            <Link href="/opportunities">Opportunities</Link>
          </div>

          <div>
            <b>Company</b>
            <Link href="/about">About</Link>
            <Link href="/solutions">Contact</Link>
            <Link href="/solutions">Partner with Us</Link>
          </div>

          <div>
            <b>Be Part of the Movement</b>
            <p style={{ marginBottom: '12px', lineHeight: '1.5' }}>
              Join thousands of builders who are learning, building and creating impact.
            </p>
            <button className="btn p" onClick={openJoin}>
              Join TheBTechGuy →
            </button>
          </div>
        </div>

        <p style={{ marginTop: '32px', color: 'var(--mu)', fontSize: '13px', borderTop: '1px solid var(--bd)', paddingTop: '20px' }}>
          © 2026 TheBTechGuy. All rights reserved. Listings and counts shown are demo data until replaced from the database. &nbsp; Made for Indian Builders · Build · Share · Learn · Grow
        </p>
      </div>
    </footer>
  );
}
