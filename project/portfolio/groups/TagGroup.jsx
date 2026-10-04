import React from 'react';

export function TagGroup({ tags = [] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {tags.map((t) => (
        <span key={t} style={{
          fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-secondary)',
          background: 'var(--surface-muted)', border: '1px solid var(--border-light)',
          padding: '3px 10px', borderRadius: 'var(--radius-full)',
        }}>{t}</span>
      ))}
    </div>
  );
}
