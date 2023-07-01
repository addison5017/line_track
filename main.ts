basic.forever(function on_forever() {
    if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.White) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.White)) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 90)
    } else if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.White) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.Black)) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_SpinRight, 75)
    } else if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.Black) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.White)) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_SpinLeft, 75)
    } else {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_SpinRight, 50)
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 20)
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_SpinLeft, 50)
        mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Stop)
    }
    
})
