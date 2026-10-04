import React from 'react';
export interface DropdownItem { label: string; value?: string; }
export interface DropdownProps {
  label: string;
  items: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
}
