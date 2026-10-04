import React from 'react';

export function Divider({ spacing = 'md', label }) {
  const gap = spacing === 'sm' ? 'var(--space-3)' : spacing === 'lg' ? 'var(--space-8)' : 'var(--space-6)';
  if (label) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: `${gap} 0` }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--border-default)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border-default)' }} />
      </div>
    );
  }
  return <div style={{ height: '1px', background: 'var(--border-default)', margin: `${gap} 0` }} />;
}
