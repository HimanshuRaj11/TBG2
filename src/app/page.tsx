'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import FlywheelWheel from '@/components/shared/FlywheelWheel';
import { VerticalCard } from '@/components/shared/VerticalHero';
import { vOrder, gaps, steps, wy, featuredStartups, colleges } from '@/data/mockData';
import { useApp } from '@/context/AppContext';

export default function HomePage() {
  const { openJoin, showToast } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      showToast('Please enter a valid email address');
      return;
    }
    showToast('Subscribed to newsletter successfully!');
    setNewsletterEmail('');
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <div>
          <span className="pill">● A community for India&apos;s builders</span>
          <h1>
            One Ecosystem. <span>Infinite Possibilities.</span>
          </h1>
          <div className="rb">
            <span style={{ color: '#2563eb' }}>Learn. </span>
            <span style={{ color: '#10b981' }}>Build. </span>
            <span style={{ color: '#f97316' }}>Solve. </span>
            <span style={{ color: '#7c3aed' }}>Invest. </span>
            <span style={{ color: '#ec4899' }}>Grow.</span>
          </div>
          <p className="sub">
            TheBTechGuy is a complete ecosystem for students, founders, businesses and creators to
            learn skills, build products, solve real problems, get opportunities and grow together.
          </p>

          <div className="row">
            <button className="btn p" onClick={openJoin}>
              Join the Community →
            </button>
            <button
              className="btn"
              onClick={() => showToast('Overview video preview coming soon!')}
            >
              ▶ Watch Video
            </button>
          </div>

          <div
            className="row"
            style={{ marginTop: '24px', alignItems: 'center', flexWrap: 'nowrap' }}
          >
            <div className="avs">
              {['#2563eb', '#10b981', '#f97316', '#7c3aed', '#ec4899'].map((c, i) => (
                <i key={i} style={{ background: c }}>
                  {'RAMSP'[i]}
                </i>
              ))}
            </div>
            <div>
              <b style={{ display: 'block', fontSize: '14.5px' }}>
                10,000+ builders already joined
              </b>
              <div className="m">Students • Founders • Developers • Mentors • Investors</div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE FLYWHEEL */}
        <div>
          <FlywheelWheel />
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="stats">
        {[
          ['👥', '10K+', 'Community Members'],
          ['🚀', '250+', 'Startups in Network'],
          ['💼', '500+', 'Job Opportunities'],
          ['🏛️', '100+', 'Colleges & Partners'],
        ].map((x, idx) => (
          <div key={idx}>
            <span style={{ fontSize: '24px' }}>{x[0]}</span>
            <b>{x[1]}</b>
            <small>{x[2]}</small>
          </div>
        ))}
      </div>
      <p className="demo">
        Placeholder counts and names from the design mockups. Replace from the admin dashboard and
        verify before launch.
      </p>

      {/* TRUST BANNER */}
      <div className="trust">
        <p className="m">Trusted by students, startups and businesses across India</p>
        <div>
          {colleges.map((c) => (
            <b key={c}>🎓 {c}</b>
          ))}
          <span className="m">and 100+ more colleges</span>
        </div>
      </div>

      {/* FIVE BUSINESSES. ONE FLYWHEEL. */}
      <section className="band">
        <div className="split">
          <div>
            <span className="pill">TheBTechGuy ecosystem</span>
            <h2>
              Five Businesses.
              <br />
              <span className="gr">One Flywheel.</span>
            </h2>
            <p className="lead">
              A connected ecosystem where community brings people in, learning makes them skilled,
              labs turns ideas into products, solutions serves businesses and ventures backs the
              strongest startups.
            </p>
            <Link className="btn p" href="/learn">
              Explore Our Ecosystem →
            </Link>
          </div>
          <div className="v5">
            {vOrder.map((key) => (
              <VerticalCard key={key} vertKey={key} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT 2 */}
      <section className="band w">
        <div className="hero">
          <div>
            <span className="pill">About TheBTechGuy</span>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              From College to <span>Creating Impact</span>
            </h1>
            <p className="sub">
              We empower students, founders, businesses and creators with skills, technology, capital
              and community, all in one place.
            </p>
            {[
              'Network with like-minded people',
              'Get real-world opportunities',
              'Showcase your work and projects',
              'Learn from experienced builders',
            ].map((t) => (
              <div key={t} style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    color: '#fff',
                    background: 'var(--b)',
                    borderRadius: '50%',
                    padding: '1px 6px',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                <span>{t}</span>
              </div>
            ))}
            <div className="row" style={{ marginTop: '24px' }}>
              <Link className="btn p" href="/about">
                Know Our Story →
              </Link>
              <button className="btn" onClick={openJoin}>
                Join Community
              </button>
            </div>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div
              className="tile"
              style={{
                background: 'linear-gradient(135deg, #1e293b, #475569)',
                color: '#fff',
                gridRow: 'span 2',
                height: 'auto',
                minHeight: '260px',
                textAlign: 'center',
                font: "700 22px 'Bricolage Grotesque'",
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              TheBTechGuy
              <br />
              Build · Share
              <br />
              Learn · Grow
            </div>
            <div className="tile" style={{ background: 'linear-gradient(135deg, #dbeafe, #e0e7ff)' }}>
              👩‍💻
            </div>
            <div
              className="tile"
              style={{
                background: 'linear-gradient(135deg, #1e1b4b, #4338ca)',
                color: '#fff',
                fontSize: '15px',
                padding: '12px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              Build in Public
              <br />
              Ideas · People · Opportunities
            </div>
            <div className="card" style={{ gridColumn: '1 / -1' }}>
              <b className="gr" style={{ font: "800 26px 'Bricolage Grotesque'" }}>
                10K+
              </b>
              <span className="m">Active community members (placeholder)</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR GAPS WE ARE CLOSING */}
      <section className="band">
        <span className="pill">The problem</span>
        <h2>
          Four Gaps <span className="gr">We Are Closing</span>
        </h2>
        <p className="lead">
          We are solving the biggest challenges faced by students, founders and businesses in India.
        </p>

        <div className="grid">
          {gaps.map((g, idx) => (
            <div className="card" key={idx}>
              <div className="ic" style={{ background: `${g[3]}22`, fontSize: '22px' }}>
                {g[0]}
              </div>
              <h3>{g[1]}</h3>
              <p className="m">{g[2]}</p>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: '20px', padding: '28px' }}>
          <h2 style={{ fontSize: '28px', margin: 0 }}>
            One Platform. <span className="gr">End-to-End Journey.</span>
          </h2>
          <p className="m">
            Skills to jobs. Ideas to products. Businesses to scale. Founders to funding.
          </p>

          <div
            className="row"
            style={{
              justifyContent: 'space-between',
              marginTop: '16px',
              borderTop: '1px solid var(--bd)',
              paddingTop: '16px',
            }}
          >
            {steps.map((t, idx) => (
              <div key={idx} style={{ textAlign: 'center', minWidth: '110px' }}>
                <div
                  className="ic"
                  style={{
                    background: t[2],
                    margin: 'auto',
                    borderRadius: '50%',
                    width: '46px',
                    height: '46px',
                    boxShadow: `0 4px 12px ${t[2]}44`,
                  }}
                ></div>
                <b style={{ display: 'block', marginTop: '8px' }}>{t[0]}</b>
                <span className="tag" style={{ color: t[2], marginTop: '4px' }}>
                  {t[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN DO ON THEBTECHGUY */}
      <section>
        <span className="pill">Explore opportunities</span>
        <h2>
          What You Can Do on <span className="gr">TheBTechGuy</span>
        </h2>
        <p className="lead">
          Whether you are a student, founder or business, we give you the tools, people and
          opportunities to take your next step.
        </p>
        <div className="scr">
          {wy.map((w, idx) => (
            <Link key={idx} className="card wy" href={`/${w[4]}`}>
              <div className="tile" style={{ background: `${w[5]}22` }}>
                {w[0]}
              </div>
              <div>
                <h3 style={{ fontSize: '16px' }}>{w[1]}</h3>
                <p className="m">{w[2]}</p>
                <b style={{ color: w[5], marginTop: 'auto', display: 'block' }}>{w[3]} →</b>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED STARTUPS */}
      <section className="band w">
        <div className="split" style={{ gridTemplateColumns: '1fr 1.6fr' }}>
          <div>
            <span className="pill">Featured startups</span>
            <h2>
              Discover &amp; Support <span className="gr">India&apos;s Next Big Startups</span>
            </h2>
            <p className="lead">
              Explore early-stage startups, meet the founders and follow their journey as they build
              the future.
            </p>
            <Link className="btn p" href="/startups">
              Explore Startups →
            </Link>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
            {featuredStartups.map((f, idx) => (
              <Link key={idx} className="card" href="/startups" style={{ textAlign: 'center' }}>
                <div
                  className="av"
                  style={{
                    margin: 'auto',
                    background: f[3],
                    color: '#fff',
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                  }}
                >
                  {f[0][0]}
                </div>
                <h3 style={{ marginTop: '8px' }}>{f[0]}</h3>
                <div>
                  <span className="tag">{f[1]}</span>
                </div>
                <p className="m">{f[2]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER BANNER */}
      <div className="news">
        <div className="row" style={{ flexWrap: 'nowrap', alignItems: 'center', gap: '16px' }}>
          <div className="avs">
            {['#2563eb', '#10b981', '#f97316'].map((c, i) => (
              <i key={i} style={{ background: c }}>
                ★
              </i>
            ))}
          </div>
          <div>
            <span className="tag" style={{ background: '#ffffff22', color: '#fff' }}>
              Stay updated
            </span>
            <h2 style={{ fontSize: '28px', margin: '6px 0', color: '#fff' }}>
              Join 10,000+ Builders on Our Newsletter
            </h2>
            <p className="m">
              Get the latest jobs, events, startup news and resources directly in your inbox.
            </p>
          </div>
        </div>

        <div>
          <form onSubmit={handleNewsletterSubmit} className="bar">
            <input
              id="ne"
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <button type="submit" className="btn p" id="nl" style={{ flex: 'none' }}>
              Subscribe →
            </button>
          </form>
          <p className="m" style={{ fontSize: '13px' }}>
            ✓ Weekly opportunities &nbsp; ✓ Startup &amp; tech news &nbsp; ✓ No spam, ever
          </p>
        </div>
      </div>
    </>
  );
}
