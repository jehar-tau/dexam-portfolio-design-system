import React from 'react';

export function SidebarItem({ label, icon, active = false, depth = 0, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: '8px', width: '100%',
        padding: '7px 10px', paddingLeft: `${10 + depth * 16}px`,
        minHeight: '36px',
        background: active ? 'var(--surface-selected)' : 'transparent',
        border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', textAlign: 'left',
        color: active ? 'var(--color-primary-hover)' : 'var(--text-body)',
        fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: active ? 500 : 400,
        transition: 'background var(--duration-fast) var(--ease-standard)',
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'var(--surface-hover)'; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
    >
      {icon && <span aria-hidden="true" style={{ fontSize: '14px', color: 'var(--text-muted)', width: '16px', textAlign: 'center' }}>{icon}</span>}
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
    </button>
  );
}
