import { createSlice } from "@reduxjs/toolkit";



export const likeListSlice = createSlice({
  name: "likeList",
  initialState: {
    likeListProds: []
  },
  reducers: {
    addTolikeList: (state, { payload }) => {
      const exist = state.likeListProds.some(prod => prod.id === payload.id ? true : false);
      if (!exist) {
        state.likeListProds = [...state.likeListProds, payload];
      }
    },
    removeFromlikeList: (state, { payload }) => {
      state.likeListProds = state.likeListProds.filter(prod => prod.id !== payload.id);
    }
  }
});
export const { addTolikeList, removeFromlikeList } = likeListSlice.actions;
export default likeListSlice.reducer;