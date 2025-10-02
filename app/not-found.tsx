import { LayoutPanelLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <div className="flex grow items-center px-6 xl:px-10">
        <div className="mx-auto text-center">
          <h1 className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl">
            Désolé, aucune page trouvée
          </h1>
          <p className="mt-3 max-w-sm text-sm text-gray-500 lg:mt-6 lg:text-base">
            Contactez l&apos;administrateur de la plateforme au cas où vous
            cherchez quelque chose de particulier
          </p>
          <Link href={'/fr/dashboard'}>
            <Button className="mt-8 px-4 xl:px-6">
              <LayoutPanelLeft className="mr-1.5 text-lg" />
              Retour à l&apos;accueuil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
