'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export default function AboutPage() {
  const { openJoin } = useApp();

  const values = [
    ['👥', 'Network with like-minded people', 'Connect with students, founders, developers, mentors and investors across the nation.'],
    ['💼', 'Get real-world opportunities', 'Find high-impact jobs, internships, freelance gigs, incubator funding and industry collaborations.'],
    ['📋', 'Showcase your work and projects', 'Build an authenticated builder profile, ship public updates and get discovered by top startups.'],
    ['📊', 'Learn from experienced builders', 'Access practical engineering courses, live community cohorts, and direct mentorship.'],
  ];

  const metrics = [
    ['10K+', 'Community members'],
    ['250+', 'Startups in network'],
    ['500+', 'Job opportunities'],
    ['100+', 'Colleges & partners'],
  ];

  return (
    <div>
      <section className="hero">
        <div>
          <span className="pill">About TheBTechGuy</span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            From College to <span>Creating Impact</span>
          </h1>
          <p className="sub">
            TheBTechGuy is a multi-vertical ecosystem that helps students, founders, businesses and creators come together to learn, build, solve, invest and grow, all in one place.
          </p>

          <div style={{ marginTop: '20px' }}>
            {values.map((v, idx) => (
              <div
                key={idx}
                className="row"
                style={{ flexWrap: 'nowrap', marginBottom: '16px', alignItems: 'flex-start' }}
              >
                <div className="ic" style={{ marginTop: '2px' }}>
                  {v[0]}
                </div>
                <div>
                  <b style={{ fontSize: '15px' }}>{v[1]}</b>
                  <div className="m" style={{ marginTop: '2px' }}>
                    {v[2]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row" style={{ marginTop: '28px' }}>
            <button className="btn p" onClick={openJoin}>
              Join The Movement →
            </button>
            <Link className="btn" href="/community">
              Explore Community
            </Link>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          {metrics.map((m, idx) => (
            <div key={idx} className="card" style={{ textAlign: 'center', padding: '24px' }}>
              <b className="gr" style={{ font: "800 32px 'Bricolage Grotesque'", display: 'block' }}>
                {m[0]}
              </b>
              <span className="m" style={{ fontWeight: 500, fontSize: '14px' }}>
                {m[1]}
              </span>
            </div>
          ))}
          <p className="demo" style={{ gridColumn: '1 / -1', textAlign: 'left', marginTop: '4px' }}>
            Placeholder counts taken from the design mockups. Real metrics will update from the admin database.
          </p>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="band w">
        <div className="cta" style={{ textAlign: 'center', maxWidth: '900px', margin: 'auto' }}>
          <span className="pill">Our Mission</span>
          <h2 style={{ fontSize: '32px', margin: '12px 0' }}>
            Empowering 1 Million Indian Builders by 2030
          </h2>
          <p className="sub" style={{ margin: '0 auto 24px', textAlign: 'center' }}>
            We believe India&apos;s greatest economic advantage is its ambitious young technical talent.
            By connecting education, studio venture labs, agency solutions, and community capital,
            we are building the springboard for the next decade of unicorns and indie successes.
          </p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <button className="btn p" onClick={openJoin}>
              Join TheBTechGuy Community →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
