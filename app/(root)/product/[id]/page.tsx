import {
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";

type Props = {
  params: {
    id: string;
  };
};

const ProductPage = async ({ params: { id } }: Props) => {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  if (!product) {
    return;
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage
          imageUrl={product.imageUrl}
          className=""
          size={20}
        />
        <div className="w-[490px] bg-[#f5f5f5] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1" />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti soluta
            unde illo necessitatibus?
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
