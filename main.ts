radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 47 && receivedNumber < 50) {
        servos.P1.setAngle(90)
        music.playMelody("A G F E D E F G ", 120)
        music.playMelody("G A A B C5 C5 C5 C5 ", 120)
    }
})
input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(90)
    music.playMelody("A G F E D E F G ", 120)
    music.playMelody("G A A B C5 C5 C5 C5 ", 120)
})
radio.setGroup(63)
servos.P1.setAngle(0)
