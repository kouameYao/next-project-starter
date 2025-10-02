import type { Metadata } from 'next';
import type React from 'react';

import NuqsProvider from '@/providers/nuqs-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'E-Billeterie - Systeme complet de billetterie en ligne',
  description:
    "E-Billeterie est une plateforme de billetterie en ligne tout-en-un qui permet aux organisateurs d'événements de créer, gérer et promouvoir leurs événements facilement. Vendez des billets, gérez les inscriptions et analysez les performances de vos événements avec notre interface conviviale."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <NuqsProvider>{children}</NuqsProvider>
      </body>
    </html>
  );
}
