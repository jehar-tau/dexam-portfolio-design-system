import React from 'react';

const icons = { note: '◆', warning: '▲', success: '✓', tip: '✦' };
const tones = {
  neutral: { bg: 'var(--surface-muted)', border: 'var(--border-default)', fg: 'var(--text-body)' },
  accent: { bg: 'var(--accent-extra-soft)', border: 'var(--accent-soft)', fg: 'var(--accent-primary-hover)' },
  success: { bg: 'var(--color-success-soft)', border: 'transparent', fg: 'var(--color-success)' },
  warning: { bg: 'var(--color-warning-soft)', border: 'transparent', fg: 'var(--color-warning)' },
};

export function Callout({ tone = 'accent', icon = 'note', children }) {
  const t = tones[tone] || tones.accent;
  return (
    <div style={{
      display: 'flex', gap: '10px', alignItems: 'flex-start',
      background: t.bg, border: `1px solid ${t.border}`, borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
    }}>
      <span style={{ color: t.fg, fontSize: '14px', lineHeight: '1.6' }} aria-hidden="true">{icons[icon] || icons.note}</span>
      <div className="text-body-sm" style={{ color: 'var(--text-body)' }}>{children}</div>
    </div>
  );
}
