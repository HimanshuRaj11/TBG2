'use client';

import React from 'react';
import ListingView, { FilterConfig } from '@/components/shared/ListingView';
import { jobs } from '@/data/mockData';

export default function JobsPage() {
  const filters: FilterConfig[] = [
    {
      label: 'All types',
      field: 'type',
      options: ['Full-time', 'Internship', 'Contract', 'Freelance'],
    },
    {
      label: 'All locations',
      field: 'loc',
      options: ['Noida', 'Delhi NCR', 'Gurugram', 'Remote'],
    },
    {
      label: 'Any mode',
      field: 'remote',
      options: ['Remote'],
    },
  ];

  return (
    <ListingView
      title="Jobs"
      lead="Roles and internships across India."
      items={jobs}
      filters={filters}
    />
  );
}
