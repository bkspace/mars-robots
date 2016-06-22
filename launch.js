import path from 'path'
import fs from 'fs'
import colors from 'colors'
import { INPUT, LOST, CONTROL } from './src/constants'
import { setMaxPos } from './src/utils/maxPosition'
import createRobotState from './src/robot/createRobotState'
import { moveForward, rotateDirection } from './src/robot/controlRobot'

// Make sure we got a filename on the command line.
if (process.argv.length < INPUT.length) {
  console.log(colors.red('ERR: Usage: node ' + process.argv[1] + ' INPUT-FILE\n'))
  process.exit(0)
}

// quick handling of incorrectly formatted input file.
function handleIncorrectFormatting () {
  console.log(colors.red('ERR: The input-file is incorrectly formatted.\n'))
  process.exit(0)
}

// quick handling of incorrectly formatted input file.
function handleBadStartingCoordinates () {
  console.log(colors.red('ERR: One of the Robots has an incorrect starting coordinate. The robot must start on Mars!\n'))
  process.exit(0)
}

let input
let inputLines
let sizeLine

try {
  input = fs.readFileSync(path.join(__dirname, process.argv[INPUT.FILE_POS]), 'utf8')
  inputLines = input.split('\n').filter((line) => line !== '') // filter out the empty lines
  sizeLine = inputLines.shift(INPUT.SIZE_LINE)
} catch (error) {
  handleIncorrectFormatting()
}

// set the boundaries of Mars
setMaxPos(
  parseInt(sizeLine.charAt(INPUT.WIDTH_POS)),
  parseInt(sizeLine.charAt(INPUT.HEIGHT_POS))
)

// turn the input text file into an array of robots
const robots = inputLines.map((line) => {
  let detailsArray
  let robotDetails
  let robotInstructions

  try {
    detailsArray = line.split(' ')
    robotDetails = detailsArray[INPUT.CORD_POS]
    robotInstructions = detailsArray[INPUT.INSTRUC_POS]
  } catch (error) {
    handleIncorrectFormatting()
  }

  return {
    robotState: {
      xCord: parseInt(robotDetails.charAt(INPUT.X_CORD_POS)),
      yCord: parseInt(robotDetails.charAt(INPUT.Y_CORD_POS)),
      direction: robotDetails.charAt(INPUT.DIRECTION_POS)
    },
    robotInstructions: robotInstructions
  }
})

let finishedRobots = []
processRobots()

// mission-control, prepare the robot for launch
function processRobots () {
  robots.forEach((robot) => {
    let robotInstructions
    const { direction, xCord, yCord } = robot.robotState

    try {
      robotInstructions = robot.robotInstructions.split('')
    } catch (err) {
      handleIncorrectFormatting()
    }

    let robotState = createRobotState(xCord, yCord, direction)

    finishedRobots.push(launchRobot(robotState, robotInstructions))
  })

  printFinishedRobots(finishedRobots)
}

// launch the robot to mars and report back it's final state
export function launchRobot (robotState, robotInstructions) {
  robotInstructions.forEach((instruction) => {
    if (!robotState) return handleBadStartingCoordinates() // the robot has started in an incorrect position
    if (robotState.lost) return robotState
    switch (instruction) {
      case CONTROL.FORWARD:
        robotState = moveForward(robotState)
        break
      case CONTROL.LEFT:
        robotState = rotateDirection(robotState)
        break
      case CONTROL.RIGHT:
        robotState = rotateDirection(robotState, true)
        break
    }
  })
  return robotState
}

// *pretty* print the last known locations of the robots
function printFinishedRobots (finishedRobots) {
  let finalString = ''
  finishedRobots.forEach((robot) => {
    finalString += '\n'
    finalString += '\t\t\t'
    finalString += colors.blue(robot.xCord.toString() + robot.yCord.toString())
    finalString += '\t'
    finalString += colors.green(robot.direction)
    if (robot.lost) finalString += colors.red.underline.bold('\t' + LOST)
    finalString += '\n'
  })

  console.log(finalString)
}
