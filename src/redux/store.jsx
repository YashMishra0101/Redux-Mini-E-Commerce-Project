import { configureStore } from "@reduxjs/toolkit";
import { cardsSlice } from "./slices/CardsSlice";

export const store = configureStore({
  reducer: { 
    carts:cardsSlice.reducer
},
});
