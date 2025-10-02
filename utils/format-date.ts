import * as dateFn from 'date-fns';

export const DATE_FORMAT = {
  HOURS: 'DD/MM/YYYY',
  MINUTS: 'HH:mm:ss'
};

export function formatDate(
  date?: Date,
  format: string = DATE_FORMAT.HOURS
): string {
  if (!date) return '';
  return dateFn.format(date, format);
}
