import React from 'react';

export function DecisionCard({ decision, rationale, tradeoff }) {
  return (
    <div style={{ padding: 'var(--space-5)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)' }}>
      <div className="text-label" style={{ marginBottom: 'var(--space-2)' }}>Decision</div>
      <div className="text-h3" style={{ marginBottom: 'var(--space-3)' }}>{decision}</div>
      <p className="text-body-sm" style={{ marginBottom: tradeoff ? 'var(--space-3)' : 0 }}>{rationale}</p>
      {tradeoff && (
        <div style={{ paddingTop: 'var(--space-3)', borderTop: '1px solid var(--border-light)' }}>
          <span className="text-metadata">Trade-off: </span>
          <span className="text-body-sm">{tradeoff}</span>
        </div>
      )}
    </div>
  );
}
