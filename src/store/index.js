import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../reducer/index.js";

const store = configureStore({
  reducer: {
    todoList: itemSlice,
  },
});

export default store;
