import { type FC } from "react";
import styles from "./ProductCard.module.css";
import cn from "classnames";
import { PlusIcon, MinusIcon } from "../../icons";
import { formatPrice } from "../../utils";

export interface ProductCardControlsProps {
  quantity: number;
  price: number;
  onQuantityChange: (newQuantity: number) => void;
  variant?: "mobile" | "desktop";
  className?: string;
}

export const ProductCardControls: FC<ProductCardControlsProps> = ({
  quantity,
  price,
  onQuantityChange,
  variant = "mobile",
  className,
}) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div
      className={cn(styles.controls, styles[`controls-${variant}`], className)}
    >
      <div className={styles.quantityControls}>
        <button
          type="button"
          onClick={() => handleQuantityChange(quantity - 1)}
          className={styles.quantityButton}
          aria-label="Decrease quantity"
        >
          <MinusIcon />
        </button>
        <div className={styles.quantityDisplay}>
          <span className={styles.quantityText}>{quantity}</span>
        </div>
        <button
          type="button"
          onClick={() => handleQuantityChange(quantity + 1)}
          className={styles.quantityButton}
          aria-label="Increase quantity"
        >
          <PlusIcon />
        </button>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.price}>
          {formatPrice(price)}
          <span className={styles.priceCurrency}>грн</span>
        </div>
        <div className={styles.priceLabel}>собівартість за од.</div>
      </div>
    </div>
  );
};
