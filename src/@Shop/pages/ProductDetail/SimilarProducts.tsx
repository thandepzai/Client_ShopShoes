import React from "react";
import { IProduct } from "@/src/@Core/components/newest/productType";
import { CarouselBoxCard, CarouselBox} from "@/src/@Core/components";

interface Props {
  products: any[];
}
const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <CarouselBox title="similarProducts" full={true}>
        {products.map((product) => (
          <CarouselBoxCard key={product.slug.current} product={product} />
        ))}
      </CarouselBox>
    </div>
  );
};

export default SimilarProducts;
