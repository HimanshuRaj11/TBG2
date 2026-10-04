'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

export default function JoinModal() {
  const { joinOpen, closeJoin, saveUser } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Student');
  const [loc, setLoc] = useState('');
  const [skills, setSkills] = useState('');
  const [error, setError] = useState('');

  if (!joinOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !/\S+@\S+\.\S+/.test(email.trim())) {
      setError('Enter your name and a valid email address.');
      return;
    }

    saveUser({
      name: name.trim(),
      email: email.trim(),
      role,
      loc: loc.trim() || 'India',
      skills: skills.split(',').map((s) => s.trim()).filter(Boolean),
    });

    setName('');
    setEmail('');
    setLoc('');
    setSkills('');
    setError('');
  };

  return (
    <div className="ov" onClick={(e) => e.target === e.currentTarget && closeJoin()}>
      <div className="box">
        <h2 style={{ fontSize: '26px' }}>Join TheBTechGuy</h2>
        <p className="m">Takes under a minute. You can change your role any time.</p>

        <form onSubmit={handleSubmit}>
          <div className="f">
            <input
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option>Student</option>
              <option>Developer</option>
              <option>Designer</option>
              <option>Founder</option>
              <option>Investor</option>
              <option>Mentor</option>
              <option>Creator</option>
              <option>Professional</option>
              <option>Recruiter</option>
              <option>Company</option>
              <option>College</option>
            </select>
            <input
              placeholder="City (e.g. Noida, Bengaluru, Delhi NCR)"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
            />
            <input
              placeholder="Skills, comma separated (e.g. React, Python, UI/UX)"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>

          <div className="row">
            <button type="submit" className="btn p">
              Create profile
            </button>
            <button type="button" className="btn" onClick={closeJoin}>
              Cancel
            </button>
          </div>

          {error && (
            <p className="m" style={{ marginTop: '12px', color: '#e11d48', fontWeight: 500 }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
