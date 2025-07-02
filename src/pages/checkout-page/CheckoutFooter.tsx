import styles from "./CheckoutFooter.module.css";
import { PageSection } from "../../shared/ui/page-section";

export const CheckoutFooter = () => {
  return (
    <footer className={styles.footer}>
      <PageSection.ContainerOuter className={styles.containerOuter}>
        <div className={styles.copyright}>© 2025 TAKO. All rights reserved</div>
      </PageSection.ContainerOuter>
    </footer>
  );
};
