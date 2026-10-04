'use client';

import React from 'react';
import { DirectoryItem } from '@/types';
import { useApp } from '@/context/AppContext';

interface ItemCardProps {
  item: DirectoryItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  const { savedItems, toggleSave, user, openJoin, showToast } = useApp();

  const isSaved = savedItems.includes(item.id);

  const org = 'org' in item ? item.org : '';
  const loc = 'loc' in item ? item.loc : '';
  const date = 'date' in item ? item.date : '';
  const extra =
    ('type' in item ? item.type : '') ||
    ('mode' in item ? item.mode : '') ||
    ('stage' in item ? item.stage : '') ||
    ('role' in item ? item.role : '');

  const meta = [org, loc, extra, date].filter(Boolean).join(' · ');

  const handleAction = () => {
    if (!user) {
      openJoin();
      showToast('Join to continue');
      return;
    }

    const actionTextMap: Record<string, string> = {
      Jobs: `Application sent for ${item.title}! (demo)`,
      Hackathons: `Registered for ${item.title}! (demo)`,
      Events: `Registered for ${item.title}! (demo)`,
      Startups: `Opened details for ${item.title} (demo)`,
      People: `Connection request sent to ${item.title}! (demo)`,
    };

    showToast(actionTextMap[item.kind] || 'Action completed! (demo)');
  };

  const actionLabel = {
    Jobs: 'Apply now',
    Hackathons: 'Register',
    Events: 'Register',
    Startups: 'View startup',
    People: 'Connect',
  }[item.kind];

  return (
    <div className="card h">
      <div className="row" style={{ flexWrap: 'nowrap', alignItems: 'center' }}>
        <div className="av">{item.title[0]}</div>
        <div>
          <h3>{item.title}</h3>
          <div className="m">{meta}</div>
        </div>
      </div>

      {'desc' in item && item.desc && <p className="m">{item.desc}</p>}

      <div>
        {'pay' in item && item.pay && <span className="tag ok">{item.pay}</span>}
        {'prize' in item && item.prize && <span className="tag ok">{item.prize}</span>}
        {item.tags.map((tag) => (
          <span key={tag} className="tag t">
            {tag}
          </span>
        ))}
      </div>

      <div className="row" style={{ marginTop: 'auto', paddingTop: '8px' }}>
        <button className="btn p" onClick={handleAction}>
          {actionLabel}
        </button>
        {item.kind !== 'People' && (
          <button
            className="btn"
            onClick={() => toggleSave(item.id)}
            style={{ fontWeight: isSaved ? 700 : 500 }}
          >
            {isSaved ? 'Saved ✓' : 'Save'}
          </button>
        )}
      </div>
    </div>
  );
}
