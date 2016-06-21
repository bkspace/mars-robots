import scentStore from '../scentStore'

/**
 * Determines weather to ignore a move, based on if a previous
 * robot has fallen off Mars at this location
 *
 * If a scent exists at the location and the attempted movement is
 * in the same direction, then we return the oldRobot, nullifying the
 * movement
 *
 * @param {Object} oldRobot - the state of the robot before this movement
 * @returns {Boolean} canMove - true if there is no scent, or the direction is different
 */
export default function canMoveToCoordinate (oldRobot) {
  const scents = scentStore.getScents()
  let canMove = true

  scents.forEach((scent) => {
    if (scent.xCord === oldRobot.xCord &&
        scent.yCord === oldRobot.yCord &&
        scent.direction === oldRobot.direction) {
      canMove = false
    }
  })

  return canMove
}
