'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import VerticalHero from '@/components/shared/VerticalHero';
import ItemCard from '@/components/shared/ItemCard';
import { sts, investors, venturesPillars } from '@/data/mockData';
import { useApp } from '@/context/AppContext';

export default function VenturesPage() {
  const { showToast } = useApp();
  const [investorType, setInvestorType] = useState('');
  const [focusArea, setFocusArea] = useState('');

  const filteredInvestors = useMemo(() => {
    return investors.filter((inv) => {
      const typeMatch = !investorType || inv.type === investorType;
      const focusMatch = !focusArea || inv.focus.includes(focusArea);
      return typeMatch && focusMatch;
    });
  }, [investorType, focusArea]);

  return (
    <div>
      <VerticalHero currentKey="ventures" />

      {/* Three Pillars */}
      <section>
        <h2>Three pillars</h2>
        <p className="lead">Support from early idea to scalable company.</p>
        <div className="grid">
          {venturesPillars.map((l, idx) => (
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
              {l[1] === 'Discover' ? (
                <Link className="btn p" style={{ marginTop: 'auto' }} href="/startups">
                  {l[3]}
                </Link>
              ) : (
                <button
                  className="btn p"
                  style={{ marginTop: 'auto' }}
                  onClick={() => showToast(`${l[3]} (demo)`)}
                >
                  {l[3]}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Startup showcase */}
      <section>
        <h2>Startup showcase</h2>
        <p className="lead">Startups submitted by founders.</p>
        <p className="demo" style={{ textAlign: 'left' }}>
          Demo data. Funding and traction appear only when provided and labeled.
        </p>
        <div className="grid">
          {sts.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Investor directory */}
      <section>
        <h2>Investor directory</h2>
        <p className="lead">Filter by investor type and focus area.</p>
        <p className="demo" style={{ textAlign: 'left' }}>
          Demo data. The Verified Investor badge appears only after admin verification. No
          portfolio or investment claims are shown without it.
        </p>

        <div className="bar">
          <select value={investorType} onChange={(e) => setInvestorType(e.target.value)}>
            <option value="">All investor types</option>
            {['Angel', 'VC', 'Accelerator', 'Corporate', 'Family Office'].map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
          <select value={focusArea} onChange={(e) => setFocusArea(e.target.value)}>
            <option value="">All focus areas</option>
            {['AI', 'SaaS', 'FinTech', 'EdTech', 'HealthTech', 'ClimateTech'].map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="grid">
          {filteredInvestors.length > 0 ? (
            filteredInvestors.map((i, idx) => (
              <div key={idx} className="card h">
                <h3>{i.name}</h3>
                <div>
                  <span className="tag t">{i.type}</span>
                  {i.focus.map((tag) => (
                    <span key={tag} className="tag t">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="m">Unverified demo profile</span>
                <div className="row" style={{ marginTop: 'auto', paddingTop: '8px' }}>
                  <button
                    className="btn"
                    onClick={() => showToast('Profile opens soon (demo)')}
                  >
                    View Profile
                  </button>
                  <button
                    className="btn p"
                    onClick={() => showToast('Introduction requested (demo)')}
                  >
                    Request Introduction
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty" style={{ gridColumn: '1 / -1' }}>
              No investors match. Clear a filter to view all investors.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
