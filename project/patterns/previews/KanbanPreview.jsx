import React from 'react';

export function KanbanPreview({ columns = [] }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-4)', overflowX: 'auto' }}>
      {columns.map((col) => (
        <div key={col.title} style={{ minWidth: '200px', background: 'var(--surface-muted)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)' }}>
          <div className="text-label" style={{ marginBottom: 'var(--space-2)' }}>{col.title}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {(col.cards || []).map((card) => (
              <div key={card} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '8px 10px', fontSize: '13px', color: 'var(--text-body)' }}>{card}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
