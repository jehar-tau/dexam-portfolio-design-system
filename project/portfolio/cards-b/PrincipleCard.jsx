import React from 'react';

export function PrincipleCard({ number, title, description }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
      <div className="text-h2-serif" style={{ color: 'var(--color-primary)', minWidth: '36px' }}>{number}</div>
      <div>
        <div className="text-h3" style={{ marginBottom: 'var(--space-1)' }}>{title}</div>
        <p className="text-body-sm">{description}</p>
      </div>
    </div>
  );
}
