import {
  ChooseProductModal
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const ProductModalPage = async ({ params: { id } }: Props) => {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
};

export default ProductModalPage;
