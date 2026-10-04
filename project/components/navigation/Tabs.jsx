import React, { useState } from 'react';

export function Tabs({ tabs = [], defaultActive = 0, onChange }) {
  const [active, setActive] = useState(defaultActive);
  const select = (i) => { setActive(i); onChange && onChange(i); };
  return (
    <div>
      <div role="tablist" style={{ display: 'flex', gap: '4px', borderBottom: '1px solid var(--border-default)' }}>
        {tabs.map((t, i) => (
          <button
            key={t.label ?? i}
            role="tab"
            aria-selected={active === i}
            onClick={() => select(i)}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500,
              padding: '10px 14px', minHeight: 'var(--hit-target-min)',
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: active === i ? 'var(--text-body)' : 'var(--text-muted)',
              borderBottom: active === i ? '2px solid var(--color-primary)' : '2px solid transparent',
              marginBottom: '-1px',
              transition: 'color var(--duration-fast) var(--ease-standard)',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div style={{ paddingTop: 'var(--space-4)' }}>{tabs[active] && tabs[active].content}</div>
    </div>
  );
}
