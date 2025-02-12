import { numberOfTrips, pricePerKm } from '../consts'

export const calculateLocomotionPrice = (distance: number) => {
  return distance * pricePerKm * numberOfTrips * 2
}
