import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// change the timer actions imports
import { incrementTime } from "../redux/reducers/timerReducer";

export const Time = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { isRunning, elapsedTime } = useSelector((state) => state.timerSlice);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};
