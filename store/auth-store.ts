import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  [key: string]: any; // Pour les données supplémentaires
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, token: string) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      // Définir l'authentification complète (user + token)
      setAuth: (user, token) =>
        set({
          user,
          token,
          isAuthenticated: true
        }),

      // Mettre à jour uniquement l'utilisateur
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user
        }),

      // Déconnexion
      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false
        })
    }),
    {
      name: 'auth-storage' // Stockage dans localStorage
    }
  )
);
