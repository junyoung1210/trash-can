OLED.init(128, 64)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
let count = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        count += 1
        pins.digitalWritePin(DigitalPin.P6, 90)
        OLED.drawLoading(count * 5)
        basic.pause(3000)
        OLED.clear()
    } else {
        pins.digitalWritePin(DigitalPin.P6, 0)
    }
})
