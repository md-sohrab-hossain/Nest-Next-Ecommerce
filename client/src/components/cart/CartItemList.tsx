import { CartItemType } from "@/types";
import { CartItem } from "./CartItem";

interface CartItemListProps {
  items: CartItemType[];
  onDelete?: (id: string | number) => void;
}

export const CartItemList = ({ items, onDelete }: CartItemListProps) => {
  if (items.length === 0) {
    return (
      <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
        <p className="text-center text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
      {items.map((item) => (
        <CartItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};
