import { type FC } from "react";
import { Outlet } from "react-router";
import { Header } from "./pages/home-page/header";
import styles from "./RootLayout.module.css";

interface RootLayoutProps {}

export const RootLayout: FC<RootLayoutProps> = (props) => {
  const {} = props;
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
    </div>
  );
};
