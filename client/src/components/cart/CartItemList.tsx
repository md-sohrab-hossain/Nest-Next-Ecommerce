"use client";

import useCartStore from "@/store/cartStore";
import { CartItem } from "./CartItem";
import { CartItemType } from "../../../types";
import { toast } from "react-toastify";

export const CartItemList = () => {
  const { cart, removeFromCart } = useCartStore();

  const handleDeleteCartItem = (item: CartItemType) => {
    removeFromCart(item);
    toast.warn("Remove Product from cart");
  };

  if (cart.length === 0) {
    return (
      <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
        <p className="text-center text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} onDelete={handleDeleteCartItem} />
      ))}
    </div>
  );
};
