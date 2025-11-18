import React from 'react';

export interface WithChildren {
  children?: React.ReactNode;
}

export interface LayoutProps extends WithChildren {
  showHeader?: boolean;
  showFooter?: boolean;
}

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  logoUrl?: string;
}

export interface FooterProps {
  year?: number;
  companyName?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

// ✅ Trend 타입 추가
export interface Trend {
  id: number;
  title: string;
  category: string;
  description: string;
  icon?: string;
  color?: string;
  views?: number;
}

// ✅ Card Props 타입 추가
export interface CardProps {
  id: number;
  title: string;
  category: string;
  description?: string;
  icon?: string;
  color?: string;
  onClick?: () => void;
  onDelete?: (id: number) => void;
  variant?: 'default' | 'featured' | 'compact';
  showDescription?: boolean;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
}
