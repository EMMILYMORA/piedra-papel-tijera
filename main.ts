let Opciones = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    Opciones = randint(1, 3)
    if (Opciones == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
    } else if (Opciones == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Scissors)
        basic.pause(500)
    }
})
