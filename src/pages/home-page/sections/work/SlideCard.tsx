import type { FC } from "react";
import styles from "./SlideCard.module.css";
import { BackpackLargeIcon } from "../../../../shared/icons/BackpackLargeIcon";
import { Button } from "../../../../shared/ui/button";
import { LinkArrowIcon } from "../../../../shared/icons/LinkArrowIcon";

export interface SlideCardProps {
  slide: {
    id: number;
    title: string;
    description: string;
    renderElement: (props: any) => React.ReactNode;
  };
}

export const SlideCard: FC<SlideCardProps> = ({ slide }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIconContainer}>
        <BackpackLargeIcon className={styles.cardIcon} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{slide.title}</h3>
        <p className={styles.cardDescription}>{slide.description}</p>
      </div>
    </div>
  );
};

export const OfferCard: FC<SlideCardProps> = ({ slide }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIconContainer}>
        <BackpackLargeIcon className={styles.cardIcon} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{slide.title}</h3>
        <p className={styles.cardDescription}>{slide.description}</p>
        <Button color="blue" className={styles.cardButton}>
          Переглянути категорії
          <LinkArrowIcon className={styles.cardButtonIcon} />
        </Button>
      </div>
    </div>
  );
};
