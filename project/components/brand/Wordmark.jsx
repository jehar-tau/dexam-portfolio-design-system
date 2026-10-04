import React from 'react';

/** Plain-type wordmark — no logo mark exists for this brand; always render as text. */
export function Wordmark({ size = 'md', variant = 'sans' }) {
  const sizes = { sm: '16px', md: '20px', lg: '28px' };
  return (
    <span style={{
      fontFamily: variant === 'serif' ? 'var(--font-serif)' : 'var(--font-sans)',
      fontWeight: variant === 'serif' ? 500 : 600,
      fontSize: sizes[size] || sizes.md,
      letterSpacing: '-0.01em',
      color: 'var(--text-body)',
    }}>
      Snehal Kumar
    </span>
  );
}
