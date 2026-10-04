import React, { useState, useRef, useEffect } from 'react';

export function Dropdown({ label, items = [], onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '8px 12px', minHeight: '40px',
          background: 'var(--surface-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-body)', cursor: 'pointer',
        }}
      >
        {label}
        <span aria-hidden="true" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>▾</span>
      </button>
      {open && (
        <div role="menu" style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, minWidth: '180px',
          background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-md)', padding: '4px', zIndex: 20,
        }}>
          {items.map((item) => (
            <button
              key={item.label}
              role="menuitem"
              onClick={() => { onSelect && onSelect(item); setOpen(false); }}
              style={{
                display: 'block', width: '100%', textAlign: 'left', padding: '8px 10px', minHeight: '36px',
                background: 'transparent', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
                fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-body)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
