import React from 'react';

export function StatGroup({ stats = [] }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
      {stats.map((s) => (
        <div key={s.label}>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '28px', color: 'var(--text-body)', letterSpacing: '-0.01em' }}>{s.value}</div>
          <div className="text-caption">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
