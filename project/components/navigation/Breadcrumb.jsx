import React from 'react';

export function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          {i > 0 && <span aria-hidden="true" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>/</span>}
          {item.href ? (
            <a href={item.href} className="text-body-sm" style={{ color: i === items.length - 1 ? 'var(--text-body)' : 'var(--text-muted)', textDecoration: 'none' }}>{item.label}</a>
          ) : (
            <span className="text-body-sm" style={{ color: i === items.length - 1 ? 'var(--text-body)' : 'var(--text-muted)' }}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
