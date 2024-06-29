"use client";

import { useFilters, useIngredients, useQueryFilters } from "@/hooks";
import { Input } from "../ui";
import { CheckBoxFiltersGroup } from "./checkbox-filters-group";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";

type Props = {
  className?: string;
};

export const Filters = ({ className }: Props) => {
  const { ingredients, loading } = useIngredients();

  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
      filters.setPrices('priceFrom', prices[0] );
      filters.setPrices('priceTo', prices[1] );
  }

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      {/* Верхник чекбоксы */}
      <CheckBoxFiltersGroup
        title="Тип теста"
        className="mb-5"
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
        selectedValues={filters.pizzaTypes}
        onClickCheckbox={filters.setPizzaTypes}
        name="sizes"
      />
      <CheckBoxFiltersGroup
        title="Размеры"
        className="mb-5"
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        selectedValues={filters.sizes}
        onClickCheckbox={filters.setSizes}
        name="sizes"
      />
      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={0}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckBoxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setIngredients}
        selectedValues={filters.selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};
