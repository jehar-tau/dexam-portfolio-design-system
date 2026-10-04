import React, { useState } from 'react';

export function Accordion({ items = [], defaultOpen = -1 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
      {items.map((item, i) => (
        <div key={item.title ?? i} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border-default)' }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: 'var(--space-4)', minHeight: 'var(--hit-target-min)',
              background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
              fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: 'var(--text-body)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            {item.title}
            <span aria-hidden="true" style={{ color: 'var(--text-muted)', transform: open === i ? 'rotate(90deg)' : 'none', transition: 'transform var(--duration-fast) var(--ease-standard)' }}>›</span>
          </button>
          {open === i && (
            <div className="text-body-sm" style={{ padding: '0 var(--space-4) var(--space-4)', color: 'var(--text-secondary)' }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
