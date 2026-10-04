'use client';

import React from 'react';
import VerticalHero from '@/components/shared/VerticalHero';
import ItemCard from '@/components/shared/ItemCard';
import { cats, courses, cohorts, ppl } from '@/data/mockData';
import { useApp } from '@/context/AppContext';

export default function LearnPage() {
  const { showToast, openJoin } = useApp();

  const careerSteps = ["React", "TypeScript", "Next.js", "Projects", "Portfolio", "Jobs"];

  return (
    <div>
      <VerticalHero currentKey="learn" />

      {/* Explore Learning */}
      <section>
        <h2>Explore Learning</h2>
        <p className="lead">Ten tracks from AI to career preparation.</p>
        <div className="chips">
          {cats.map((c) => (
            <button
              key={c}
              className="chip"
              onClick={() => showToast(`${c} courses open soon (demo)`)}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section>
        <h2>Featured courses</h2>
        <p className="lead">Practical courses built around real projects.</p>
        <p className="demo" style={{ textAlign: 'left' }}>
          Demo data. Ratings and courses are placeholders.
        </p>

        <div className="grid">
          {courses.map((c, idx) => (
            <div key={idx} className="card h">
              <div className="tile" style={{ background: '#10b98122', height: '90px' }}>
                📘
              </div>
              <h3>{c[0]}</h3>
              <p className="m">{c[1]}</p>
              <div>
                <span className="tag t">{c[2]}</span>
                <span className="tag">{c[3]}</span>
                <span className="tag ok">★ {c[4]}</span>
              </div>
              <button
                className="btn p"
                style={{ marginTop: 'auto' }}
                onClick={() => showToast('Course page opens soon (demo)')}
              >
                View Course
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Live Cohorts */}
      <section>
        <h2>Live cohorts</h2>
        <p className="lead">Learn with a mentor and a group, on a schedule.</p>
        <p className="demo" style={{ textAlign: 'left' }}>
          Demo data. Dates, seats and prices are set by admins once a cohort is confirmed.
        </p>

        <div className="grid">
          {cohorts.map((c, idx) => (
            <div key={idx} className="card h">
              <h3>{c[0]}</h3>
              <div className="m" style={{ lineHeight: '1.6' }}>
                {c[1]}
                <br />
                {c[2]} · {c[3]}
                <br />
                {c[4]} · {c[5]}
              </div>
              <button
                className="btn"
                style={{ marginTop: 'auto' }}
                onClick={() => showToast('Added to cohort waitlist (demo)')}
              >
                Join waitlist
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Mentors */}
      <section>
        <h2>Mentors</h2>
        <p className="lead">Learn directly from people building in the industry.</p>
        <div className="grid">
          <ItemCard item={ppl[3]} />
        </div>
      </section>

      {/* Career Path Roadmap */}
      <section>
        <h2>Career path</h2>
        <p className="lead">Example roadmap: Frontend Developer.</p>
        <div className="flow">
          {careerSteps.map((step, idx) => (
            <React.Fragment key={step}>
              <div
                className="fs"
                style={
                  {
                    '--d': `${idx * 0.55}s`,
                    '--c': '#10b981',
                  } as React.CSSProperties
                }
              >
                {step}
              </div>
              {idx < careerSteps.length - 1 && <span className="m">→</span>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="cta">
          <h2>Ready to start?</h2>
          <p className="m" style={{ margin: '12px auto 20px', maxWidth: '480px' }}>
            Build practical skills, complete assignments and stand out to hiring managers.
          </p>
          <button className="btn p" onClick={openJoin}>
            Start Learning →
          </button>
        </div>
      </section>
    </div>
  );
}
