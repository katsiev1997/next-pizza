import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiltersType } from "./use-filters";
import qs from "qs";

export const useQueryFilters = (filters: FiltersType) => {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...filters.prices,
      ingredients: Array.from(filters.selectedIngredients),
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
    };
    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`, {
      scroll: false,
    });
  }, [filters, router]);
};
