import React from 'react';

export function InsightCard({ title, body }) {
  return (
    <div style={{
      padding: 'var(--space-5)', background: 'var(--bg-page-warm)', borderRadius: 'var(--radius-lg)',
      borderLeft: '3px solid var(--color-primary)',
    }}>
      <div className="text-label" style={{ color: 'var(--color-primary-hover)', marginBottom: 'var(--space-2)' }}>Insight</div>
      <div className="text-h3" style={{ marginBottom: 'var(--space-2)' }}>{title}</div>
      <p className="text-body-sm">{body}</p>
    </div>
  );
}
