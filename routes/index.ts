export const DASHBOARD = '/dashboard';

export const paths = {
  dashboard: {
    root: (locale: string) => `/${locale}/${DASHBOARD}`
  },
  users: {
    root: `${DASHBOARD}/users`
  }
};
