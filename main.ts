basic.forever(function () {
    if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.White) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.Black)) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 120)
        basic.pause(100)
    } else if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.White) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.Black)) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_SpinRight, 80)
        basic.pause(100)
    } else if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.Black) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.White)) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_SpinLeft, 80)
        basic.pause(100)
    } else {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_SpinLeft, 50)
        basic.pause(50)
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Right, 50)
        basic.pause(50)
        mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Stop)
    }
})
