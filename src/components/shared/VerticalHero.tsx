'use client';

import React from 'react';
import Link from 'next/link';
import { verts, vOrder, IC } from '@/data/mockData';
import { useApp } from '@/context/AppContext';

export function VerticalCard({ vertKey }: { vertKey: string }) {
  const v = verts[vertKey];
  if (!v) return null;

  return (
    <Link className="vc" href={`/${vertKey}`}>
      <div className="vi" style={{ background: `${v.c}22` }}>
        {IC[vertKey]}
      </div>
      <h3>{v.n}</h3>
      <p style={{ color: v.c, fontWeight: 600, fontSize: '12px' }}>{v.t}</p>
      <p className="m" style={{ fontSize: '12px' }}>
        {v.d}
      </p>
      <span className="ar" style={{ color: v.c }}>
        →
      </span>
    </Link>
  );
}

export default function VerticalHero({ currentKey }: { currentKey: string }) {
  const v = verts[currentKey];
  const { openJoin, showToast, user } = useApp();

  if (!v) return null;

  const handleCta = () => {
    if (!user) {
      openJoin();
      showToast('Join to continue');
    } else {
      showToast(`${v.cta} request submitted! (demo)`);
    }
  };

  const otherVerticals = vOrder.filter((k) => k !== currentKey);

  return (
    <section>
      <div className="eye" style={{ color: v.c }}>
        {v.n} · {v.d}
      </div>
      <h1 style={{ fontSize: 'clamp(36px,6vw,64px)' }}>{v.t}</h1>

      <div className="grid" style={{ margin: '24px 0' }}>
        <div className="card" style={{ gridColumn: 'span 2', borderTop: `3px solid ${v.c}` }}>
          <h3>What we offer</h3>
          {v.o.map((item, idx) => (
            <div key={idx} style={{ padding: '2px 0' }}>
              • {item}
            </div>
          ))}
        </div>

        <div className="card">
          <h3>Who it serves</h3>
          <p className="m">{v.s}</p>
        </div>

        <div className="card">
          <h3>How it earns</h3>
          <p className="m">{v.e}</p>
        </div>

        <div className="card">
          <h3>{v.x[0]}</h3>
          <p className="m">{v.x[1]}</p>
        </div>
      </div>

      <div className="row">
        <button className="btn p" onClick={handleCta}>
          {v.cta}
        </button>
        <Link className="btn" href="/">
          Back to ecosystem
        </Link>
      </div>

      <h2 style={{ marginTop: '48px', fontSize: '26px' }}>The other verticals</h2>
      <div className="grid" style={{ marginTop: '14px' }}>
        {otherVerticals.map((k) => (
          <VerticalCard key={k} vertKey={k} />
        ))}
      </div>
    </section>
  );
}
