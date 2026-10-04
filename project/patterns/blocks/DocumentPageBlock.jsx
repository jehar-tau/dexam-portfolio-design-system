import React from 'react';

/** Full document-page frame: title, metadata bar, and flowing content blocks — the top-level Notion-style page shell. */
export function DocumentPageBlock({ icon, title, metadata, children }) {
  return (
    <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
      {icon && <div aria-hidden="true" style={{ fontSize: '32px', marginBottom: 'var(--space-4)' }}>{icon}</div>}
      <h1 className="text-h1" style={{ marginBottom: 'var(--space-3)' }}>{title}</h1>
      {metadata && <div style={{ marginBottom: 'var(--space-6)' }}>{metadata}</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--block-gap)' }}>{children}</div>
    </div>
  );
}
