radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (item.compare("A") == 0) {
        SuperBit.Servo2(SuperBit.enServo.S1, 0)
    } else if (item.compare("B") == 0) {
        SuperBit.Servo2(SuperBit.enServo.S1, 90)
    } else if (item.compare("E") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    } else if (item.compare("F") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
    } else if (item.compare("G") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBit.RGB_Program().show()
    } else if (item.compare("H") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
    } else if (item.compare("I") == 0) {
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
    }
})
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
SuperBit.Servo2(SuperBit.enServo.S1, 90)
basic.showIcon(IconNames.Happy)
