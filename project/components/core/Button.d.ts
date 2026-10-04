import React from 'react';

export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  style?: React.CSSProperties;
}
