/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Lucas Nguyen
 * Created on: Sep 2024
 * This program lights an LED when A is pressed, and turns it off with B.
*/

// setup
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

// turn on LED
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

// turn off LED
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
