import { MIN_POS } from '../constants'
import { getMaxPos } from './maxPosition'

/**
 * Asserts the validity of a coordinate.
 * The coordinates must live within the boundaries of Mars
 *
 * @param {Number} xCord - the width to check
 * @param {Number} yCord - the height to check
 * @returns {Boolean} isValid - true if coordinate is valid
 */
export default function isValidCoordinate (xCord, yCord) {
  const { maxCordX, maxCordY } = getMaxPos()

  if (xCord > maxCordX || yCord > maxCordY) {
    return false
  }
  if (xCord < MIN_POS || yCord < MIN_POS) {
    return false
  }

  return true
}
