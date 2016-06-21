import { expect } from 'chai'
import { getMaxPos, setMaxPos } from '../../src/utils/maxPosition'
import { DEFAULT_MAX_POS } from '../../src/constants'

describe('maxPosition', () => {
  describe('getMaxPos', () => {
    it('retrieves default max coordinate values', () => {
      const { maxCordX, maxCordY } = getMaxPos()
      expect(maxCordX).to.equal(DEFAULT_MAX_POS)
      expect(maxCordY).to.equal(DEFAULT_MAX_POS)
    })
  })

  describe('setMaxPos', () => {
    it('sets the maxCordX', () => {
      setMaxPos('foo')
      const { maxCordX, maxCordY } = getMaxPos()
      expect(maxCordX).to.equal('foo')
      expect(maxCordY).to.equal(50)
    })

    it('sets the maxCordY', () => {
      setMaxPos(null, 'bar')
      const { maxCordX, maxCordY } = getMaxPos()
      expect(maxCordX).to.equal(50)
      expect(maxCordY).to.equal('bar')
    })

    it('sets both maxCords', () => {
      setMaxPos('foo', 'bar')
      const { maxCordX, maxCordY } = getMaxPos()
      expect(maxCordX).to.equal('foo')
      expect(maxCordY).to.equal('bar')
    })
  })
})
