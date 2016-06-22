let scents = []

/**
 * Adds a scent to an in-memory array of scents.
 *
 * A scent is left when a robot falls off Mars at a specified location, it
 * acts as a warning sign to other Robots.
 *
 * The lost property of the robot is removed, when a scent is being stored,
 * so as to allow for simpler equality checks in the future.
 *
 * @param {Object} oldState - the state of the robot before death
 * @returns {Array} scents - the currently stored scents
 */
function createScent (oldState) {
  scents = [...scents, oldState]

  return scents
}

/**
 * Retrieves an array of scents left from departed Robots
 *
 * @returns {Array} scents - the currently stored scents
 */
function getScents () {
  return scents
}

/**
 * Removes all scents stored in the scents array.
 *
 * @returns {Array} oldScents - an array of the old scents
 */
function resetScents () {
  const oldScents = scents
  scents = []

  return oldScents
}

export default {
  createScent,
  getScents,
  resetScents
}
