const formatter = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'USD' })

export function formatMoney(cents: number) {
  return `${formatter.format(cents / 100)} USD`
}
