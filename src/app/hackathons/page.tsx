'use client';

import React from 'react';
import ListingView, { FilterConfig } from '@/components/shared/ListingView';
import { hacks } from '@/data/mockData';

export default function HackathonsPage() {
  const filters: FilterConfig[] = [
    {
      label: 'Any mode',
      field: 'mode',
      options: ['Online', 'Offline', 'Hybrid'],
    },
  ];

  return (
    <ListingView
      title="Hackathons"
      lead="Compete, learn and ship with a team."
      items={hacks}
      filters={filters}
    />
  );
}
