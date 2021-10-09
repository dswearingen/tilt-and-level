let x = 0
let y = 0
let xx = 0
let yy = 0
let tyy = 0
let txx = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    xx = Math.trunc(0.005 * x + 2)
    yy = Math.trunc(0.005 * y + 2)
    if (yy != tyy || xx != txx) {
        led.plot(xx, yy)
        led.unplot(txx, tyy)
        txx = xx
        tyy = yy
    }
})
