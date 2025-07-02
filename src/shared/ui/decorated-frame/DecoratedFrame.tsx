import cn from "classnames";
import type { FC, ReactNode } from "react";
import styles from "./DecoratedFrame.module.css";
import { FigureIcon } from "@/shared/icons/FigureIcon";

interface DecoratedFrameProps {
  children?: ReactNode;
  className?: string;
  backgroundColor?: "blue" | "dark" | "lightGray";
}

interface DecoratedFrameFigureProps {
  children?: ReactNode;
  className?: string;
  color?: "gold" | "white";
}
interface DecoratedFrameOverlayProps {
  children?: ReactNode;
  className?: string;
  color?: "gold" | "blue";
}

interface DecoratedFrameImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const Root: FC<DecoratedFrameProps> = ({
  children,
  className = "",
  backgroundColor = "",
}) => {
  return (
    <div
      className={cn(
        styles.decoratedFrame,
        styles[`backgroundColor-${backgroundColor}`],
        className
      )}
    >
      {children}
    </div>
  );
};

const Overlay: FC<DecoratedFrameOverlayProps> = ({
  children,
  className = "",
  color = "blue",
}) => (
  <div
    className={cn(
      styles.decoratedFrameOverlay,
      styles[`color-${color}`],
      className
    )}
  >
    {children}
  </div>
);

const Figure: FC<DecoratedFrameFigureProps> = ({
  className = "",
  color = "gold",
}) => (
  <div
    className={cn(
      styles.decoratedFrameFigure,
      styles[`color-${color}`],
      className
    )}
  >
    <FigureIcon />
  </div>
);

const Image: FC<DecoratedFrameImageProps> = ({
  src,
  alt = "Decorated Image",
  className = "",
}) => (
  <img
    src={src}
    alt={alt}
    className={cn(styles.decoratedFrameImage, className)}
  />
);

export { Root, Overlay, Figure, Image, type DecoratedFrameProps };
