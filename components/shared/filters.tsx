"use client";

import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckBoxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

type Props = {
  className?: string;
};

type PriceProps = {
  priceFrom: number;
  priceTo: number;
};

export const Filters = ({ className }: Props) => {
  const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));
  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log({
      selectedIngredients,
      pizzaTypes,
      sizes,
      prices,
    });
  }, [prices, pizzaTypes, sizes, selectedIngredients]);
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
        selectedValues={pizzaTypes}
        onClickCheckbox={togglePizzaTypes}
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
        selectedValues={sizes}
        onClickCheckbox={toggleSizes}
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
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={0}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>
      <CheckBoxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedValues={selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};
