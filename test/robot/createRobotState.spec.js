import { expect } from 'chai'
import sinon from 'sinon'
import createRobotState from '../../src/robot/createRobotState'
import scentStore from '../../src/scentStore'
import utils from '../../src/utils'
import { VALID_DIRECTIONS } from '../../src/constants'

describe('createRobotState', () => {
  let sandbox
  let isCoordinateValidStub
  let isDirectionValidStub
  let createScentStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    isCoordinateValidStub = sandbox.stub(utils, 'isValidCoordinate').returns(true)
    isDirectionValidStub = sandbox.stub(utils, 'isValidDirection').returns(true)
    createScentStub = sandbox.stub(scentStore, 'createScent')
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('accepts coordinate and a direction', () => {
    const robot = createRobotState(1, 6, 'E')
    expect(robot.xCord).to.equal(1)
    expect(robot.yCord).to.equal(6)
    expect(robot.direction).to.equal('E')
  })

  it('defaults direction to East', () => {
    const robot = createRobotState(1, 6)
    expect(robot.xCord).to.equal(1)
    expect(robot.yCord).to.equal(6)
    expect(robot.direction).to.equal('E')
  })

  it('returns null with invalid coordinates', () => {
    isCoordinateValidStub.returns(false)
    const robot = createRobotState('foo', 'bar')
    expect(robot).to.equal(null)
  })

  it('returns null with invalid directions', () => {
    isDirectionValidStub.returns(false)
    const robot = createRobotState('foo', 'bar')
    expect(robot).to.equal(null)
  })

  it('returns the oldState when robot hits a scent', () => {
    isCoordinateValidStub.returns(false)
    createScentStub.returns('foo')
    const oldRobot = {
      xCoord: 1,
      yCoord: 1,
      direction: VALID_DIRECTIONS.NORTH
    }

    const robot = createRobotState('foo', 'bar', VALID_DIRECTIONS.NORTH, oldRobot)

    expect(robot.lost).to.equal(true)
    expect(robot.xCoord).to.equal(oldRobot.xCoord)
    expect(robot.yCoord).to.equal(oldRobot.yCoord)
    expect(robot.direction).to.equal(oldRobot.direction)
    expect(createScentStub.calledOnce).to.equal(true)
  })
})
