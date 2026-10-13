import { RootState } from "@/store/store";
import { ICartItem } from "@/types/cart.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartState {
  items: ICartItem[];
}

const initialState: ICartState = {
  items: [
    {
      id: "12",
      name: "this is title",
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) existing.quantity += action.payload.quantity;
      else state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
