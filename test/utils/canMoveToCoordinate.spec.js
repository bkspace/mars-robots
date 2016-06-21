import { expect } from 'chai'
import sinon from 'sinon'
import canMoveToCoordinate from '../../src/utils/canMoveToCoordinate'
import scentStore from '../../src/scentStore'

describe('canMoveToCoordinate', () => {
  let getScentsStub
  let smellyRobotState = {
    xCord: 5,
    yCord: 5,
    direction: 'N'
  }
  beforeEach(() => {
    getScentsStub = sinon.stub(scentStore, 'getScents').returns([smellyRobotState])
  })

  afterEach(() => {
    getScentsStub.restore()
  })

  it('returns false if there is a scent on this movement', () => {
    expect(canMoveToCoordinate(smellyRobotState)).to.equal(false)
  })

  it('returns true if there is no scent on this movement', () => {
    let cleanRobotState = {
      xCord: 'foo',
      yCord: 'bar',
      direction: 'fooBar'
    }
    expect(canMoveToCoordinate(cleanRobotState)).to.equal(true)
  })
})
