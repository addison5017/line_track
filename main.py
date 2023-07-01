def on_forever():
    if mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.WHITE) and mbit_小車類.Line_Sensor(mbit_小車類.enPos.RIGHT_STATE, mbit_小車類.enLineState.WHITE):
        mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_RUN, 90)
    elif mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.WHITE) and mbit_小車類.Line_Sensor(mbit_小車類.enPos.RIGHT_STATE, mbit_小車類.enLineState.BLACK):
        mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_SPINRIGHT, 75)
    elif mbit_小車類.Line_Sensor(mbit_小車類.enPos.LEFT_STATE, mbit_小車類.enLineState.BLACK) and mbit_小車類.Line_Sensor(mbit_小車類.enPos.RIGHT_STATE, mbit_小車類.enLineState.WHITE):
        mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_SPINLEFT, 75)
    else:
        mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_SPINRIGHT, 50)
        mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_RUN, 20)        
        mbit_小車類.car_ctrl_speed(mbit_小車類.CarState.CAR_SPINLEFT, 50)
        mbit_小車類.car_ctrl(mbit_小車類.CarState.CAR_STOP)
basic.forever(on_forever)
