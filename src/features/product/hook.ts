// src/stores/useProductsStore.ts
import { create } from "zustand";
import type { Product } from "@pages/product/types/product.types";
import { STORAGE_KEY } from "@lib/constant";
import { productApi } from "./api";

interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  updateProduct: (product: Product) => void;
  setSelectedProduct: (product: Product | null) => void;
  resetProducts: () => void;
  setProducts: (products: Product[]) => void;
}

function loadFromStorage(): Pick<
  ProductsState,
  "products" | "selectedProduct"
> {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return { products: [], selectedProduct: null };
    return JSON.parse(json);
  } catch {
    return { products: [], selectedProduct: null };
  }
}

function saveToStorage(
  state: Pick<ProductsState, "products" | "selectedProduct">
) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export const useProductsStore = create<ProductsState>((set) => {
  const initial = loadFromStorage();

  const saveState = (
    state: Pick<ProductsState, "products" | "selectedProduct">
  ) => saveToStorage(state);

  return {
    products: initial.products,
    selectedProduct: initial.selectedProduct,
    loading: false,
    error: null,

    setProducts: (products: Product[]) => {
      set((state) => {
        const newState = { ...state, products };
        saveState({
          products: newState.products,
          selectedProduct: newState.selectedProduct,
        });
        return newState;
      });
    },

    fetchProducts: async () => {
      set({ loading: true, error: null });
      try {
        const data = await productApi.getAll();
        set((state) => {
          saveState({ products: data, selectedProduct: state.selectedProduct });
          return { products: data, loading: false };
        });
      } catch (err: any) {
        set({
          error: err.message || "Failed to load products",
          loading: false,
        });
      }
    },

    addProduct: (product) => {
      set((state) => {
        const newProducts = [...state.products, product];
        saveState({
          products: newProducts,
          selectedProduct: state.selectedProduct,
        });
        return { products: newProducts };
      });
    },

    removeProduct: (id) => {
      set((state) => {
        const newProducts = state.products.filter((p) => p.id !== id);
        const newSelected =
          state.selectedProduct?.id === id ? null : state.selectedProduct;
        saveState({ products: newProducts, selectedProduct: newSelected });
        return { products: newProducts, selectedProduct: newSelected };
      });
    },

    updateProduct: (product) => {
      set((state) => {
        const newProducts = state.products.map((p) =>
          p.id === product.id ? { ...p, ...product } : p
        );
        const newSelected =
          state.selectedProduct?.id === product.id
            ? { ...state.selectedProduct, ...product }
            : state.selectedProduct;
        saveState({ products: newProducts, selectedProduct: newSelected });
        return { products: newProducts, selectedProduct: newSelected };
      });
    },

    setSelectedProduct: (product) => {
      set((state) => {
        saveState({ products: state.products, selectedProduct: product });
        return { selectedProduct: product };
      });
    },

    resetProducts: () => {
      set(() => {
        const newState = { products: [], selectedProduct: null };
        saveState(newState);
        return newState;
      });
    },
  };
});
