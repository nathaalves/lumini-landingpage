import { moduleArea } from '../consts'

export const calculateInstalationRequiredArea = (
  moduleAmount: number
): number => {
  return Math.ceil(moduleAmount * moduleArea)
}
