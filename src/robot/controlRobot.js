import createRobotState from './createRobotState'
import utils from '../utils'
import { VALID_DIRECTIONS, VALID_DIRECTIONS_ARRAY, MOVEMENT } from '../constants'

/**
 * Propels a robot forward, in the direction it is facing, by returning
 * the state of the robot, after the movement.
 *
 * If a scent exists in the proposed move, the oldRobot state is returned.
 *
 * @param {Object} oldState - the state, before the movement
 * @returns {Object} newState - the new state of the robot
 */
export function moveForward (oldRobot) {
  const { xCord, yCord, direction } = oldRobot

  if (!utils.canMoveToCoordinate(oldRobot)) {
    return oldRobot
  }
  switch (direction) {
    case VALID_DIRECTIONS.NORTH:
      return createRobotState(xCord, yCord + MOVEMENT, direction, oldRobot)
    case VALID_DIRECTIONS.EAST:
      return createRobotState(xCord + MOVEMENT, yCord, direction, oldRobot)
    case VALID_DIRECTIONS.SOUTH:
      return createRobotState(xCord, yCord - MOVEMENT, direction, oldRobot)
    case VALID_DIRECTIONS.WEST:
      return createRobotState(xCord - MOVEMENT, yCord, direction, oldRobot)
    default:
      return oldRobot
  }
}

/**
 * Rotates the robot 90 degrees to the left, or right.
 *
 * @param {Object} oldRobot - the state, before the movement
 * @returns {Object} newState - the new state of the robot
 * @returns {Number} xCord - the new x-coordinate
 * @returns {Number} yCord - the new y-coordinate
 * @returns {String} direction - the new direction
 */
export function rotateDirection (oldRobot, isClockwise) {
  const { direction, xCord, yCord } = oldRobot
  const indexOfDirection = VALID_DIRECTIONS_ARRAY.indexOf(direction)
  const indexChange = isClockwise ? MOVEMENT : -MOVEMENT
  const newDirectionIndex =
    (indexOfDirection + indexChange + VALID_DIRECTIONS_ARRAY.length) %
    VALID_DIRECTIONS_ARRAY.length

  const newDirection = VALID_DIRECTIONS_ARRAY[newDirectionIndex]

  return createRobotState(xCord, yCord, newDirection)
}
