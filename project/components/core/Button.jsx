import React from 'react';

const sizeStyles = {
  sm: { padding: '6px 12px', fontSize: '13px', minHeight: '32px' },
  md: { padding: '9px 16px', fontSize: '14px', minHeight: '44px' },
};

const variantStyles = {
  primary: {
    background: 'var(--accent-primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid var(--accent-primary)',
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-medium)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent',
  },
  link: {
    background: 'transparent',
    color: 'var(--text-link)',
    border: 'none',
    padding: 0,
    minHeight: 'auto',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  },
};

export function Button({ variant = 'primary', size = 'md', disabled = false, children, onClick, type = 'button', style }) {
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    ...sizeStyles[variant === 'link' ? 'md' : size],
    ...variantStyles[variant],
    ...style,
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary-hover)';
        else if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-hover)';
        else if (variant === 'ghost') e.currentTarget.style.background = 'var(--surface-hover)';
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary)';
        else if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-card)';
        else if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
      }}
    >
      {children}
    </button>
  );
}
