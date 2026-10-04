import React from 'react';
export interface BadgeProps {
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
  /** Fully rounded pill shape vs small radius tag */
  pill?: boolean;
  children: React.ReactNode;
}
