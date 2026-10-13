import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { ICartItem } from "@/types/cart.type";
import Button from "@/components/ui/button";
import { MdOutlineDelete } from "react-icons/md";

interface CartProps extends ICartItem {
  increaseQuantity?: () => void;
  decreaseQuantity?: () => void;
  removeItem?: () => void;
}

export const Cart = ({
  name,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}: CartProps) => {
  return (
    <div className="rounded-lg border border-black bg-purple-400 shadow-[6px_6px_0_black] transition hover:shadow-[1px_1px_0_black] cursor-pointer">
      <div className="p-3 space-y-6">
        {/* content */}
        <div className="text-black space-y-0.5">
          <h2 className="text-lg font-black line-clamp-1 truncate">{name}</h2>
          <p className="capitalize">
            <span className="font-semibold">quantity:</span>{" "}
            <span>{quantity}</span>
          </p>
        </div>
        {/* actions */}
        <div className="flex items-center justify-between">
          <Button onClick={removeItem}>
            <MdOutlineDelete className="text-red-500" />
          </Button>
          <div className="flex items-center gap-2">
            <Button onClick={increaseQuantity}>
              <GoPlus />
            </Button>
            <Button onClick={decreaseQuantity}>
              <FiMinus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
