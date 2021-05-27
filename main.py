def on_received_number(receivedNumber):
    if receivedNumber > 47 and receivedNumber < 50:
        music.play_melody("A G F E D E F G ", 120)
        music.play_melody("G A A B C5 C5 C5 C5 ", 120)
        servos.P1.set_angle(90)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    soundExpression.giggle.play()
    servos.P1.set_angle(90)
input.on_button_pressed(Button.A, on_button_pressed_a)

radio.set_group(63)
servos.P1.set_angle(0)