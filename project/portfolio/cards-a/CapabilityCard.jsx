import React from 'react';

export function CapabilityCard({ icon, title, description }) {
  return (
    <div style={{ padding: 'var(--space-5)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)' }}>
      {icon && <div aria-hidden="true" style={{ fontSize: '20px', color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }}>{icon}</div>}
      <div className="text-h3" style={{ marginBottom: 'var(--space-2)' }}>{title}</div>
      <p className="text-body-sm">{description}</p>
    </div>
  );
}
