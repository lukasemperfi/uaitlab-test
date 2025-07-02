import type { ComponentProps, FC } from "react";
import styles from "./Container.module.css";
import classNames from "classnames";

interface ContainerProps extends ComponentProps<"div"> {
  maxW?: "none" | "sm" | "md" | "lg" | "xl";
  space?: "none" | "sm" | "md" | "lg" | "xl";
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  maxW = "xl",
  ...rest
}) => {
  return (
    <div
      className={classNames(
        styles.base,
        styles[`maxW-${maxW}`],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
