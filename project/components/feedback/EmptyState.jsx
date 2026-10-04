import React from 'react';

export function EmptyState({ icon = '◇', title, description, action }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-2)',
      padding: 'var(--space-12) var(--space-6)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-muted)',
    }}>
      <span aria-hidden="true" style={{ fontSize: '28px', color: 'var(--text-muted)' }}>{icon}</span>
      <div className="text-h3">{title}</div>
      {description && <div className="text-body-sm" style={{ maxWidth: '340px' }}>{description}</div>}
      {action && <div style={{ marginTop: 'var(--space-2)' }}>{action}</div>}
    </div>
  );
}
