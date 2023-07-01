basic.forever(function () {
    if (mbit_小車類.Line_Sensor(mbit_&#23567;&#36554;&#39006;.enPos.LeftState, mbit_&#23567;&#36554;&#39006;.enLineState.White) && mbit_小車類.Line_Sensor(mbit_&#23567;&#36554;&#39006;.enPos.RightState, mbit_&#23567;&#36554;&#39006;.enLineState.White)) {
        mbit_小車類.CarCtrlSpeed(mbit_&#23567;&#36554;&#39006;.CarState.Car_Run, 90)
    } else if (mbit_小車類.Line_Sensor(mbit_&#23567;&#36554;&#39006;.enPos.LeftState, mbit_&#23567;&#36554;&#39006;.enLineState.White) && mbit_小車類.Line_Sensor(mbit_&#23567;&#36554;&#39006;.enPos.RightState, mbit_&#23567;&#36554;&#39006;.enLineState.Black)) {
        mbit_小車類.CarCtrlSpeed(mbit_&#23567;&#36554;&#39006;.CarState.Car_SpinRight, 75)
    } else if (mbit_小車類.Line_Sensor(mbit_&#23567;&#36554;&#39006;.enPos.LeftState, mbit_&#23567;&#36554;&#39006;.enLineState.Black) && mbit_小車類.Line_Sensor(mbit_&#23567;&#36554;&#39006;.enPos.RightState, mbit_&#23567;&#36554;&#39006;.enLineState.White)) {
        mbit_小車類.CarCtrlSpeed(mbit_&#23567;&#36554;&#39006;.CarState.Car_SpinLeft, 75)
    } else {
        mbit_小車類.CarCtrlSpeed(mbit_&#23567;&#36554;&#39006;.CarState.Car_SpinRight, 50)
        mbit_小車類.CarCtrlSpeed(mbit_&#23567;&#36554;&#39006;.CarState.Car_Run, 20)
        mbit_小車類.CarCtrlSpeed(mbit_&#23567;&#36554;&#39006;.CarState.Car_SpinLeft, 50)
        mbit_小車類.CarCtrl(mbit_&#23567;&#36554;&#39006;.CarState.Car_Stop)
    }
})
