import React from 'react';

export function ExperienceCard({ company, role, period, description }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-5)', padding: 'var(--space-4) 0', borderBottom: '1px solid var(--border-light)' }}>
      <div style={{ minWidth: '110px' }} className="text-metadata">{period}</div>
      <div>
        <div className="text-h3" style={{ marginBottom: '2px' }}>{role}</div>
        <div className="text-body-sm" style={{ color: 'var(--color-primary-hover)', fontWeight: 500, marginBottom: 'var(--space-2)' }}>{company}</div>
        {description && <p className="text-body-sm">{description}</p>}
      </div>
    </div>
  );
}
