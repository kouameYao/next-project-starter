'use client';

import React, { PropsWithChildren } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { persister } from '@/utils/store';

const ReactQueryProvider = ({ children }: PropsWithChildren<any>) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false
      }
    }
  });

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
      <ReactQueryDevtools />
    </PersistQueryClientProvider>
  );
};

export default ReactQueryProvider;
