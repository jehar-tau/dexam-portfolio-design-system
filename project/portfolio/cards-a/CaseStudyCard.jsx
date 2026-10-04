import React from 'react';

export function CaseStudyCard({ title, summary, tags = [], year, image, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)',
        overflow: 'hidden', cursor: onClick ? 'pointer' : 'default',
        transition: 'transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ aspectRatio: '16/9', background: image ? `url(${image}) center/cover` : 'var(--surface-muted)', borderBottom: '1px solid var(--border-default)' }} />
      <div style={{ padding: 'var(--space-5)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-2)' }}>
          <div className="text-h3">{title}</div>
          {year && <span className="text-metadata">{year}</span>}
        </div>
        <p className="text-body-sm" style={{ marginBottom: 'var(--space-3)' }}>{summary}</p>
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {tags.map((t) => (
              <span key={t} style={{ fontSize: '12px', color: 'var(--text-muted)', background: 'var(--surface-muted)', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
