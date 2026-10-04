import React from 'react';

export function Table({ columns = [], rows = [] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)' }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} style={{
              textAlign: 'left', padding: '8px 12px', borderBottom: '1px solid var(--border-medium)',
              fontSize: '12px', fontWeight: 500, letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--text-muted)',
            }}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={row.id ?? i}>
            {columns.map((col) => (
              <td key={col.key} style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-light)', fontSize: '14px', color: 'var(--text-body)' }}>
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
