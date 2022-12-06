export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
  useGrouping: true,
  minimumSignificantDigits: 4,
  maximumSignificantDigits:10

  
});
