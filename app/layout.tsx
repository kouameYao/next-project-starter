import { Poppins } from 'next/font/google';
import React from 'react';

import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';
import { LayoutProps } from '@/types/layout';

import AppTopLoader from './loading';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fr">
      <body className={cn(poppins.className, 'w-full h-full')}>
        <AppTopLoader />

        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex">
            <div className="flex flex-1 flex-col">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
