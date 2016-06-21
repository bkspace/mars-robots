import { expect } from 'chai'
import { VALID_DIRECTIONS_ARRAY } from '../../src/constants'
import isDirectionValid from '../../src/utils/isValidDirection'

describe('isValidDirection', () => {
  const validDirections = VALID_DIRECTIONS_ARRAY
  const invalidDirections = ['A', 'C', 0, '12', 12, {}, () => null]

  it('returns true with valid direction', () => {
    validDirections.forEach((direction) => {
      const result = isDirectionValid(direction)
      expect(result).to.equal(true)
    })
  })

  it('returns false with invalid direction', () => {
    invalidDirections.forEach((direction) => {
      const result = isDirectionValid(direction)
      expect(result).to.equal(false)
    })
  })
})
