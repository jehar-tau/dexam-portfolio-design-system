import React from 'react';

export function DataRow({ primary, secondary, meta, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
        padding: 'var(--space-3) var(--space-4)', borderRadius: 'var(--radius-sm)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background var(--duration-fast) var(--ease-standard)',
      }}
      onMouseEnter={(e) => { if (onClick) e.currentTarget.style.background = 'var(--surface-hover)'; }}
      onMouseLeave={(e) => { if (onClick) e.currentTarget.style.background = 'transparent'; }}
    >
      <div style={{ minWidth: 0 }}>
        <div className="text-body" style={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{primary}</div>
        {secondary && <div className="text-body-sm" style={{ color: 'var(--text-secondary)' }}>{secondary}</div>}
      </div>
      {meta && <div className="text-metadata" style={{ flexShrink: 0 }}>{meta}</div>}
    </div>
  );
}
