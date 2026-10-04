import React from 'react';

export function SideNoteBlock({ children }) {
  return (
    <div style={{
      display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start',
      padding: 'var(--space-3) var(--space-4)', background: 'transparent',
      borderLeft: '2px solid var(--border-medium)',
    }}>
      <span aria-hidden="true" className="text-caption" style={{ flexShrink: 0 }}>Note</span>
      <p className="text-caption" style={{ color: 'var(--text-secondary)' }}>{children}</p>
    </div>
  );
}
