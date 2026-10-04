export interface ProcessStepProps {
  index: string | number;
  title: string;
  description: string;
  /** Omits the connecting line below the last step */
  isLast?: boolean;
}
