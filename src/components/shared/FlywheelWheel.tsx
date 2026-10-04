'use client';

import React from 'react';
import Link from 'next/link';
import { IC, verts } from '@/data/mockData';

export default function FlywheelWheel() {
  const nodes = [
    { name: 'Learn', sub: 'Upgrade skills', key: 'learn' },
    { name: 'Labs', sub: 'Build products', key: 'labs' },
    { name: 'Solutions', sub: 'Solve for businesses', key: 'solutions' },
    { name: 'Ventures', sub: 'Invest & accelerate', key: 'ventures' },
    { name: 'Community', sub: 'Connect & grow', key: 'community' },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '640px', margin: 'auto' }}>
      <svg
        id="wheel"
        viewBox="0 0 520 470"
        role="img"
        aria-label="TheBTechGuy at the center of Learn, Labs, Solutions, Ventures and Community"
      >
        <defs>
          <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#38bdf8" />
            <stop offset="0.55" stopColor="#2563eb" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit track with subtle rotating dash animation */}
        <g className="orb">
          <circle
            cx="260"
            cy="230"
            r="165"
            fill="none"
            stroke="#c9d3ee"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
        </g>

        {/* Inner backdrop circle */}
        <circle cx="260" cy="230" r="108" fill="#ffffff" opacity="0.75" />

        {/* Center TheBTechGuy Card with animated tilt */}
        <g style={{ cursor: 'pointer' }}>
          <rect
            x="190"
            y="170"
            width="140"
            height="120"
            rx="26"
            fill="url(#gg)"
            transform="rotate(-6 260 230)"
            filter="drop-shadow(0 12px 28px rgba(37,99,235,0.35))"
          />
          <text
            x="260"
            y="236"
            textAnchor="middle"
            fill="#ffffff"
            fontWeight="800"
            fontSize="15"
            transform="rotate(-6 260 230)"
            letterSpacing="-0.02em"
          >
            TheBTechGuy
          </text>
        </g>

        {/* 5 Surrounding Nodes */}
        {nodes.map((node, i) => {
          const angle = (-90 + i * 72) * (Math.PI / 180);
          const x = 260 + 170 * Math.cos(angle);
          const y = 230 + 170 * Math.sin(angle);
          const color = verts[node.key].c;
          const icon = IC[node.key];

          return (
            <Link key={node.key} href={`/${node.key}`}>
              <g className="wheel-node" style={{ transformOrigin: `${x}px ${y}px` }}>
                {/* Node halo ring */}
                <circle cx={x} cy={y} r="38" fill={color} opacity="0.12" />
                {/* Core node circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="34"
                  fill={color}
                  filter="drop-shadow(0 4px 10px rgba(0,0,0,0.15))"
                />
                {/* Node Icon */}
                <text x={x} y={y + 9} textAnchor="middle" fontSize="26">
                  {icon}
                </text>
                {/* Node Title */}
                <text
                  x={x}
                  y={y + 58}
                  textAnchor="middle"
                  fontWeight="700"
                  fontSize="15"
                  fill="#0b1030"
                  fontFamily="'Bricolage Grotesque', sans-serif"
                >
                  {node.name}
                </text>
                {/* Node Subtitle */}
                <text
                  x={x}
                  y={y + 75}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="600"
                  fill={color}
                >
                  {node.sub}
                </text>
              </g>
            </Link>
          );
        })}
      </svg>
    </div>
  );
}
