import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import { useState } from "react";

type PriceProps = {
  priceFrom?: number;
  priceTo?: number;
};

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: number;
}

export interface FiltersType {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends FiltersType {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  //   Фильтр ингредиентов
  const [selectedIngredients, { toggle: setIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );

  //   ��ильтр размеров
  const [sizes, { toggle: setSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );

  //   Фильтра типов
  const [pizzaTypes, { toggle: setPizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : []
    )
  );

  //   Фильтр цен
  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const filters = {
    ingredients: Array.from(selectedIngredients),
    pizzaTypes: Array.from(pizzaTypes),
    sizes: Array.from(sizes),
    ...prices,
  };

  return {
    sizes,
    pizzaTypes,
    prices,
    selectedIngredients,
    setPrices: updatePrice,
    setPizzaTypes,
    setSizes,
    setIngredients,
  };
};
