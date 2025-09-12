let ss = "1223"
let aa = parseInt(ss)
basic.forever(function () {
    serial.writeNumber(aa)
    basic.pause(500)
})