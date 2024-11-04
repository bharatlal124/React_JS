
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRunning: false,
  elapsedTime: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer(state) {
      state.isRunning = true;
    },
    stopTimer(state) {
      state.isRunning = false;
    },
    resetTimer(state) {
      state.time = 0;
      state.elapsedTime = 0;
    },
    incrementTime(state) {
      state.elapsedTime += 1;
    },
  },
});

export const { startTimer, stopTimer, resetTimer, incrementTime } =
  timerSlice.actions;

export default timerSlice.reducer;
