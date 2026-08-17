input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 45)
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 45)
})
let sprite: game.LedSprite = null
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
