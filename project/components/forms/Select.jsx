import React, { useState } from 'react';

export function Select({ label, options = [], value, onChange, id }) {
  const [focused, setFocused] = useState(false);
  const selId = id || `select-${label ? label.replace(/\s+/g, '-').toLowerCase() : Math.random().toString(36).slice(2)}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && <label htmlFor={selId} className="text-label" style={{ color: 'var(--text-secondary)' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select
          id={selId}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            color: 'var(--text-body)',
            background: 'var(--surface-card)',
            border: `1px solid ${focused ? 'var(--color-primary)' : 'var(--border-medium)'}`,
            borderRadius: 'var(--radius-md)',
            padding: '10px 36px 10px 12px',
            minHeight: '44px',
            width: '100%',
            appearance: 'none',
            outline: 'none',
            boxShadow: focused ? 'var(--shadow-focus-ring)' : 'none',
            transition: 'border-color var(--duration-fast) var(--ease-standard)',
          }}
        >
          {options.map((opt) => <option key={opt.value ?? opt} value={opt.value ?? opt}>{opt.label ?? opt}</option>)}
        </select>
        <span aria-hidden="true" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '11px', pointerEvents: 'none' }}>▾</span>
      </div>
    </div>
  );
}
