import React, { useEffect, useState } from 'react';

/** Toggles data-theme="dark" on <html>, persisting the choice to localStorage. */
export function ThemeToggle({ size = 'md' }) {
  const [dark, setDark] = useState(() => {
    if (typeof document === 'undefined') return false;
    return document.documentElement.getAttribute('data-theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('theme', 'dark'); } catch (e) {}
    } else {
      root.removeAttribute('data-theme');
      try { localStorage.setItem('theme', 'light'); } catch (e) {}
    }
  }, [dark]);

  const px = size === 'sm' ? 28 : 32;
  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={dark}
      style={{
        width: px, height: px, minWidth: '44px', minHeight: '44px',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--surface-card)', border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-md)', cursor: 'pointer', color: 'var(--text-body)',
        transition: 'background var(--duration-fast) var(--ease-standard)',
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'var(--surface-card)'}
    >
      <span aria-hidden="true" style={{ fontSize: '14px' }}>{dark ? '☀' : '☾'}</span>
    </button>
  );
}
