import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timeIsUp: false
}


const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    timeToggle: (state) => {
      state.timeIsUp = true;
    },
  },
});

export const { timeToggle } = timerSlice.actions;
export default timerSlice.reducer;
