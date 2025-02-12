export const calculateEletricMaterialPrice = (totalModulePower: number) => {
  if (totalModulePower <= 0) return 0
  if (totalModulePower > 0 && totalModulePower <= 3) return 1000
  if (totalModulePower > 3 && totalModulePower <= 5) return 1500
  if (totalModulePower > 5 && totalModulePower <= 8) return 2000
  if (totalModulePower > 8 && totalModulePower <= 10) return 2500
  if (totalModulePower > 10 && totalModulePower <= 15) return 3000
  if (totalModulePower > 15 && totalModulePower <= 25) return 3500
  return 5000
}
