import type { Product } from "@pages/product/types/product.types";
import { ProductType } from "@pages/product/types/product.types";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const navigate = useNavigate();

  const subtitle =
    product.type === ProductType.Soda
      ? product.flavor
      : product.type === ProductType.Shampoo
      ? product.scent
      : null;

  // Click handler
  function handleClick() {
    // Chuyển sang /product-detail kèm id hoặc query param nếu muốn
    navigate(`/product-detail/${product.id}`);
  }

  return (
    <Card
      className="w-[280px] cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleClick}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">
          {product.name}
          {subtitle && (
            <span className="text-muted-foreground"> — {subtitle}</span>
          )}
        </CardTitle>

        {product.brand && (
          <p className="text-sm text-muted-foreground">
            Brand: {product.brand}
          </p>
        )}
      </CardHeader>

      <CardContent className="space-y-1 text-sm">
        {product.type === ProductType.Soda && (
          <div>
            Size: {product.packageType}
            {product.servingSize && `, ${product.servingSize}`}
          </div>
        )}

        {product.type === ProductType.Shampoo && (
          <div>Size: {product.bottleSize}</div>
        )}

        {product.type === ProductType.Shoes && (
          <>
            <div>Size: {product.shoeSize} (EU)</div>
            {product.shoeColor && <div>Color: {product.shoeColor}</div>}
            {product.gender && <div>Gender: {product.gender}</div>}
          </>
        )}

        <div className="pt-2 font-medium">
          Price: <span className="text-primary">{product.price}$</span>
        </div>
      </CardContent>
    </Card>
  );
}
