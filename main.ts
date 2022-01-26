basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 132)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 5) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
