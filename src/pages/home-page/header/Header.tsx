import { HomePageNavbar } from "./navbar";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <HomePageNavbar />
    </header>
  );
};
