let CHIP = ""
basic.forever(function () {
    CHIP = serial.readString()
    basic.showString(CHIP)
})
