import { type FC } from "react";
import { Outlet } from "react-router";
import { HomePageFooter } from "./footer";

interface HomePageLayoutProps {}

export const HomePageLayout: FC<HomePageLayoutProps> = (props) => {
  const {} = props;
  return (
    <>
      <Outlet />
      <HomePageFooter />
    </>
  );
};
