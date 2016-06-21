export const INPUT = {
  LENGTH: 3,
  FILE_POS: 2,
  SIZE_LINE: 0,
  WIDTH_POS: 0,
  HEIGHT_POS: 1,
  CORD_POS: 0,
  INSTRUC_POS: 1,
  X_CORD_POS: 0,
  Y_CORD_POS: 1,
  DIRECTION_POS: 2
}

export const CONTROL = {
  FORWARD: 'F',
  LEFT: 'L',
  RIGHT: 'R'
}

export const MOVEMENT = 1
export const LOST = 'LOST'
export const MIN_POS = 0
export const DEFAULT_MAX_POS = 50
export const DEFAULT_DIRECTION = 'E'

export const VALID_DIRECTIONS = {
  NORTH: 'N',
  EAST: 'E',
  SOUTH: 'S',
  WEST: 'W'
}

export const VALID_DIRECTIONS_ARRAY =
  Object.keys(VALID_DIRECTIONS)
  .map(key => VALID_DIRECTIONS[key])
