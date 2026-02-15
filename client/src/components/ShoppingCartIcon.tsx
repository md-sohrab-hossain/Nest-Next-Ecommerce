"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ROUTES } from "@/lib/routes";
import useCartStore from "@/store/cartStore";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();

  if (!hasHydrated) return null;

  return (
    <Link href={ROUTES.CART} className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-400" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-sm font-medium">
        {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
