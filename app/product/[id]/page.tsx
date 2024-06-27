type Props = {
  params: {
    id: string;
  };
};

const ProductPage = ({ params }: Props) => {
  const { id } = params;
  return <div>Product {id}</div>;
};

export default ProductPage;
