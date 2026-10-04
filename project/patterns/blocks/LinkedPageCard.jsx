import React from 'react';

export function LinkedPageCard({ icon = '📄', title, breadcrumb, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: '8px', width: '100%', textAlign: 'left',
        padding: '8px 10px', minHeight: '40px', background: 'var(--surface-muted)',
        border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-body)',
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'var(--surface-muted)'}
    >
      <span aria-hidden="true">{icon}</span>
      <span style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>{title}</span>
      {breadcrumb && <span className="text-caption" style={{ marginLeft: 'auto' }}>{breadcrumb}</span>}
    </button>
  );
}
