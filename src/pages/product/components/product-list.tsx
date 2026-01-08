import type { Product } from "@pages/product/types/product.types";
import { ProductCard } from "./product-card";

type Props = {
  products: Product[];
};

export function ProductList({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-lg border border-dashed p-8 text-sm text-muted-foreground">
        No products yet
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
