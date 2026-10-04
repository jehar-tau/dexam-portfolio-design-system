import React from 'react';
export interface CaseStudyCardProps {
  title: string;
  summary: string;
  tags?: string[];
  year?: string;
  image?: string;
  onClick?: () => void;
}
