import { betterAuth } from 'better-auth';

export const auth = betterAuth({
  baseURL: process.env.APP_URL || 'http://localhost:3000',
  secret:
    process.env.BETTER_AUTH_SECRET ||
    'development-secret-key-change-in-production',
  appName: 'Paynab B2C',
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false // Mettre à true en production
  }
});
