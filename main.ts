let x = 0
let y = 0
let z = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 32) {
        basic.showIcon(IconNames.Square)
    } else if (Math.abs(y) > 32) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.No)
    }
    z = input.acceleration(Dimension.Z)
    serial.writeNumber(z)
    serial.writeLine("")
})
