import { z } from 'zod'

export const proposalSchema = z.object({
  clientName: z.string().min(3).toUpperCase(),
  desiredGeneration: z.number().optional(),
  desiredPower: z.number().optional(),
  moduleManufacturer: z.string(),
  modulePower: z.number(),
  moduleAmount: z.number(),
  inverterType: z.string(),
  inverterManufacturer: z.string(),
  inverterAmount: z.number(),
  inverterPower: z.number(),
  extructureType: z.string(),
  kitPrice: z.number(),
  distance: z.number(),
  discountPrice: z.number().optional(),
  discountPercentage: z.number().optional()
})
