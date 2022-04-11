input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    while (true) {
        strip.rotate(2)
        basic.pause(200)
        strip.show()
    }
})
input.onButtonPressed(Button.B, function () {
    strip.setPixelColor(0, neopixel.rgb(189, 236, 182))
    strip.setPixelColor(1, neopixel.rgb(207, 238, 250))
    strip.setPixelColor(2, neopixel.rgb(204, 153, 255))
    strip.setPixelColor(3, neopixel.rgb(255, 102, 0))
    strip.setPixelColor(4, neopixel.rgb(255, 128, 128))
    strip.setPixelColor(5, neopixel.rgb(0, 128, 128))
    strip.setPixelColor(6, neopixel.rgb(51, 102, 255))
    strip.setPixelColor(7, neopixel.rgb(207, 238, 250))
    strip.setPixelColor(8, neopixel.rgb(207, 238, 250))
    strip.setPixelColor(9, neopixel.rgb(207, 238, 250))
    strip.setPixelColor(10, neopixel.rgb(207, 238, 250))
    strip.setPixelColor(11, neopixel.rgb(207, 238, 250))
    strip.setPixelColor(12, neopixel.rgb(207, 238, 250))
    strip.setPixelColor(13, neopixel.rgb(207, 238, 250))
    strip.setPixelColor(14, neopixel.rgb(207, 238, 250))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
basic.forever(function () {
	
})
