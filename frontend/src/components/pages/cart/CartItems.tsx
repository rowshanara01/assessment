"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";
import { ICartItem } from "@/types/cart.type";
import { Cart } from "./Cart";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@/store/features/cart/cartSlice";
import AddToCart from "./AddToCart";

const CartItems = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-bold">Carts</h3>
        <AddToCart />
      </div>
      <div className="grid lg:grid-cols-4 gap-6">
        {cart.map((item: ICartItem) => (
          <Cart
            key={item?.id}
            name={item?.name}
            id={item?.id}
            quantity={item?.quantity}
            increaseQuantity={() => dispatch(increaseQuantity({ id: item.id }))}
            decreaseQuantity={() => dispatch(decreaseQuantity({ id: item.id }))}
            removeItem={() => dispatch(removeItem({ id: item.id }))}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
