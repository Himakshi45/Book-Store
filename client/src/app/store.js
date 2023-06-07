<<<<<<< HEAD
import configureStore from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {},
});
export default store;
=======
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
>>>>>>> 3021ed56995299fb10fac7f04df85eed5e09b101
