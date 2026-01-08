import { useState } from "react";
import { ProductType } from "@pages/product/types/product.types";
import type { Product } from "@pages/product/types/product.types";

import { SodaFields } from "./soda-fields";
import { ShampooFields } from "./shampoo-field";
import { ShoesFields } from "./shoes-fields";

import { Button } from "@components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@components/ui/select";
import { Label } from "@components/ui/label";

type Props = {
  onSubmit: (product: Product) => void;
};

export function ProductForm({ onSubmit }: Props) {
  const [type, setType] = useState<ProductType>(ProductType.Soda);
  const [values, setValues] = useState<Record<string, string>>({});

  function updateField(field: string, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function resetForm() {
    setValues({});
    setType(ProductType.Soda);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    const base = {
      id: crypto.randomUUID(),
      name: values.name ?? "",
      price: Number(values.price ?? 0),
      brand: values.brand,
      type,
    };

    let product: Product;

    switch (type) {
      case ProductType.Soda:
        product = {
          ...base,
          type: ProductType.Soda,
          flavor: values.flavor,
          packageType: values.packageType ?? "",
          servingSize: values.servingSize,
        };
        break;

      case ProductType.Shampoo:
        product = {
          ...base,
          type: ProductType.Shampoo,
          scent: values.scent,
          bottleSize: values.bottleSize ?? "",
        };
        break;

      case ProductType.Shoes:
        product = {
          ...base,
          type: ProductType.Shoes,
          shoeSize: values.shoeSize ?? "",
          shoeColor: values.shoeColor,
          gender: values.gender,
        };
        break;
    }

    onSubmit(product);
    resetForm();
  }

  function isValid(): boolean {
    if (!values.name || !values.price) return false;

    switch (type) {
      case ProductType.Soda:
        return !!values.packageType;
      case ProductType.Shampoo:
        return !!values.bottleSize;
      case ProductType.Shoes:
        return !!values.shoeSize;
      default:
        return false;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[380px] space-y-4 rounded-lg border p-4"
    >
      <div className="space-y-1">
        <Label>Product type</Label>
        <Select value={type} onValueChange={(v) => setType(v as ProductType)}>
          <SelectTrigger>
            <SelectValue placeholder="Select product type" />
          </SelectTrigger>

          <SelectContent>
            {Object.values(ProductType).map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {type === ProductType.Soda && (
        <SodaFields values={values} onChange={updateField} />
      )}

      {type === ProductType.Shampoo && (
        <ShampooFields values={values} onChange={updateField} />
      )}

      {type === ProductType.Shoes && (
        <ShoesFields values={values} onChange={updateField} />
      )}

      <Button className="w-full" type="submit" disabled={!isValid()}>
        Add {type}
      </Button>
    </form>
  );
}
