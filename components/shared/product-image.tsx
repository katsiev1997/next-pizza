import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
  name: string;
};

export const ProductImage = ({ className, imageUrl, size, name }: Props) => {
  let sizePx;
  switch (size) {
    case 20:
      sizePx = 300;
      break;
    case 30:
      sizePx = 400;
      break;
    case 40:
      sizePx = 500;
      break;
  }
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-1 relative w-full",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={name}
        className="relative left-2 top-2 transition-all z-10 duration-300"
        width={sizePx}
        height={sizePx}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-200 w-[450px] h-[450px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]" />
    </div>
  );
};
