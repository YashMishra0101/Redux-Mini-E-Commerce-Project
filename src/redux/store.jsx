import { configureStore } from "@reduxjs/toolkit";
import cardsSliceReducer from "./slices/CardsSlice";

export const store = configureStore({
  reducer: { 
    carts: cardsSliceReducer
},
});
