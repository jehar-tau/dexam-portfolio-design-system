import React from 'react';

export function MetricCard({ value, label, delta }) {
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '32px', letterSpacing: '-0.02em', color: 'var(--color-primary)' }}>{value}</div>
      <div className="text-body-sm" style={{ marginTop: 'var(--space-1)' }}>{label}</div>
      {delta && <div className="text-metadata" style={{ marginTop: 'var(--space-2)', color: 'var(--color-success)' }}>{delta}</div>}
    </div>
  );
}
