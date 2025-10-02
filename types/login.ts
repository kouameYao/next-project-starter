import { ApiResponse } from './api-response';

export interface LoginResponse extends ApiResponse<{ token: string }> {}
