import React, { useState } from 'react';

const fieldBase = {
  fontFamily: 'var(--font-sans)',
  fontSize: '14px',
  color: 'var(--text-body)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-medium)',
  borderRadius: 'var(--radius-md)',
  padding: '10px 12px',
  minHeight: '44px',
  width: '100%',
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
};

export function Input({ label, placeholder, value, onChange, error, disabled, id, type = 'text' }) {
  const [focused, setFocused] = useState(false);
  const inputId = id || `input-${label ? label.replace(/\s+/g, '-').toLowerCase() : Math.random().toString(36).slice(2)}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && <label htmlFor={inputId} className="text-label" style={{ color: 'var(--text-secondary)' }}>{label}</label>}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={!!error}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...fieldBase,
          borderColor: error ? 'var(--color-danger)' : focused ? 'var(--color-primary)' : 'var(--border-medium)',
          boxShadow: focused ? 'var(--shadow-focus-ring)' : 'none',
          opacity: disabled ? 0.55 : 1,
        }}
      />
      {error && <span className="text-caption" style={{ color: 'var(--color-danger)' }}>{error}</span>}
    </div>
  );
}
