import { createAuthClient } from 'better-auth/react';

// Client Better Auth - Communique avec l'API backend Paynah
export const authClient = createAuthClient({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || 'https://admin.api-stg.paynah.com/api/v1'
});

export const { useSession, signIn, signUp, signOut } = authClient;
