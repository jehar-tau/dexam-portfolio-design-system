import React from 'react';

/** Minimal document-workspace layout: fixed narrow sidebar + flowing content column. */
export function SidebarLayout({ sidebar, children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100%' }}>
      <div style={{ width: '220px', flexShrink: 0, background: 'var(--bg-page-warm)', borderRight: '1px solid var(--border-light)', padding: 'var(--space-4) var(--space-2)' }}>
        {sidebar}
      </div>
      <div style={{ flex: 1, padding: 'var(--space-8)', background: 'var(--bg-page)' }}>
        {children}
      </div>
    </div>
  );
}
