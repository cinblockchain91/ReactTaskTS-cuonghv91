import { createBrowserRouter } from "react-router-dom";
import { LayoutDark } from "./layouts/layout-dark";
import { ProductPage } from "@pages/product";
import { ProductDetailPage } from "@pages/product-detail";
import { NotFound } from "@pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDark />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
      {
        path: "product-detail/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
