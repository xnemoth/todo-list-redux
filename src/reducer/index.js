import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  listCount: 0,
};

const itemSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = {
        id: nanoid(),
        content: action.payload,
      };
      state.listCount += 1;
      let saveNoteId = item.id;
      localStorage.setItem(saveNoteId, item.content);
      state.list.push(item);
    },
    deleteItem(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
  extraFeatures: {},
});

export const { addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
