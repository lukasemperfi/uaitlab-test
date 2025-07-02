import React from "react";
import cn from "classnames";
import styles from "./PriceSummary.module.css";
import { formatPrice } from "../../shared/utils";

export interface PriceSummaryProps {
  cost: number;
  currency?: string;
  className?: string;
}

export const PriceSummary: React.FC<PriceSummaryProps> = ({
  cost,
  currency = "грн",
  className,
}) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.costSection}>
        <div className={styles.costLabel}>собівартість виробів:</div>
        <div className={styles.costAmount}>
          {formatPrice(cost)}
          <span className={styles.currency}>{currency}</span>
        </div>
      </div>

      <div className={styles.militaryDiscount}>
        <span className={styles.militaryIcon}>&#x1FA96;</span>
        <span className={styles.militaryText}>
          Для військових —{" "}
          <strong className={styles.militaryTextStrong}>безкоштовно</strong>
        </span>
      </div>
    </div>
  );
};
