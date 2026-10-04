import React, { useState } from 'react';

export function ToggleBlock({ label, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px', width: '100%', textAlign: 'left',
          background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px 6px', marginLeft: '-6px',
          borderRadius: 'var(--radius-sm)', minHeight: '32px',
          fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 500, color: 'var(--text-body)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
      >
        <span aria-hidden="true" style={{ display: 'inline-block', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform var(--duration-fast) var(--ease-standard)', color: 'var(--text-muted)', fontSize: '11px' }}>▶</span>
        {label}
      </button>
      {open && <div style={{ paddingLeft: '20px', marginTop: '4px' }} className="text-body-sm">{children}</div>}
    </div>
  );
}
