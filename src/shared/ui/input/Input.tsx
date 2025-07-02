import { forwardRef, useId, createContext, useContext } from "react";
import type { ComponentProps, FC, InputHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Input.module.css";

interface FieldContextType {
  id: string;
  invalid: boolean;
  disabled: boolean;
}

const FieldContext = createContext<FieldContextType | null>(null);

const useFieldContext = () => {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error("Field components must be used within Field.Root");
  }
  return context;
};

interface FieldRootProps {
  children: ReactNode;
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
}

const FieldRoot = ({
  children,
  invalid = false,
  disabled = false,
  className,
}: FieldRootProps) => {
  const id = useId();

  return (
    <FieldContext.Provider value={{ id, invalid, disabled }}>
      <div className={cn(styles.container, className)}>{children}</div>
    </FieldContext.Provider>
  );
};

interface FieldLabelProps {
  children: ReactNode;
  className?: string;
}

const FieldLabel = ({ children, className }: FieldLabelProps) => {
  const { id, disabled } = useFieldContext();

  return (
    <label
      htmlFor={id}
      className={cn(
        styles.label,
        { [styles.labelDisabled]: disabled },
        className
      )}
    >
      {children}
    </label>
  );
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  endIcon?: ReactNode;
  endButton?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, endIcon, endButton, ...props }, ref) => {
    const { id, invalid, disabled } = useFieldContext();

    return (
      <div
        className={cn(styles.inputWrapper, {
          [styles.inputWrapperError]: invalid,
          [styles.inputWrapperDisabled]: disabled,
        })}
      >
        <input
          ref={ref}
          id={id}
          className={cn(
            styles.input,
            {
              [styles.inputError]: invalid,
              [styles.inputDisabled]: disabled,
              [styles.inputWithEndIcon]: endIcon,
              [styles.inputWithEndButton]: endButton,
            },
            className
          )}
          disabled={disabled}
          {...props}
        />
        {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
        {endButton && <div className={styles.endButton}>{endButton}</div>}
      </div>
    );
  }
);

interface FieldErrorTextProps extends ComponentProps<"div"> {
  message: string;
}

const FieldErrorText: FC<FieldErrorTextProps> = ({
  message = "",
  className,
}) => {
  const { invalid } = useFieldContext();

  if (!invalid) return null;

  return (
    <div className={cn(styles.errorContainer, className)}>
      <div className={styles.errorIcon}>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.41943C10.0716 2.41943 8.18657 2.99126 6.58319 4.0626C4.97982 5.13395 3.73013 6.65669 2.99218 8.43827C2.25422 10.2198 2.06114 12.1802 2.43735 14.0716C2.81355 15.9629 3.74215 17.7002 5.10571 19.0637C6.46928 20.4273 8.20656 21.3559 10.0979 21.7321C11.9892 22.1083 13.9496 21.9152 15.7312 21.1773C17.5127 20.4393 19.0355 19.1896 20.1068 17.5862C21.1782 15.9829 21.75 14.0978 21.75 12.1694C21.7473 9.58441 20.7192 7.10605 18.8913 5.27816C17.0634 3.45027 14.585 2.42216 12 2.41943ZM12 20.4194C10.3683 20.4194 8.77326 19.9356 7.41655 19.0291C6.05984 18.1225 5.00242 16.8341 4.378 15.3266C3.75358 13.8191 3.5902 12.1603 3.90853 10.5599C4.22685 8.9596 5.01259 7.48959 6.16637 6.3358C7.32016 5.18202 8.79017 4.39628 10.3905 4.07796C11.9909 3.75963 13.6497 3.923 15.1571 4.54743C16.6646 5.17185 17.9531 6.22927 18.8596 7.58598C19.7662 8.94268 20.25 10.5377 20.25 12.1694C20.2475 14.3567 19.3775 16.4537 17.8309 18.0003C16.2843 19.547 14.1873 20.417 12 20.4194ZM11.25 12.9194V7.66943C11.25 7.47052 11.329 7.27976 11.4697 7.1391C11.6103 6.99845 11.8011 6.91943 12 6.91943C12.1989 6.91943 12.3897 6.99845 12.5303 7.1391C12.671 7.27976 12.75 7.47052 12.75 7.66943V12.9194C12.75 13.1183 12.671 13.3091 12.5303 13.4498C12.3897 13.5904 12.1989 13.6694 12 13.6694C11.8011 13.6694 11.6103 13.5904 11.4697 13.4498C11.329 13.3091 11.25 13.1183 11.25 12.9194ZM13.125 16.2944C13.125 16.5169 13.059 16.7344 12.9354 16.9194C12.8118 17.1045 12.6361 17.2486 12.4305 17.3338C12.225 17.4189 11.9988 17.4412 11.7805 17.3978C11.5623 17.3544 11.3618 17.2473 11.2045 17.0899C11.0472 16.9326 10.94 16.7321 10.8966 16.5139C10.8532 16.2957 10.8755 16.0695 10.9606 15.8639C11.0458 15.6583 11.19 15.4826 11.375 15.359C11.56 15.2354 11.7775 15.1694 12 15.1694C12.2984 15.1694 12.5845 15.288 12.7955 15.4989C13.0065 15.7099 13.125 15.9961 13.125 16.2944Z"
            fill="#D32F2F"
          />
        </svg>
      </div>
      <span className={styles.errorText}>Помилка</span>
      <div className={styles.errorMessage}>{message}</div>
    </div>
  );
};

export {
  FieldRoot as Root,
  FieldLabel as Label,
  Input,
  FieldErrorText as ErrorText,
};
export type {
  FieldRootProps,
  FieldLabelProps,
  InputProps,
  FieldErrorTextProps,
};
