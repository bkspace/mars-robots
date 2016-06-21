import { DEFAULT_DIRECTION } from '../constants'
import scentStore from '../scentStore'
import utils from '../utils'

/**
 * Creates an Object describing the state of a Robot, based on the current
 * movement.
 *
 * If coordinates are invalid during the initial state creation of a robot,
 * null is returned.
 *
 * If the coordinates are invalid, but an oldState exists, the robot has
 * fallen off the map. In this scenario, we add a .lost property to the oldState,
 * which is used to (1) leave a scent for other robots and (2) stop the instructions
 * from continuing.
 *
 * @param {Number} xCord - the new x-coordinate
 * @param {Number} yCord - the new y-coordinate
 * @param {String} direction - the new direction the robot is facing
 * @param {Object} oldState - the old state of the robot
 *
 * @returns {Object} robotState - the new state of the robot
 * @returns {Number} robotState.xCord - the new x-coordinate
 * @returns {Number} robotState.yCord - the new y-coordinate
 * @returns {String} direction - the new direction
 */
export default function createRobotState (xCord, yCord, direction, oldState) {
  direction = direction || DEFAULT_DIRECTION

  if (!utils.isValidCoordinate(xCord, yCord) || !utils.isValidDirection(direction)) {
    // our robot has fallen off the grid!
    if (oldState) {
      // store the scent to warn other robots
      scentStore.createScent(oldState)
      return Object.assign({}, oldState, {
        lost: true
      })
    }
    // state initialised with invalid coordinate
    return null
  }

  return {
    xCord,
    yCord,
    direction: direction
  }
}
