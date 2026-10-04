import React from 'react';
export interface CardProps {
  interactive?: boolean;
  selected?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
