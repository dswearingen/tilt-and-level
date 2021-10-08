let x = 0
let y = 0
let xx = 0
let yy = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    xx = 0.005 * x + 2
    yy = 0.005 * y + 2
    led.plot(xx, yy)
})
