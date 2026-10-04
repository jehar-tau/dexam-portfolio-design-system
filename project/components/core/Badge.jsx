import React from 'react';

const tones = {
  neutral: { bg: 'var(--surface-muted)', color: 'var(--text-secondary)', border: 'var(--border-default)' },
  accent: { bg: 'var(--accent-extra-soft)', color: 'var(--accent-primary-hover)', border: 'var(--accent-soft)' },
  success: { bg: 'var(--color-success-soft)', color: 'var(--color-success)', border: 'transparent' },
  warning: { bg: 'var(--color-warning-soft)', color: 'var(--color-warning)', border: 'transparent' },
  danger: { bg: 'var(--color-danger-soft)', color: 'var(--color-danger)', border: 'transparent' },
};

export function Badge({ tone = 'neutral', pill = false, children }) {
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      background: t.bg,
      color: t.color,
      border: `1px solid ${t.border}`,
      borderRadius: pill ? 'var(--radius-full)' : 'var(--radius-sm)',
      padding: '2px 9px',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 1.5,
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}
