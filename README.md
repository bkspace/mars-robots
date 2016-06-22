#Mars Robots

The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot. Specific details left out, as this is a job application tech challenge.

## Input

Please see `input.example.txt'

`53` - X/Y boundaries of our 2D planet

`11E` - Starting position + direction of Robot   

`RFRFRFRF` - A list of instructions for the Robot to follow

## Output

![alt tag](https://raw.githubusercontent.com/bkspace/mars-robots/master/output-screenshot.png)

Respectively: Final location of robot, Direction robot is facing, If the robot has been lost

#Development

## Linting
`npm run lint`

## Install
`git clone https://github.com/bkspace/mars-robots.git`

`npm i`

## Tests
`npm run test`

## Run
### Through Babel
`npm run start`

### Compiled
`npm run start:prod`
