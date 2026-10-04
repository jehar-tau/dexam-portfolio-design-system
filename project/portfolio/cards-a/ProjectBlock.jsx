import React from 'react';

export function ProjectBlock({ label, title, description, meta }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 'var(--space-6)', padding: 'var(--space-4) 0', borderBottom: '1px solid var(--border-light)' }}>
      <span className="text-label" style={{ color: 'var(--text-muted)' }}>{label}</span>
      <div>
        <div className="text-h3" style={{ marginBottom: 'var(--space-1)' }}>{title}</div>
        <p className="text-body-sm">{description}</p>
        {meta && <div className="text-metadata" style={{ marginTop: 'var(--space-2)' }}>{meta}</div>}
      </div>
    </div>
  );
}
