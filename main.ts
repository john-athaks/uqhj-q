input.onGesture(Gesture.Shake, function () {
    music.playTone(698, music.beat(BeatFraction.Eighth))
    basic.showLeds(`
        . . # # .
        . . # . .
        . . # . .
        . # # . .
        . # # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Skull)
})
