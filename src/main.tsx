import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage, HomePageLayout } from "./pages/home-page";
import { RootLayout } from "./RootLayout";
import { CheckoutLayout, CheckoutPage } from "./pages/checkout-page";
import { SuccessPage } from "./pages/success-page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: HomePageLayout,
        children: [{ index: true, Component: HomePage }],
      },
      {
        path: "/checkout",
        Component: CheckoutLayout,
        children: [
          { index: true, Component: CheckoutPage },
          {
            path: "/success",
            Component: SuccessPage,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
