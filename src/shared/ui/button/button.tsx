import { type FC } from "react";
import cn from "classnames";

import styles from "./button.module.css";
import { BaseButton } from ".";
import type { BaseButtonProps } from "./BaseButton";

export interface ButtonProps extends BaseButtonProps {
  variant?: "primary" | "secondary";
  size?: "xs" | "sm" | "md" | "lg";
  color?: "dark" | "blue" | "white";
  justify?: "center" | "between";
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    variant = "primary",
    size = "xs",
    color = "dark",
    justify = "center",
    children,
    className,
    ...rest
  } = props;

  return (
    <BaseButton
      className={cn(
        styles.base,
        styles[variant],
        styles[`size-${size}`],
        styles[`color-${color}`],
        styles[`justify-${justify}`],
        className
      )}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
