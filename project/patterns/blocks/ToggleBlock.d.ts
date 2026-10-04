import React from 'react';
export interface ToggleBlockProps {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
