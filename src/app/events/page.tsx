'use client';

import React from 'react';
import ListingView, { FilterConfig } from '@/components/shared/ListingView';
import { evs } from '@/data/mockData';

export default function EventsPage() {
  const filters: FilterConfig[] = [
    {
      label: 'All types',
      field: 'type',
      options: ['Founder meetup', 'Workshop', 'Demo day', 'Investor session'],
    },
  ];

  return (
    <ListingView
      title="Events"
      lead="Meetups, workshops and demo days."
      items={evs}
      filters={filters}
    />
  );
}
