import { type FC } from "react";
import styles from "./SuccessPage.module.css";
import { Button } from "@/shared/ui/button";
import { LinkArrowIcon } from "@/shared/icons/LinkArrowIcon";
import { Link } from "react-router";

interface SuccessPageProps {}

const title = "Успішно!";
const description =
  "Дякуємо! Наш волонтер скоро зв'яжеться з вами для підтвердження деталей.";
const primaryButtonText = "Підтримати ТАКО";
const secondaryButtonText = "Повернутися на головну";

export const SuccessPage: FC<SuccessPageProps> = (props) => {
  const {} = props;

  const handlePrimaryClick = () => {
    console.log("Primary button clicked - Support TAKO");
  };

  return (
    <main className={styles.main}>
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
                className={styles.secondaryButton}
                asChild
              >
                <Link to="/">
                  {secondaryButtonText}
                  <LinkArrowIcon className={styles.buttonIcon} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
