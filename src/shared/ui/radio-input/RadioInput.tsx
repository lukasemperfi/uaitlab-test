import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./RadioInput.module.css";

export interface RadioInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label?: string;
  className?: string;
  children?: ReactNode;
}

export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ label, className, children, checked, ...props }, ref) => {
    return (
      <label className={cn(styles.container, className)}>
        <input
          ref={ref}
          type="radio"
          className={styles.input}
          checked={checked}
          {...props}
        />
        <div
          className={cn(styles.radioWrapper, {
            [styles.checked]: checked,
          })}
        >
          <div className={styles.radioCircle}>
            <div className={styles.radioDot} />
          </div>
          <div className={styles.content}>
            {label && <span className={styles.label}>{label}</span>}
            {children}
          </div>
        </div>
      </label>
    );
  }
);

RadioInput.displayName = "RadioInput";
