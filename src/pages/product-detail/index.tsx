import { useParams, useNavigate } from "react-router-dom";
import { useProductsStore } from "@/features/product/hook";
import { ProductType } from "@pages/product/types/product.types";
import { Button } from "@/components/ui/button";

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Lấy product từ store
  const product = useProductsStore((state) =>
    state.products.find((p) => p.id === id)
  );

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Product not found</h1>
        <Button onClick={() => navigate(-1)} className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }

  const subtitle =
    product.type === ProductType.Soda
      ? product.flavor
      : product.type === ProductType.Shampoo
      ? product.scent
      : null;

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <Button onClick={() => navigate(-1)}>← Back</Button>

      <div className="border rounded-lg p-4 shadow-md space-y-2">
        <h2 className="text-2xl font-bold">
          {product.name}
          {subtitle && (
            <span className="text-muted-foreground"> — {subtitle}</span>
          )}
        </h2>

        {product.brand && (
          <p className="text-sm text-muted-foreground">
            Brand: {product.brand}
          </p>
        )}

        {product.type === ProductType.Soda && (
          <p>
            Size: {product.packageType}
            {product.servingSize && `, ${product.servingSize}`}
          </p>
        )}

        {product.type === ProductType.Shampoo && (
          <p>Size: {product.bottleSize}</p>
        )}

        {product.type === ProductType.Shoes && (
          <>
            <p>Size: {product.shoeSize} (EU)</p>
            {product.shoeColor && <p>Color: {product.shoeColor}</p>}
            {product.gender && <p>Gender: {product.gender}</p>}
          </>
        )}

        <p className="pt-2 font-medium">
          Price: <span className="text-primary">{product.price}$</span>
        </p>
      </div>
    </div>
  );
}
