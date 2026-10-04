export interface SelectOption { label?: string; value?: string; }
export interface SelectProps {
  label?: string;
  options?: (string | SelectOption)[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
}
