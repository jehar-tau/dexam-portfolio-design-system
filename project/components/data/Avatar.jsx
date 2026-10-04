import React from 'react';

const sizes = { sm: 24, md: 32, lg: 44 };

export function Avatar({ name = '', size = 'md', src }) {
  const px = sizes[size] || sizes.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map((n) => n[0].toUpperCase()).join('');
  return (
    <div style={{
      width: px, height: px, borderRadius: 'var(--radius-full)', overflow: 'hidden', flexShrink: 0,
      background: 'var(--accent-soft)', color: 'var(--color-primary-hover)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: px * 0.4,
      border: '1px solid var(--border-light)',
    }}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </div>
  );
}
