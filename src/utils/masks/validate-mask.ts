export function validateApplyMask(value: string) {
  return value.replace(/(\d{2})(?=\d)/g, "$1/");
}
