import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useDispatch, useSelector } from "react-redux";
import { alertSelector } from "../redux/reducers/alertReducer";
import { reset } from "../redux/reducers/alertReducer";

export const Timer = () => {
  // get alert message here
  const { message } = useSelector(alertSelector);
  console.log("message: " + message);
  // create effect to reset alert message here
  const dispatch = useDispatch();

  if (message) {
    setTimeout(() => {
      dispatch(reset());
    }, 2000);
  }

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message && <div className="alert">{message}</div>}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
