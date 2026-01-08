export const ProductType = {
  Soda: "Soda",
  Shampoo: "Shampoo",
  Shoes: "Shoes",
} as const;

export type ProductType = (typeof ProductType)[keyof typeof ProductType];

export interface BaseProduct {
  id: string;
  name: string;
  price: number;
  brand?: string;
  type: ProductType;
}

export interface Soda extends BaseProduct {
  type: "Soda";
  flavor?: string;
  packageType: string;
  servingSize?: string;
}

export interface Shampoo extends BaseProduct {
  type: "Shampoo";
  scent?: string;
  bottleSize: string;
}

export interface Shoes extends BaseProduct {
  type: "Shoes";
  shoeSize: string;
  shoeColor?: string;
  gender?: string;
}

export type Product = Soda | Shampoo | Shoes;
