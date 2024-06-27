import { Ingredient, Product } from "@prisma/client";
import { instance } from "./instance";
import { ApiRoutes } from "./constants";

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await instance.get<Ingredient[]>(ApiRoutes.INGREDIENTS);
  return data;
};
