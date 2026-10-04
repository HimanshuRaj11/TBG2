'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { allDirectoryItems } from '@/data/mockData';
import { DirectoryItem } from '@/types';

export default function SearchModal() {
  const { searchOpen, closeSearch } = useApp();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DirectoryItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchOpen) {
      setQuery('');
      setResults(allDirectoryItems.slice(0, 8));
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults(allDirectoryItems.slice(0, 8));
      return;
    }
    const filtered = allDirectoryItems.filter((item) => {
      const org = 'org' in item ? item.org : '';
      const desc = 'desc' in item ? item.desc : '';
      const tags = item.tags.join(' ');
      const str = `${item.title} ${org} ${desc} ${tags}`.toLowerCase();
      return str.includes(q);
    });
    setResults(filtered.slice(0, 12));
  }, [query]);

  if (!searchOpen) return null;

  const handleSelect = (item: DirectoryItem) => {
    closeSearch();
    const routeMap: Record<string, string> = {
      Jobs: '/jobs',
      Hackathons: '/hackathons',
      Events: '/events',
      Startups: '/startups',
      People: '/community',
    };
    router.push(routeMap[item.kind] || '/');
  };

  return (
    <div className="ov" onClick={(e) => e.target === e.currentTarget && closeSearch()}>
      <div className="box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <input
            ref={inputRef}
            id="si"
            placeholder="Search jobs, startups, hackathons, events, people…"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="res" id="sr">
          {results.length > 0 ? (
            results.map((item) => (
              <button
                key={item.id}
                type="button"
                className="res-item"
                onClick={() => handleSelect(item)}
              >
                <div>
                  <span style={{ fontWeight: 600, color: 'var(--tx)' }}>{item.title}</span>
                  {'org' in item && item.org && (
                    <span style={{ color: 'var(--mu)', fontSize: '12px', marginLeft: '6px' }}>
                      · {item.org}
                    </span>
                  )}
                </div>
                <span className="tag t" style={{ fontSize: '11px', margin: 0 }}>
                  {item.kind}
                </span>
              </button>
            ))
          ) : (
            <div className="empty">No results. Try a skill, city, role or company.</div>
          )}
        </div>
      </div>
    </div>
  );
}
