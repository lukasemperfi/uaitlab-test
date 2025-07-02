import { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./NavMenu.module.css";
import cn from "classnames";

export interface NavMenuItem {
  title: string;
  href: string;
}

export interface NavMenuProps {
  children: ReactNode;
  className?: string;
}

export interface NavMenuItemProps {
  children: ReactNode;
  className?: string;
}

export interface NavMenuLinkProps extends ComponentProps<"a"> {
  children: ReactNode;
  href: string;
  className?: string;
  active?: boolean;
}

export const Root: FC<NavMenuProps> = ({ children, className = "" }) => (
  <ul className={cn(styles.navMenu, className)}>{children}</ul>
);

export const Item: FC<NavMenuItemProps> = ({ children, className = "" }) => (
  <li className={cn(styles.navMenuItem, className)}>{children}</li>
);

export const Link: FC<NavMenuLinkProps> = ({
  children,
  href,
  className = "",
  active = false,
  ...rest
}) => (
  <a
    href={href}
    className={cn(styles.navMenuLink, { [styles.active]: active }, className)}
    {...rest}
  >
    {children}
  </a>
);
