import { type FC } from "react";
import styles from "./HeroSection.module.css";
import { PageSection } from "../../../../shared/ui/page-section";
import { LinkArrowIcon } from "../../../../shared/icons/LinkArrowIcon";
import image375 from "./images/image-375.jpg";
import image768 from "./images/image-768.jpg";
import image1024 from "./images/image-1024.jpg";
import image1440 from "./images/image-1440.jpg";
import image1920 from "./images/image-1920.jpg";

interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = (props) => {
  const {} = props;
  return (
    <PageSection.Root className={styles.root}>
      <PageSection.ContainerOuter>
        <PageSection.SectionWrapper className={styles.wrapper}>
          <PageSection.ContainerInner className={styles.containerInner}>
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <h1 className={styles.title}>
                  Технології у тилу – сила на передовій
                </h1>
              </div>
              <div className={styles.contentActions}>
                <PageSection.Button color="blue" size="md" justify="between">
                  <span>Підтримати ТАКО</span>
                  <LinkArrowIcon className={styles.buttonIcon} />
                </PageSection.Button>
              </div>

              <picture>
                <source media="(min-width: 1920px)" srcSet={image1920} />
                <source media="(min-width: 1440px)" srcSet={image1440} />
                <source media="(min-width: 1024px)" srcSet={image1024} />
                <source media="(min-width: 768px)" srcSet={image768} />
                <img
                  src={image375}
                  alt="Hero Section"
                  className={styles.heroImage}
                />
              </picture>
            </div>
          </PageSection.ContainerInner>
        </PageSection.SectionWrapper>
      </PageSection.ContainerOuter>
    </PageSection.Root>
  );
};
