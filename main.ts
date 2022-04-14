input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    while (true) {
        strip.rotate(2)
        basic.pause(200)
        strip.show()
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
})
input.onButtonPressed(Button.B, function () {
    strip.setPixelColor(0, neopixel.rgb(164, 196, 196))
    strip.setPixelColor(1, neopixel.rgb(96, 169, 23))
    strip.setPixelColor(2, neopixel.rgb(0, 138, 0))
    strip.setPixelColor(3, neopixel.rgb(0, 171, 169))
    strip.setPixelColor(4, neopixel.rgb(27, 161, 226))
    strip.setPixelColor(5, neopixel.rgb(0, 80, 239))
    strip.setPixelColor(6, neopixel.rgb(106, 0, 255))
    strip.setPixelColor(7, neopixel.rgb(207, 238, 250))
    strip.setPixelColor(8, neopixel.rgb(170, 0, 255))
    strip.setPixelColor(9, neopixel.rgb(244, 114, 208))
    strip.setPixelColor(10, neopixel.rgb(216, 0, 115))
    strip.setPixelColor(11, neopixel.rgb(162, 0, 37))
    strip.setPixelColor(12, neopixel.rgb(109, 135, 100))
    strip.setPixelColor(13, neopixel.rgb(100, 118, 135))
    strip.setPixelColor(14, neopixel.rgb(118, 96, 78))
    strip.show()
    for (let index = 0; index <= 6; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(200)
    }
    basic.pause(1000)
    strip.setBrightness(3)
    strip.show()
    basic.pause(1000)
    strip.easeBrightness()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
basic.forever(function () {
	
})
