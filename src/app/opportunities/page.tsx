'use client';

import React, { useState, useMemo } from 'react';
import ItemCard from '@/components/shared/ItemCard';
import { jobs, hacks, evs } from '@/data/mockData';
import { DirectoryItem } from '@/types';

export default function OpportunitiesPage() {
  const [activeChip, setActiveChip] = useState('All');
  const [search, setSearch] = useState('');

  const allItems: DirectoryItem[] = useMemo(() => [...jobs, ...hacks, ...evs], []);

  const chips = ['All', 'Jobs', 'Internships', 'Hackathons', 'Events'];

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();

    return allItems.filter((item) => {
      // Chip matching
      let chipMatch = true;
      if (activeChip === 'Jobs') {
        chipMatch = item.kind === 'Jobs';
      } else if (activeChip === 'Internships') {
        chipMatch = 'type' in item && item.type === 'Internship';
      } else if (activeChip === 'Hackathons') {
        chipMatch = item.kind === 'Hackathons';
      } else if (activeChip === 'Events') {
        chipMatch = item.kind === 'Events';
      }

      if (!chipMatch) return false;

      // Search matching
      if (!q) return true;
      const org = 'org' in item ? item.org : '';
      const tags = item.tags.join(' ');
      return `${item.title} ${org} ${tags}`.toLowerCase().includes(q);
    });
  }, [allItems, activeChip, search]);

  return (
    <section>
      <h2>Opportunities</h2>
      <p className="lead">Jobs, hackathons, events and internships in one place.</p>
      <p className="demo" style={{ textAlign: 'left' }}>
        Demo data — replaced from the admin dashboard in production.
      </p>

      {/* Category Chips */}
      <div className="chips">
        {chips.map((chip) => (
          <button
            key={chip}
            className={`chip ${activeChip === chip ? 'on' : ''}`}
            onClick={() => setActiveChip(chip)}
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="bar">
        <input
          placeholder="Search all opportunities…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <div className="empty" style={{ gridColumn: '1 / -1' }}>
            No opportunities match your current filter.
          </div>
        )}
      </div>
    </section>
  );
}
