import React from 'react';

export function Card({ interactive = false, selected = false, children, style, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--surface-card)',
        border: `1px solid ${selected ? 'var(--border-selected)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        boxShadow: selected ? 'var(--shadow-focus-ring)' : 'var(--shadow-xs)',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
        ...style,
      }}
      onMouseEnter={(e) => { if (interactive) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; } }}
      onMouseLeave={(e) => { if (interactive) { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = selected ? 'var(--shadow-focus-ring)' : 'var(--shadow-xs)'; } }}
    >
      {children}
    </div>
  );
}
