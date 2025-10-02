import { useSession, signIn, signOut } from '@/lib/auth-client';

/**
 * Hook personnalisé pour gérer l'authentification
 * Simplifie l'utilisation de Better Auth dans l'application
 */
export function useAuth() {
  const { data: session, isPending, error } = useSession();

  return {
    error,
    signIn,
    signOut,
    isLoading: isPending,
    session: session ?? null,
    user: session?.user ?? null,
    isAuthenticated: !!session?.user
  };
}
