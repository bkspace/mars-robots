import { VALID_DIRECTIONS_ARRAY } from '../constants'

/**
 * Asserts the validity of a direction. The direction must exist within:
 * VALID_DIRECTIONS_ARRAY: ['N', 'E', 'S', 'W']
 *
 * @param {String} direction - the direction to perform the check on
 * @returns {Boolean} isValid - true if direction is valid
 */
export default function isValidDirection (direction) {
  return VALID_DIRECTIONS_ARRAY.indexOf(direction) >= 0
}
