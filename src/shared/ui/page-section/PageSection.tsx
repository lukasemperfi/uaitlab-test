import { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./PageSection.module.css";
import cn from "classnames";
import {
  Button as MainButton,
  type ButtonProps as MainButtonProps,
} from "../button";

interface PageSectionProps extends ComponentProps<"section"> {
  children: ReactNode;
  className?: string;
}

interface ContainerOuterProps {
  children: ReactNode;
  className?: string;
}
interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}
interface ContainerInnerProps {
  children: ReactNode;
  className?: string;
}

interface ContentProps {
  children: ReactNode;
  className?: string;
}

interface TitleProps {
  children: ReactNode;
  className?: string;
}

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  color?: "white" | "lightGray";
}

interface ButtonProps extends MainButtonProps {
  children: ReactNode;
}

interface SeparatorProps {
  className?: string;
}

const Root: FC<PageSectionProps> = ({ children, className = "", ...rest }) => (
  <section className={cn(styles.section, className)} {...rest}>
    {children}
  </section>
);

const ContainerOuter: FC<ContainerOuterProps> = ({
  children,
  className = "",
}) => <div className={cn(styles.containerOuter, className)}>{children}</div>;

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  className = "",
}) => <div className={cn(styles.sectionWrapper, className)}>{children}</div>;

const ContainerInner: FC<ContainerInnerProps> = ({
  children,
  className = "",
}) => <div className={cn(styles.containerInner, className)}>{children}</div>;

const Content: FC<ContentProps> = ({ children, className = "" }) => (
  <div className={cn(styles.content, className)}>{children}</div>
);

const Title: FC<TitleProps> = ({ children, className = "" }) => (
  <h2 className={cn(styles.title, className)}>{children}</h2>
);

const Paragraph: FC<ParagraphProps> = ({
  children,
  className,
  color = "lightGray",
}) => (
  <p className={cn(styles.paragraph, styles[`color-${color}`], className)}>
    {children}
  </p>
);

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => (
  <MainButton
    color="blue"
    size="md"
    justify="between"
    className={cn(styles.button, className)}
    {...rest}
  >
    {children}
  </MainButton>
);

const Separator: FC<SeparatorProps> = ({ className = "" }) => (
  <hr className={cn(styles.separator, className)} />
);

export {
  Root,
  ContainerOuter,
  SectionWrapper,
  ContainerInner,
  Content,
  Title,
  Paragraph,
  Button,
  Separator,
};
