'use client';

import React, { useState } from 'react';
import VerticalHero from '@/components/shared/VerticalHero';
import ItemCard from '@/components/shared/ItemCard';
import { ctabs, groups, peopleX, evs, ppl, initialPosts } from '@/data/mockData';
import { useApp } from '@/context/AppContext';

export default function CommunityPage() {
  const { openJoin, showToast, likedPosts, toggleLike } = useApp();
  const [activeTab, setActiveTab] = useState('Feed');
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
  const [commentInputs, setCommentInputs] = useState<Record<number, string>>({});
  const [followedAuthors, setFollowedAuthors] = useState<string[]>([]);
  const [commentsMap, setCommentsMap] = useState<Record<number, string[]>>({});

  const toggleFollow = (author: string) => {
    setFollowedAuthors((prev) => {
      const isFollowing = prev.includes(author);
      const next = isFollowing ? prev.filter((a) => a !== author) : [...prev, author];
      showToast(isFollowing ? `Unfollowed ${author}` : `Now following ${author}!`);
      return next;
    });
  };

  const handleShare = (author: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    showToast(`Copied ${author}'s post link to clipboard!`);
  };

  const handleAddComment = (index: number) => {
    const text = commentInputs[index]?.trim();
    if (!text) return;
    setCommentsMap((prev) => ({
      ...prev,
      [index]: [...(prev[index] || []), text],
    }));
    setCommentInputs((prev) => ({ ...prev, [index]: '' }));
    showToast('Comment posted! (demo)');
  };

  const getTagClass = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes('build')) return 'community-tag-build';
    if (lower.includes('progress')) return 'community-tag-progress';
    if (lower.includes('founder') || lower.includes('co-founder')) return 'community-tag-founder';
    if (lower.includes('question')) return 'community-tag-question';
    return 'community-tag-build';
  };

  const getGroupIcon = (name: string) => {
    if (name.includes('AI')) return '🤖';
    if (name.includes('Founder')) return '🚀';
    if (name.includes('Frontend')) return '💻';
    if (name.includes('Backend')) return '⚙️';
    if (name.includes('College')) return '🎓';
    return '💡';
  };

  const renderContent = () => {
    if (activeTab === 'Feed' || activeTab === 'Build in Public') {
      return (
        <div className="community-feed">
          {initialPosts.map((p, i) => {
            const isLiked = likedPosts.includes(i);
            const isFollowing = followedAuthors.includes(p.author);
            const baseLikes = p.likesCount ?? 10;
            const currentLikes = isLiked ? baseLikes + 1 : baseLikes;
            const postComments = commentsMap[i] || [];

            return (
              <div key={i} className="community-card">
                {/* Card Header */}
                <div className="community-card-header">
                  <div className="community-card-author">
                    <div className="community-avatar">{p.author[0]}</div>
                    <div>
                      <div className="community-meta-title">
                        <span>{p.author}</span>
                        <span className="community-verified-badge" title="Verified Builder">
                          ✓
                        </span>
                      </div>
                      <div className="community-meta-sub">
                        <span>{p.role || 'Builder'}</span>
                        <span>•</span>
                        <span>{p.time || 'Recent'}</span>
                      </div>
                    </div>
                  </div>

                  <span className={`community-tag-badge ${getTagClass(p.tag)}`}>
                    {p.tag}
                  </span>
                </div>

                {/* Card Body */}
                <div className="community-card-body">
                  <p>{p.content}</p>
                </div>

                {/* Card Actions */}
                <div className="community-actions">
                  <button
                    type="button"
                    className={`community-action-btn ${isLiked ? 'active-like' : ''}`}
                    onClick={() => toggleLike(i)}
                  >
                    <span>{isLiked ? '♥' : '♡'}</span>
                    <span>{currentLikes} Likes</span>
                  </button>

                  <button
                    type="button"
                    className="community-action-btn"
                    onClick={() =>
                      setActiveCommentId((curr) => (curr === i ? null : i))
                    }
                  >
                    <span>💬</span>
                    <span>
                      {postComments.length > 0
                        ? `${postComments.length} Comments`
                        : 'Comment'}
                    </span>
                  </button>

                  <button
                    type="button"
                    className="community-action-btn"
                    onClick={() => handleShare(p.author)}
                  >
                    <span>↗</span>
                    <span>Share</span>
                  </button>

                  <button
                    type="button"
                    className={`community-action-btn ${
                      isFollowing ? 'active-follow' : ''
                    }`}
                    style={{ marginLeft: 'auto' }}
                    onClick={() => toggleFollow(p.author)}
                  >
                    <span>{isFollowing ? '✓ Following' : '+ Follow'}</span>
                  </button>
                </div>

                {/* Comments Thread Drawer */}
                {activeCommentId === i && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {postComments.map((c, cIdx) => (
                      <div
                        key={cIdx}
                        style={{
                          background: 'var(--s2)',
                          padding: '8px 12px',
                          borderRadius: '10px',
                          fontSize: '13px',
                          lineHeight: '1.4',
                        }}
                      >
                        <b>You:</b> {c}
                      </div>
                    ))}
                    <div className="community-comment-drawer">
                      <input
                        placeholder="Write a supportive reply or suggestion…"
                        value={commentInputs[i] || ''}
                        onChange={(e) =>
                          setCommentInputs((prev) => ({ ...prev, [i]: e.target.value }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddComment(i);
                        }}
                        style={{ padding: '8px 12px', fontSize: '13.5px' }}
                      />
                      <button
                        type="button"
                        className="btn p"
                        style={{ padding: '6px 14px', fontSize: '13px' }}
                        onClick={() => handleAddComment(i)}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    if (activeTab === 'Events') {
      return (
        <div className="community-grid-centered">
          {evs.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      );
    }

    if (activeTab === 'Groups') {
      return (
        <div className="community-grid-centered">
          {groups.map((g) => (
            <div key={g} className="community-group-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  className="ic"
                  style={{
                    background: '#eef2ff',
                    fontSize: '24px',
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                  }}
                >
                  {getGroupIcon(g)}
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', margin: 0 }}>{g}</h3>
                  <span className="m" style={{ fontSize: '12px' }}>
                    1.4k members · 32 active now
                  </span>
                </div>
              </div>
              <p className="m" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                A collaborative space for active builders to share feedback, demo side-projects, and find peers.
              </p>
              <button
                className="btn"
                style={{ marginTop: 'auto', width: '100%' }}
                onClick={() => showToast(`Join request sent to ${g}! (demo)`)}
              >
                Join group →
              </button>
            </div>
          ))}
        </div>
      );
    }

    // Role-filtered people view
    const filteredPeople = peopleX.filter(
      (p) => activeTab === 'Builders' || `${p.role}s` === activeTab
    );

    return (
      <div className="community-grid-centered">
        {filteredPeople.length > 0 ? (
          filteredPeople.map((p, idx) => (
            <div key={idx} className="card h" style={{ padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  className="av"
                  style={{
                    background: 'linear-gradient(135deg, #0b6bff, #7c3aed)',
                    color: '#fff',
                  }}
                >
                  {p.name[0]}
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', margin: 0 }}>{p.name}</h3>
                  <div className="m" style={{ fontSize: '12.5px' }}>
                    {p.role}
                  </div>
                </div>
              </div>

              <div className="m" style={{ fontSize: '13.5px', margin: '6px 0' }}>
                {p.title}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {p.skills.map((s) => (
                  <span key={s} className="tag t" style={{ margin: 0 }}>
                    {s}
                  </span>
                ))}
              </div>

              <button
                className="btn p"
                style={{ marginTop: 'auto', width: '100%' }}
                onClick={() => showToast(`Connection request sent to ${p.name}! (demo)`)}
              >
                Connect
              </button>
            </div>
          ))
        ) : (
          <div className="empty" style={{ gridColumn: '1 / -1' }}>
            No members found in this category yet.
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <VerticalHero currentKey="community" />

      {/* Inside the Community Section */}
      <section style={{ padding: '40px 0 60px' }}>
        <div className="community-header">
          <span className="pill">Inside the community</span>
          <h2>Inside the community</h2>
          <p className="lead">Feed, people, groups, events and build-in-public updates.</p>
          <p className="demo">Demo data. Replace with verified production data.</p>
        </div>

        {/* Centered Filter Chips */}
        <div className="chips community-chips">
          {ctabs.map((tab) => (
            <button
              key={tab}
              className={`chip ${activeTab === tab ? 'on' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Centered Responsive Cards Content */}
        <div id="cbody">{renderContent()}</div>

        {/* Suggested People - Centered */}
        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Suggested people</h2>
          <p className="lead" style={{ marginBottom: '24px' }}>
            Connect with verified founders, engineers, and mentors in India.
          </p>
        </div>
        <div className="community-grid-centered">
          {ppl.map((p) => (
            <ItemCard key={p.id} item={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="cta" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <h2>Meet the people building India&apos;s future.</h2>
          <p className="m" style={{ margin: '12px auto 22px', maxWidth: '520px' }}>
            Get access to private mastermind groups, hackathons, and founder office hours.
          </p>
          <button className="btn p" onClick={openJoin}>
            Join TheBTechGuy →
          </button>
        </div>
      </section>
    </div>
  );
}
