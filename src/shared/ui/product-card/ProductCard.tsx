import { type FC } from "react";
import styles from "./ProductCard.module.css";
import cn from "classnames";
import { TrashIcon } from "../../../shared/icons";
import { ProductCardControls } from "./ProductCardControls";
import mockImage from "./order-card-image.jpg";

export interface ProductCardProps {
  image: string;
  title: string;
  quantity: number;
  price: number;
  onQuantityChange: (newQuantity: number) => void;
  onDelete: () => void;
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  image,
  title,
  quantity,
  price,
  onQuantityChange,
  onDelete,
  className,
}) => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src={image ? image : mockImage}
            alt={title}
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{title}</h3>
            <button
              type="button"
              onClick={onDelete}
              className={styles.deleteButton}
              aria-label="Delete item"
            >
              <TrashIcon />
            </button>
          </div>
          <ProductCardControls
            quantity={quantity}
            price={price}
            onQuantityChange={onQuantityChange}
            variant="desktop"
          />
        </div>
      </div>
      <ProductCardControls
        quantity={quantity}
        price={price}
        onQuantityChange={onQuantityChange}
        variant="mobile"
      />
    </div>
  );
};
