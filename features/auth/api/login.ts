import { ApiService } from '@/lib/api-service';

import { LoginCredentials, LoginResponse } from '../types/login';

const api = new ApiService(process.env.API_BASE_URL || '');

export async function login(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse, LoginCredentials>(
    '/auth/login',
    credentials
  );

  api.token = response.token;

  return response;
}
