import axiosInstance from "@https/axios";
import type { Product } from "./type";

export const productApi = {
  getAll: async (): Promise<Product[]> => {
    const res = await axiosInstance.get("/products");
    return res.data;
  },

  getById: async (id: string): Promise<Product> => {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  },

  create: async (payload: Partial<Product>): Promise<Product> => {
    const res = await axiosInstance.post("/products", payload);
    return res.data;
  },
};
