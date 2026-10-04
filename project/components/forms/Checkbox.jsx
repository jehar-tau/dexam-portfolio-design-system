import React from 'react';

export function Checkbox({ label, checked, onChange, id }) {
  const cbId = id || `checkbox-${label ? label.replace(/\s+/g, '-').toLowerCase() : Math.random().toString(36).slice(2)}`;
  return (
    <label htmlFor={cbId} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer', minHeight: 'var(--hit-target-min)' }}>
      <span style={{
        width: '18px', height: '18px', borderRadius: '4px',
        border: `1.5px solid ${checked ? 'var(--color-primary)' : 'var(--border-medium)'}`,
        background: checked ? 'var(--color-primary)' : 'var(--surface-card)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
        flexShrink: 0,
      }}>
        {checked && <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </span>
      <input id={cbId} type="checkbox" checked={checked} onChange={onChange} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span className="text-body-sm" style={{ color: 'var(--text-body)' }}>{label}</span>
    </label>
  );
}
