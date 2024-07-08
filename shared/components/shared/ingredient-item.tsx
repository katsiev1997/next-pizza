import { cn } from "@/shared/lib/utils";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export const IngredientItem = ({
  className,
  onClick,
  active,
  imageUrl,
  name,
  price,
}: Props) => {
  return (
    <div
      className={cn(
        className,
        "flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white",
        { "border border-primary": active }
      )}
      onClick={onClick}
    >
      {active && <CircleCheck className="absolute top-1 right-1 text-primary" />}
      <Image width={110} height={110} src={imageUrl} alt="ingredient" />
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">{price} Р</span>
    </div>
  );
};
