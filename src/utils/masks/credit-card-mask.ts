export function creditCardApplyMask(value: string) {
  return value.replace(/(\d{4})(?=\d)/g, "$1 ");
}
