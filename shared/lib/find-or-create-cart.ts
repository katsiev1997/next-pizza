import { prisma } from "@/prisma/prisma-client";

export const findOrCreateCart = async (token: string) => {
    const cart = await prisma.cart.findFirst({ where: { token } });
    if (cart) {
        return cart;
    }
    return prisma.cart.create({ data: { token } });
}