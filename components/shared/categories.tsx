"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";
import React from "react";

type Props = {
  className?: string;
  items: Category[]
};

export const Categories = ({ className, items }: Props) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
      {items.map((item) => (
        <a
          key={item.id}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeCategoryId === item.id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${item.name}`}
        >
          <button>{item.name}</button>
        </a>
      ))}
    </div>
  );
};
