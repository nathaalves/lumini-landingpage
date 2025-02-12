export const calculateInverterMaxInputPower = (
  totalInverterPower: number,
  modulePower: number,
  overPower: number
): number => {
  return (
    Math.floor(
      Math.floor((totalInverterPower * overPower) / modulePower) *
        modulePower *
        1000
    ) / 1000
  )
}
