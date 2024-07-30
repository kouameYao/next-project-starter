import { Poppins } from 'next/font/google';
import React from 'react';

import './globals.css';
import { cn } from '@/lib/utils';
import { LayoutProps } from '@/types/layout';

import AppTopLoader from './loading';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fr">
      <body className={cn(poppins.className)}>
        <AppTopLoader />
        {children}
      </body>
    </html>
  );
}
