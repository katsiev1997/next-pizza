import { CartDTO } from "./dto/cart.dto";
import { instance } from "./instance";

export const getCart = async (): Promise<CartDTO> => {
  return (await instance.get<CartDTO>("/cart")).data;
};

export const updateItemQuantity = async (
  itemId: number,
  quantity: number
): Promise<CartDTO> => {
  return (await instance.patch<CartDTO>("/cart/" + itemId, { quantity })).data;
};

export const deleteItem = async (itemId: number): Promise<CartDTO> => {
  return (await instance.delete<CartDTO>("/cart/" + itemId)).data;
};
