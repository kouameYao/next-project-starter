import type { Metadata } from 'next';
import type React from 'react';

import { SidebarProvider } from '@/components/ui/sidebar';
import AuthProvider from '@/providers/auth-provider';

export const metadata: Metadata = {
  title: 'E-Billeterie - Tableau de bord',
  description:
    'Tableau de bord pour gérer vos événements, billets et analyses sur E-Billeterie.'
};

export default function DashboardLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body className="bg-[#F5F6FA]">
        <AuthProvider>
          <SidebarProvider>
            <main className="flex min-h-screen flex-grow">{children}</main>
          </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
