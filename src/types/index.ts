import React from "react";

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
