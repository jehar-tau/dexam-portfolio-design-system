import React from 'react';
export interface AccordionItem { title: string; content?: React.ReactNode; }
export interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}
