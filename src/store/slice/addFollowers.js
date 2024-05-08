import { createSlice } from "@reduxjs/toolkit";

const addFollower = createSlice({
  name: "addFollower",
  initialState: {
    value: 0,
  },
  reducers: {
    addFollow: (state, action) => {
      state.value += 1; // incrementing followers
    },
  },
});
export const { addFollow } = addFollower.actions;
export default addFollower.reducer;
