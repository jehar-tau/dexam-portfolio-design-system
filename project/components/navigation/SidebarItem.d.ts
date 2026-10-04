export interface SidebarItemProps {
  label: string;
  /** Single glyph or short text used as a leading icon slot */
  icon?: string;
  active?: boolean;
  /** Nesting level for indented sub-pages */
  depth?: number;
  onClick?: () => void;
}
