export const calculateProjectPrice = (totalModulePower: number) => {
  if (totalModulePower <= 0) return 0
  if (totalModulePower > 0 && totalModulePower <= 10) return 1000
  if (totalModulePower > 10 && totalModulePower <= 15) return 2000
  if (totalModulePower > 15 && totalModulePower <= 25) return 2500
  return 3500
}
