import React, { useState } from 'react';

export function Tooltip({ label, children, side = 'top' }) {
  const [show, setShow] = useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '6px' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '6px' },
  }[side] || {};
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
      {children}
      {show && (
        <span role="tooltip" style={{
          position: 'absolute', ...pos,
          background: 'var(--color-text-primary)', color: '#FFF9F4',
          padding: '5px 9px', borderRadius: 'var(--radius-sm)',
          fontSize: '12px', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap',
          boxShadow: 'var(--shadow-md)', zIndex: 10, pointerEvents: 'none',
        }}>
          {label}
        </span>
      )}
    </span>
  );
}
