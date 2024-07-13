"use client";

import { FC, PropsWithChildren, ReactNode, useEffect } from "react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { getCartItemsDetails } from "@/shared/lib";
import { useCartStore } from "@/shared/store";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui";
import { CartDrawerItem } from "./cart-drawer-item";

type Props = {
  children: ReactNode;
};

export const CartDrawer: FC<PropsWithChildren<Props>> = ({ children }: Props) => {
  const [totalAmount, fetchCartItems, updateItemQuantity, removeCartItem, items] =
    useCartStore((state) => [
      state.totalAmount,
      state.fetchCartItems,
      state.updateItemQuantity,
      state.removeCartItem,
      state.items,
    ]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
          <SheetHeader>
            <SheetTitle>
              В корзине <span className="font-bold">{items.length} товара</span>
            </SheetTitle>
          </SheetHeader>
          <div className="-mx-6 mt-5 overflow-auto flex-1">
            <div className="mb-2">
              {items.map((item) => (
                <CartDrawerItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={
                    item.pizzaSize && item.pizzaType
                      ? getCartItemsDetails(
                          item.pizzaType as PizzaType,
                          item.pizzaSize as PizzaSize,
                          item.ingredients
                        )
                      : ""
                  }
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onClickCountButton={(type) =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemoveItem={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </div>

          <SheetFooter className="-mx-6 bg-white p-8">
            <div className="w-full">
              <div className="flex mb-4">
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                </span>
                <span className="font-bold text-lg">{totalAmount} ₽</span>
              </div>
              <Link href="/cart">
                <Button type="submit" className="w-full h-12 text-base">
                  Оформить заказ <ArrowRight className="w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
