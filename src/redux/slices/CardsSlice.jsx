import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cardsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state,action) => {
        return [...state, action.payload];
    },
    removeFromCart: (state,action) => {
        return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cardsSlice.actions;
export default cardsSlice.reducer;
