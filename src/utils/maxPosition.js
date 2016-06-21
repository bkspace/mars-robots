import { DEFAULT_MAX_POS } from '../constants'

let maxCordX
let maxCordY

/**
 * Sets the boundaries of Mars, stored in-memory
 * To be used when checking the validity of a robot movement
 *
 * @param {Number} xCord - the largest acceptable width coordinate
 * @param {Number} yCord - the largest acceptable height coordinate
 */
export function setMaxPos (xCord, yCord) {
  maxCordX = xCord
  maxCordY = yCord
}

/**
 * Returns the boundaries of Mars
 * If max coordinates have been set, will default to { 50, 50 }
 *
 * @returns {Object} coordinate - describing the size of Mars
 * @returns {Number} coordinate.maxCordX - the largest acceptable width coordinate.
 * @returns {Number} coordinate.maxCordY - the largest acceptable height coordinate.
 */
export function getMaxPos () {
  return {
    maxCordX: maxCordX || DEFAULT_MAX_POS,
    maxCordY: maxCordY || DEFAULT_MAX_POS
  }
}
