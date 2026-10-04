'use client';

import React from 'react';
import VerticalHero from '@/components/shared/VerticalHero';
import { lab3, prods } from '@/data/mockData';
import { useApp } from '@/context/AppContext';

export default function LabsPage() {
  const { showToast } = useApp();

  const workflowSteps = [
    'Idea',
    'Research',
    'Prototype',
    'MVP',
    'Test',
    'Launch',
    'Revenue',
    'Scale',
  ];

  return (
    <div>
      <VerticalHero currentKey="labs" />

      {/* Three labs */}
      <section>
        <h2>Three labs</h2>
        <p className="lead">Where ideas become products.</p>
        <div className="grid">
          {lab3.map((l, idx) => (
            <div key={idx} className="card h" style={{ borderTop: `3px solid ${l[4]}` }}>
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
                onClick={() => showToast(`${l[3]} (demo)`)}
              >
                {l[3]}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Labs workflow */}
      <section>
        <h2>Labs workflow</h2>
        <p className="lead">From idea to scale.</p>
        <div className="flow">
          {workflowSteps.map((step, idx) => (
            <React.Fragment key={step}>
              <div
                className="fs"
                style={
                  {
                    '--d': `${idx * 0.55}s`,
                    '--c': '#2563eb',
                  } as React.CSSProperties
                }
              >
                {step}
              </div>
              {idx < workflowSteps.length - 1 && <span className="m">→</span>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Product showcase */}
      <section>
        <h2>Product showcase</h2>
        <p className="lead">Products from the studio.</p>
        <p className="demo" style={{ textAlign: 'left' }}>
          Demo data. Product names and statuses are placeholders.
        </p>

        <div className="grid">
          {prods.map((x, idx) => (
            <div key={idx} className="card h">
              <h3>{x[0]}</h3>
              <div>
                <span className="tag t">{x[1]}</span>
                <span className={`tag ${x[2] === 'Live' ? 'ok' : ''}`}>{x[2]}</span>
              </div>
              <button
                className="btn"
                style={{ marginTop: 'auto' }}
                onClick={() => showToast(`${x[3]} (demo)`)}
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
