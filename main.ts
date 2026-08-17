input.onButtonPressed(Button.B, function () {
    let sprite: game.LedSprite = null
    sprite.turn(Direction.Right, 45)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
