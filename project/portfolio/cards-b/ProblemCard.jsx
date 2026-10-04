import React from 'react';

export function ProblemCard({ title, context }) {
  return (
    <div style={{ padding: 'var(--space-5)', background: 'var(--surface-muted)', borderRadius: 'var(--radius-lg)' }}>
      <div className="text-label" style={{ marginBottom: 'var(--space-2)' }}>Problem</div>
      <div className="text-h3" style={{ marginBottom: 'var(--space-2)' }}>{title}</div>
      <p className="text-body-sm">{context}</p>
    </div>
  );
}
