import React from 'react';
export interface TabItem { label: string; content?: React.ReactNode; }
export interface TabsProps {
  tabs: TabItem[];
  defaultActive?: number;
  onChange?: (index: number) => void;
}
