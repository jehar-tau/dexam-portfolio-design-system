import React from 'react';

export function ProcessStep({ index, title, description, isLast = false }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          width: '28px', height: '28px', borderRadius: 'var(--radius-full)', border: '1.5px solid var(--color-primary)',
          color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontSize: '12px', flexShrink: 0,
        }}>{index}</div>
        {!isLast && <div style={{ width: '1px', flex: 1, background: 'var(--border-default)', marginTop: '4px' }} />}
      </div>
      <div style={{ paddingBottom: isLast ? 0 : 'var(--space-6)' }}>
        <div className="text-h3" style={{ marginBottom: 'var(--space-1)' }}>{title}</div>
        <p className="text-body-sm">{description}</p>
      </div>
    </div>
  );
}
