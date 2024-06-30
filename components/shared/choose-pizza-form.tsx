import { cn } from "@/lib/utils";
import React from "react";
import { ProductImage } from "./product-image";
import { Title } from "./title";
import { Button } from "../ui";

type Props = {
  imageUrl: string;
  name: string;
  ingredients: any[]; // IProduct["ingredients"];
  items?: any[]; // IProduct["items"];
  onClickAdd?: VoidFunction;
  className?: string;
};

export const ChoosePizzaForm = ({
  imageUrl,
  name,
  ingredients,
  items,
  onClickAdd,
  className,
}: Props) => {
  const textDetails = "30 см, традиционное тесто 30";
  const totalPrice = 350;
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <ProductImage
          imageUrl={imageUrl}
          name={name}
          size={30}
          className="relative left-2 top-2 transition-all z-10 duration-300"
        />
      </div>
      <div className="w-[490px] bg-[#f5f5f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-350">{textDetails}</p>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} Р
        </Button>
      </div>
    </div>
  );
};
