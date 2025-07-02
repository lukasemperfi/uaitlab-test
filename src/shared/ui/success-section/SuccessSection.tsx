import { type FC } from "react";
import { LinkArrowIcon } from "../../icons/LinkArrowIcon";
import { Button } from "../button";
import styles from "./SuccessSection.module.css";

interface SuccessSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
}

export const SuccessSection: FC<SuccessSectionProps> = ({
  title = "Успішно!",
  description = "Дякуємо! Наш волонтер скоро зв'яжеться з вами для підтвердження деталей.",
  primaryButtonText = "Підтримати ТАКО",
  secondaryButtonText = "Повернутися на головну",
  onPrimaryClick,
  onSecondaryClick,
  primaryButtonHref,
  secondaryButtonHref,
}) => {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else if (primaryButtonHref) {
      window.open(primaryButtonHref, "_blank");
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else if (secondaryButtonHref) {
      window.location.href = secondaryButtonHref;
    }
  };

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>
            <Button
              color="blue"
              size="lg"
              onClick={handlePrimaryClick}
              className={styles.primaryButton}
            >
              <span>{primaryButtonText}</span>
              <LinkArrowIcon className={styles.buttonIcon} />
            </Button>

            <Button
              color="blue"
              variant="secondary"
              size="lg"
              onClick={handleSecondaryClick}
              className={styles.secondaryButton}
            >
              <span>{secondaryButtonText}</span>
              <LinkArrowIcon className={styles.buttonIcon} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
