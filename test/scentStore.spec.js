import { expect } from 'chai'
import scentStore from '../src/scentStore'

describe('scentStore', () => {
  beforeEach(() => {
    scentStore.resetScents()
  })

  describe('getScents', () => {
    it('returns an empty array', () => {
      const scents = scentStore.getScents()
      expect(scents).to.be.a('array')
    })
  })

  describe('createScent', () => {
    it('should return the new scents array', () => {
      const scents = scentStore.createScent({
        xCord: 'foo',
        yCord: 'bar',
        direction: 'foobar'
      })
      expect(scents).to.be.a('array')
      expect(scents.length).to.equal(1)
      expect(scents[0].xCord).to.equal('foo')
      expect(scents[0].yCord).to.equal('bar')
      expect(scents[0].direction).to.equal('foobar')
    })
  })

  describe('resetScents', () => {
    it('should remove old scents', () => {
      scentStore.createScent({
        xCord: 'foo',
        yCord: 'bar',
        direction: 'foobar'
      })
      const oldScents = scentStore.resetScents()
      const newScents = scentStore.getScents()
      expect(oldScents.length).to.equal(1)
      expect(newScents.length).to.equal(0)
    })
  })
})
