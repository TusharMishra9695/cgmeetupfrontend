import { configureStore } from "@reduxjs/toolkit";
import addFollowers from "./slice/addFollowers";

export const store = configureStore({
  reducer: { addFollowers },
});
