import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

type IngredientItem = Pick<Ingredient, "id" | "name">;

type ReturnProps = {
  ingredients: IngredientItem[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
};

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<ReturnProps["ingredients"]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIngredients, { toggle }] = useSet(new Set<string>([]));

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(
          ingredients.map((item) => ({
            id: item.id,
            name: item.name,
          }))
        );
      } catch (error) {
        setLoading(false);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);
  return { ingredients, loading, onAddId: toggle, selectedIngredients };
};
