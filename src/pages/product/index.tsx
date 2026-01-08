import { ProductForm } from "./components/product-form";
import { ProductList } from "./components/product-list";
import type { Product } from "@/pages/product/types/product.types";
import { useProductsStore } from "@/features/product/hook";

export function ProductPage() {
  const products = useProductsStore((state) => state.products);
  const addProduct = useProductsStore((state) => state.addProduct);

  function handleAddProduct(product: Product) {
    addProduct(product);
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "200px",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
}
