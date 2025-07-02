import { cva } from "class-variance-authority";
import { type ComponentProps, type FC } from "react";
import cn from "classnames";

import styles from "./Navbar.module.css";
import { BurgerIcon } from "@/shared/icons/Burger";
import logoXs from "@/assets/icons/logo-xs.svg";
import logoXl from "@/assets/icons/logo-xl.svg";
import { Link } from "react-router";

const navbar = cva(styles.navbar);

interface NavbarProps extends ComponentProps<"nav"> {}

const Navbar: FC<NavbarProps> = (props) => {
  const { children, className } = props;
  return <nav className={navbar({ className })}>{children}</nav>;
};

interface NavbarItemProps extends ComponentProps<"div"> {}

const NavbarItem: FC<NavbarItemProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn(styles["navbar-item"], className)} {...rest}>
      {children}
    </div>
  );
};

interface BurgerButtonProps extends ComponentProps<"button"> {}

const BurgerButton: FC<BurgerButtonProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <button className={cn(styles["burger-button"], className)} {...rest}>
      <BurgerIcon />
    </button>
  );
};

const Logo = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <>
        <img
          src={logoXs}
          alt="Logo"
          className={styles.logoXs}
          style={{ marginLeft: "16px" }}
        />
        <img src={logoXl} alt="Logo" className={styles.logoXl} />
      </>
    </Link>
  );
};

export { Navbar, NavbarItem, BurgerButton, Logo };
