import React from 'react';

export function ImpactCard({ metric, description, tone = 'accent' }) {
  const color = tone === 'success' ? 'var(--color-success)' : 'var(--color-primary)';
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-4)', padding: 'var(--space-4) 0', borderBottom: '1px solid var(--border-light)' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '24px', color, minWidth: '90px' }}>{metric}</div>
      <p className="text-body-sm">{description}</p>
    </div>
  );
}
