import { type proposalSchema } from '@/schemas/proposal'
import { type z } from 'zod'

import {
  discountMargin,
  generationEfficiency,
  overPower,
  solarIrradiation,
  unforeseenCosts
} from '../consts'
import {
  calculateEletricMaterialPrice,
  calculateInstalationPrice,
  calculateInstalationRequiredArea,
  calculateInverterMaxInputPower,
  calculateProjectPrice,
  estimateGeneration
} from '../utils'
import { calculateLocomotionPrice } from '../utils/calculateLocomotionPrice'

export const createProposal = (p: z.infer<typeof proposalSchema>) => {
  p.modulePower = p.modulePower / 1000

  const totalModulePower = p.moduleAmount * p.modulePower
  const totalInverterPower = p.inverterAmount * p.inverterPower

  const inverterMaxInputPower = calculateInverterMaxInputPower(
    totalInverterPower,
    p.modulePower,
    overPower
  )

  const maxModuleAmount = Math.floor(inverterMaxInputPower / p.moduleAmount)

  const [estimatedAverageMonthlyGeneration, estimatedMonthlyGeneration] =
    estimateGeneration(
      totalModulePower,
      solarIrradiation.AL['Maceió'],
      generationEfficiency
    )

  const [
    estimatedAverageMonthlyGenerationWithTotalInverterPowerCapacity,
    estimatedMonthlyGenerationWithTotalInverterPowerCapacity
  ] = estimateGeneration(
    inverterMaxInputPower,
    solarIrradiation.AL['Maceió'],
    generationEfficiency
  )

  const requiredInstalationArea = calculateInstalationRequiredArea(
    p.moduleAmount
  )

  const requiredInstalationAreaForMaxModuleAmount =
    calculateInstalationRequiredArea(maxModuleAmount)

  const projectPrice = calculateProjectPrice(totalModulePower)
  const eletricMaterialPrice = calculateEletricMaterialPrice(totalModulePower)
  const instalationPrice = calculateInstalationPrice(p.moduleAmount)

  const locomotionPrice = calculateLocomotionPrice(p.distance)

  const servicesPrice =
    projectPrice + eletricMaterialPrice + instalationPrice + locomotionPrice

  const unforeseenCostsPrice = unforeseenCosts * servicesPrice

  const proposalPrice = Math.ceil(
    (servicesPrice + unforeseenCostsPrice + p.kitPrice) * discountMargin
  )

  const finalProposalPrice =
    proposalPrice -
    (p.discountPrice ??
      (p.discountPercentage ? proposalPrice * p.discountPercentage : 0))
}
