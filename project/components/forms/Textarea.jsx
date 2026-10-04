import React, { useState } from 'react';

export function Textarea({ label, placeholder, value, onChange, rows = 4, id }) {
  const [focused, setFocused] = useState(false);
  const areaId = id || `textarea-${label ? label.replace(/\s+/g, '-').toLowerCase() : Math.random().toString(36).slice(2)}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && <label htmlFor={areaId} className="text-label" style={{ color: 'var(--text-secondary)' }}>{label}</label>}
      <textarea
        id={areaId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          lineHeight: 1.6,
          color: 'var(--text-body)',
          background: 'var(--surface-card)',
          border: `1px solid ${focused ? 'var(--color-primary)' : 'var(--border-medium)'}`,
          borderRadius: 'var(--radius-md)',
          padding: '10px 12px',
          width: '100%',
          resize: 'vertical',
          outline: 'none',
          boxShadow: focused ? 'var(--shadow-focus-ring)' : 'none',
          transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
        }}
      />
    </div>
  );
}
