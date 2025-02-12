export const estimateGeneration = (
  totalModulePower: number,
  solarIrradiation: number[],
  efficiency: number
) => {
  const estimatedMonthlyGeneration = solarIrradiation.map((irradiation) => {
    return Math.floor(irradiation * totalModulePower * efficiency * 30)
  })

  const estimatedAverageMonthlyGeneration = Math.floor(
    estimatedMonthlyGeneration.reduce((acc, value) => acc + value) / 12
  )

  return [estimatedAverageMonthlyGeneration, estimatedMonthlyGeneration]
}
