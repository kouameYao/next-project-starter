import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { Locale } from '@/locales/types';

export const metadata: Metadata = {
  title: 'Home'
};

export default async function RootPage({
  params: { local }
}: {
  params: { local: Locale };
}) {
  return redirect('/login');
}
