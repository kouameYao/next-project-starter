import { api } from '@/lib/api-client';
import { useAuthStore } from '@/store/auth-store';

/**
 * Hook pour faire des requêtes API avec authentification automatique
 */
export function useApi() {
  const { token } = useAuthStore();

  return {
    get: <T>(endpoint: string) =>
      api.get<T>(endpoint, { token: token || undefined }),
    post: <T>(endpoint: string, data?: unknown) =>
      api.post<T>(endpoint, data, { token: token || undefined }),
    put: <T>(endpoint: string, data?: unknown) =>
      api.put<T>(endpoint, data, { token: token || undefined }),
    patch: <T>(endpoint: string, data?: unknown) =>
      api.patch<T>(endpoint, data, { token: token || undefined }),
    delete: <T>(endpoint: string) =>
      api.delete<T>(endpoint, { token: token || undefined })
  };
}
