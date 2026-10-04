'use client';

import React from 'react';
import ListingView, { FilterConfig } from '@/components/shared/ListingView';
import { sts } from '@/data/mockData';

export default function StartupsPage() {
  const filters: FilterConfig[] = [
    {
      label: 'All industries',
      field: 'ind',
      options: ['Fintech', 'EdTech', 'AgriTech', 'HealthTech'],
    },
    {
      label: 'Any stage',
      field: 'stage',
      options: ['Idea', 'MVP', 'Pre-seed'],
    },
  ];

  return (
    <ListingView
      title="Startups"
      lead="Directory of builder-submitted startups across India."
      items={sts}
      filters={filters}
    />
  );
}
