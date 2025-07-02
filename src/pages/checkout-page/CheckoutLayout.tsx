import { CheckoutFooter } from "./CheckoutFooter";
import { Outlet } from "react-router";

export const CheckoutLayout = () => {
  return (
    <>
      <Outlet />
      <CheckoutFooter />
    </>
  );
};
