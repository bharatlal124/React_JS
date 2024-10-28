import { configureStore } from "@reduxjs/toolkit";

import timerReducer from "./redux/reducers/timerReducer";
import counterReducer from "./redux/reducers/counterReducer";

export const store = configureStore({
  reducer: {
    timerSlice: timerReducer,
    counterSlice: counterReducer,
  },
});
