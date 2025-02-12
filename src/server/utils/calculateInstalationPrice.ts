export const calculateInstalationPrice = (moduleAmount: number) => {
  if (moduleAmount <= 0) return 0
  if (moduleAmount > 0 && moduleAmount <= 20) return moduleAmount * 150
  if (moduleAmount > 20 && moduleAmount <= 50) return moduleAmount * 130
  return moduleAmount * 110
}
