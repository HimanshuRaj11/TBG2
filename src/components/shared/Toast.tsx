'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function Toast() {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="toast">
      <span>●</span>
      <span>{toastMessage}</span>
    </div>
  );
}
