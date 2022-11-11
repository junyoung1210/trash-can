let count = 0
OLED.drawLoading(0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        count += 1
    }
    OLED.drawLoading(0 * pins.digitalReadPin(DigitalPin.P16))
    pins.servoWritePin(AnalogPin.P0, 180)
})
