import React from 'react';

export function MetadataBar({ items = [] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
      {items.map((item, i) => (
        <span key={i} className="text-metadata" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          {item.icon && <span aria-hidden="true">{item.icon}</span>}
          {item.label}
        </span>
      ))}
    </div>
  );
}
