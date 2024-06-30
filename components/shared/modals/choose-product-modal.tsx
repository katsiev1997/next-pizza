"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { ChoosePizzaForm } from "../choose-pizza-form";

type Props = {
  product: ProductWithRelations;
  className?: string;
};

export const ChooseProductModal = ({ product, className }: Props) => {
  const router = useRouter();
  const isPizzaForm = !!product.items[0].pizzaType;

  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
