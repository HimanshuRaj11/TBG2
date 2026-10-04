'use client';

import React, { useState, useMemo } from 'react';
import ItemCard from './ItemCard';
import { DirectoryItem } from '@/types';

export interface FilterConfig {
  label: string;
  field: string;
  options: string[];
}

interface ListingViewProps {
  title: string;
  lead: string;
  items: DirectoryItem[];
  filters: FilterConfig[];
}

export default function ListingView({ title, lead, items, filters }: ListingViewProps) {
  const [search, setSearch] = useState('');
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  const handleFilterChange = (field: string, val: string) => {
    setFilterValues((prev) => ({ ...prev, [field]: val }));
  };

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();

    return items.filter((item) => {
      const org = 'org' in item ? item.org : '';
      const desc = 'desc' in item ? item.desc : '';
      const tags = item.tags.join(' ');
      const searchMatch = !q || `${item.title} ${org} ${desc} ${tags}`.toLowerCase().includes(q);

      if (!searchMatch) return false;

      for (const filter of filters) {
        const val = filterValues[filter.field];
        if (!val) continue;

        if (filter.field === 'remote') {
          if ('remote' in item && val === 'Remote' && !item.remote) return false;
        } else if (filter.field === 'kind') {
          if (item.kind !== val) return false;
        } else if (filter.field in item) {
          const itemVal = (item as unknown as Record<string, unknown>)[filter.field];
          if (itemVal !== val) return false;
        }
      }

      return true;
    });
  }, [items, search, filterValues, filters]);

  return (
    <section>
      <h2>{title}</h2>
      <p className="lead">{lead}</p>
      <p className="demo" style={{ textAlign: 'left' }}>
        Demo data — replaced from the admin dashboard in production.
      </p>

      <div className="bar">
        <input
          placeholder={`Search ${title.toLowerCase()}…`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filters.map((f) => (
          <select
            key={f.field}
            value={filterValues[f.field] || ''}
            onChange={(e) => handleFilterChange(f.field, e.target.value)}
          >
            <option value="">{f.label}</option>
            {f.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ))}
      </div>

      <div className="grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <div className="empty" style={{ gridColumn: '1 / -1' }}>
            Nothing matches your search or filters.
            <br />
            Try clearing a filter or searching for another keyword.
          </div>
        )}
      </div>
    </section>
  );
}
