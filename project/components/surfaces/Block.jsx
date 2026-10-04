import React from 'react';

/** A single content block in a document-style page — the atomic unit of Notion-like layout. */
export function Block({ as: Tag = 'div', hoverable = true, children, style }) {
  return (
    <Tag
      style={{
        position: 'relative',
        padding: 'var(--space-2) var(--space-3)',
        marginLeft: '-12px',
        borderRadius: 'var(--radius-sm)',
        transition: 'background var(--duration-fast) var(--ease-standard)',
        ...style,
      }}
      onMouseEnter={(e) => { if (hoverable) e.currentTarget.style.background = 'var(--surface-hover)'; }}
      onMouseLeave={(e) => { if (hoverable) e.currentTarget.style.background = 'transparent'; }}
    >
      {hoverable && (
        <span style={{
          position: 'absolute', left: '-14px', top: '50%', transform: 'translateY(-50%)',
          width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--text-muted)', fontSize: '13px', opacity: 0, transition: 'opacity var(--duration-fast)',
        }} className="block-handle" aria-hidden="true">⋮⋮</span>
      )}
      {children}
    </Tag>
  );
}
