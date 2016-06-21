import { expect } from 'chai'
import { DEFAULT_MAX_POS, MIN_POS } from '../../src/constants'
import isCoordinateValid from '../../src/utils/isValidCoordinate'

describe('isValidCoordinate', () => {
  const validCoordinates = [
    [1, 1],
    [7, 2],
    [49, MIN_POS]
  ]

  const invalidCoordinates = [
    [DEFAULT_MAX_POS + 1, 20],
    [DEFAULT_MAX_POS + 1, 13],
    [DEFAULT_MAX_POS - 1, MIN_POS - 1]
  ]

  it('returns true with valid coordinate', () => {
    validCoordinates.forEach((coordinate) => {
      const result = isCoordinateValid(coordinate[0], coordinate[1])
      expect(result).to.equal(true)
    })
  })

  it('returns false with invalid coordinate', () => {
    invalidCoordinates.forEach((coordinate) => {
      const result = isCoordinateValid(coordinate[0], coordinate[1])
      expect(result).to.equal(false)
    })
  })
})
