export function formatNumber(number: number | string) {
  const formatter = new Intl.NumberFormat('fr-FR');
  return formatter.format(+number);
}
