'use client';

import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type React from 'react';

export default function NuqsProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return <NuqsAdapter>{children}</NuqsAdapter>;
}
