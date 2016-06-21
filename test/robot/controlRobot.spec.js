import { expect } from 'chai'
import sinon from 'sinon'
import createRobotState from '../../src/robot/createRobotState'
import { moveForward, rotateDirection } from '../../src/robot/controlRobot'
import utils from '../../src/utils'
import { VALID_DIRECTIONS } from '../../src/constants'

describe('moveRobot', () => {
  describe('moveForward', () => {
    let canMoveToCoordinateStub

    beforeEach(() => {
      canMoveToCoordinateStub =
        sinon.stub(utils, 'canMoveToCoordinate').returns(true)
    })

    afterEach(() => {
      canMoveToCoordinateStub.restore()
    })

    it('increases y coordinate when facing North', () => {
      const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.NORTH)
      const newRobot = moveForward(initialRobot)
      expect(newRobot.xCord).to.equal(1)
      expect(newRobot.yCord).to.equal(2)
      expect(newRobot.direction).to.equal(VALID_DIRECTIONS.NORTH)
    })

    it('increases x coordinate when facing East', () => {
      const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.EAST)
      const newRobot = moveForward(initialRobot)
      expect(newRobot.xCord).to.equal(2)
      expect(newRobot.yCord).to.equal(1)
      expect(newRobot.direction).to.equal(VALID_DIRECTIONS.EAST)
    })

    it('decreases y coordinate when facing South', () => {
      const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.SOUTH)
      const newRobot = moveForward(initialRobot)
      expect(newRobot.xCord).to.equal(1)
      expect(newRobot.yCord).to.equal(0)
      expect(newRobot.direction).to.equal(VALID_DIRECTIONS.SOUTH)
    })

    it('decreases x coordinate when facing West', () => {
      const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.WEST)
      const newRobot = moveForward(initialRobot)
      expect(newRobot.xCord).to.equal(0)
      expect(newRobot.yCord).to.equal(1)
      expect(newRobot.direction).to.equal(VALID_DIRECTIONS.WEST)
    })

    it('returns same state when canMoveToCoordinate returns false', () => {
      canMoveToCoordinateStub.returns(false)
      const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.NORTH)
      const newRobot = moveForward(initialRobot)
      expect(newRobot).to.equal(initialRobot)
    })
  })
  describe('rotate', () => {
    describe('left', () => {
      it('changes direction to WEST, when facing NORTH', () => {
        const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.NORTH)
        const newRobot = rotateDirection(initialRobot)
        expect(newRobot.direction).to.equal(VALID_DIRECTIONS.WEST)
      })

      it('changes direction to EAST, when facing SOUTH', () => {
        const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.SOUTH)
        const newRobot = rotateDirection(initialRobot)
        expect(newRobot.direction).to.equal(VALID_DIRECTIONS.EAST)
      })

      it('changes direction to NORTH, when facing EAST', () => {
        const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.EAST)
        const newRobot = rotateDirection(initialRobot)
        expect(newRobot.direction).to.equal(VALID_DIRECTIONS.NORTH)
      })

      it('changes direction to SOUTH, when facing WEST', () => {
        const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.WEST)
        const newRobot = rotateDirection(initialRobot)
        expect(newRobot.direction).to.equal(VALID_DIRECTIONS.SOUTH)
      })
    })

    describe('right', () => {
      it('changes direction to EAST, when facing NORTH', () => {
        const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.NORTH)
        const newRobot = rotateDirection(initialRobot, true)
        expect(newRobot.direction).to.equal(VALID_DIRECTIONS.EAST)
      })

      it('changes direction to WEST, when facing SOUTH', () => {
        const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.SOUTH)
        const newRobot = rotateDirection(initialRobot, true)
        expect(newRobot.direction).to.equal(VALID_DIRECTIONS.WEST)
      })

      it('changes direction to SOUTH, when facing EAST', () => {
        const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.EAST)
        const newRobot = rotateDirection(initialRobot, true)
        expect(newRobot.direction).to.equal(VALID_DIRECTIONS.SOUTH)
      })

      it('changes direction to NORTH, when facing WEST', () => {
        const initialRobot = createRobotState(1, 1, VALID_DIRECTIONS.WEST)
        const newRobot = rotateDirection(initialRobot, true)
        expect(newRobot.direction).to.equal(VALID_DIRECTIONS.NORTH)
      })
    })
  })
})
