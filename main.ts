basic.forever(function () {
    if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.White) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.Black)) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 100)
    } else if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.White) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.Black)) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Right, 50)
    } else if (mbit_小車類.Line_Sensor(mbit_小車類.enPos.LeftState, mbit_小車類.enLineState.Black) && mbit_小車類.Line_Sensor(mbit_小車類.enPos.RightState, mbit_小車類.enLineState.White)) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Left, 50)
    } else {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 0)
    }
})
