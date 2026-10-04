import React from 'react';
export interface BlockProps {
  as?: keyof JSX.IntrinsicElements;
  /** Shows the subtle drag-handle + hover background, like a Notion block */
  hoverable?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
