import React from 'react';

export function DatabasePreview({ columns = [], rows = [] }) {
  return (
    <div style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr)`, background: 'var(--surface-muted)' }}>
        {columns.map((c) => (
          <div key={c} style={{ padding: '8px 12px', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', borderRight: '1px solid var(--border-default)' }}>{c}</div>
        ))}
      </div>
      {rows.map((row, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr)`, borderTop: '1px solid var(--border-light)' }}>
          {columns.map((c) => (
            <div key={c} style={{ padding: '8px 12px', fontSize: '13px', color: 'var(--text-body)', borderRight: '1px solid var(--border-light)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row[c]}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
