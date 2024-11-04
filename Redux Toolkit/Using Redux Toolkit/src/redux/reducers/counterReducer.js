// remove the counter action creators imports
import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    reset(state, action) {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;


