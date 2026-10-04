import React from 'react';
export interface DataRowProps {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  meta?: React.ReactNode;
  onClick?: () => void;
}
