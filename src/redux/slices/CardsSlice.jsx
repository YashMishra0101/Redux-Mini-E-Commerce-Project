import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cardsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state,action) => {
      state.push(action.payload)
    },
    removeFromCart: (state,action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cardsSlice.actions;
export default cardsSlice.reducer;
