'use client';

import React from 'react';
import VerticalHero from '@/components/shared/VerticalHero';
import { svc, proc, tiers } from '@/data/mockData';
import { useApp } from '@/context/AppContext';

export default function SolutionsPage() {
  const { showToast } = useApp();

  return (
    <div>
      <VerticalHero currentKey="solutions" />

      {/* Services */}
      <section>
        <h2>Services</h2>
        <p className="lead">Technology for startups, MSMEs and growing businesses.</p>
        <div className="grid">
          {svc.map((l, idx) => (
            <div key={idx} className="card h" style={{ borderTop: '3px solid #f97316' }}>
              <div className="ic" style={{ fontSize: '24px' }}>
                {l[0]}
              </div>
              <h3>{l[1]}</h3>
              {l[2].map((x, i) => (
                <div key={i} style={{ padding: '2px 0' }}>
                  • {x}
                </div>
              ))}
              <button
                className="btn p"
                style={{ marginTop: 'auto' }}
                onClick={() => showToast('Request received (demo)')}
              >
                {l[3]}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section>
        <h2>How we work</h2>
        <p className="lead">Six steps from problem to scale.</p>
        <div className="tl">
          {proc.map((x, i) => (
            <div key={i} className="card">
              <b className="n">0{i + 1}</b>
              <h3>{x[0]}</h3>
              <p className="m">{x[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section>
        <h2>Packages</h2>
        <p className="lead">
          Every project is scoped to your needs, so we quote instead of listing fixed prices.
        </p>
        <div className="grid">
          {tiers.map((x, i) => (
            <div
              key={i}
              className="card h"
              style={{
                borderColor: i === 1 ? 'var(--b)' : undefined,
                boxShadow: i === 1 ? '0 12px 32px rgba(11, 107, 255, 0.12)' : undefined,
              }}
            >
              <h3>{x[0]}</h3>
              <p className="m">{x[1]}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {x[2].map((y) => (
                  <div key={y}>✓ {y}</div>
                ))}
              </div>
              <button
                className={`btn ${i === 1 ? 'p' : ''}`}
                style={{ marginTop: 'auto' }}
                onClick={() => showToast('Quote request sent (demo)')}
              >
                {x[3]}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
