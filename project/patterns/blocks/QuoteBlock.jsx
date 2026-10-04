import React from 'react';

export function QuoteBlock({ quote, attribution }) {
  return (
    <blockquote style={{
      margin: 0, borderLeft: '3px solid var(--color-text-primary)', paddingLeft: 'var(--space-4)',
      fontFamily: 'var(--font-serif)', fontSize: '19px', fontStyle: 'italic', lineHeight: 1.5, color: 'var(--text-body)',
    }}>
      “{quote}”
      {attribution && <footer className="text-caption" style={{ marginTop: 'var(--space-2)', fontStyle: 'normal' }}>— {attribution}</footer>}
    </blockquote>
  );
}
