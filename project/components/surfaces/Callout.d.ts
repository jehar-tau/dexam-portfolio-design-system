import React from 'react';
export interface CalloutProps {
  tone?: 'neutral' | 'accent' | 'success' | 'warning';
  icon?: 'note' | 'warning' | 'success' | 'tip';
  children: React.ReactNode;
}
