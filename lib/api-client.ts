/**
 * Client API pour communiquer avec le backend Paynah
 * Utilise Better Fetch pour une meilleure gestion des requêtes
 */

import { betterFetch } from '@better-fetch/fetch';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://admin.api-stg.paynah.com/api/v1';

interface RequestConfig {
  token?: string;
}

/**
 * Fonction helper pour faire des requêtes API avec Better Fetch
 */
export async function apiClient<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
  body?: unknown,
  config: RequestConfig = {}
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  };

  // Ajouter le token d'authentification si présent
  if (config.token) {
    headers['Authorization'] = `Bearer ${config.token}`;
  }

  const { data, error } = await betterFetch<T>(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? body : undefined
  });

  if (error) {
    console.error('API Error:', error);
    throw new Error(error.message || 'Une erreur est survenue');
  }

  return data as T;
}

/**
 * Helpers pour différentes méthodes HTTP
 */
export const api = {
  get: <T>(endpoint: string, config?: RequestConfig) =>
    apiClient<T>(endpoint, 'GET', undefined, config),

  post: <T>(endpoint: string, data?: unknown, config?: RequestConfig) =>
    apiClient<T>(endpoint, 'POST', data, config),

  put: <T>(endpoint: string, data?: unknown, config?: RequestConfig) =>
    apiClient<T>(endpoint, 'PUT', data, config),

  patch: <T>(endpoint: string, data?: unknown, config?: RequestConfig) =>
    apiClient<T>(endpoint, 'PATCH', data, config),

  delete: <T>(endpoint: string, config?: RequestConfig) =>
    apiClient<T>(endpoint, 'DELETE', undefined, config)
};
