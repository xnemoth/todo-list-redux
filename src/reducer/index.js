import { createSlice } from "@reduxjs/toolkit";
import getData from "../localStorage/storage.js";

const initialState = {
  list: [],
  listCount: 0,
};

const updateStorage = (jobUpdate, type) => {
  let data = getData();
  let newData;
  switch (type) {
    case "add":
      if (data) {
        data.push(jobUpdate);
        localStorage.note = JSON.stringify(data);
      } else {
        localStorage.setItem("note", JSON.stringify(jobUpdate));
      }
      break;
    case "remove":
      newData = data.filter((item) => item.id !== jobUpdate );
      localStorage.note = JSON.stringify(newData);
      break;
  }
};

const itemSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = {
        id: Date.now(),
        content: action.payload,
      };
      state.listCount += 1;
      updateStorage(item, "add");
      state.list.push(item);
    },
    deleteItem(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
      updateStorage(action.payload, "remove")
    },
  },
  extraFeatures: {},
});

export const { addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
