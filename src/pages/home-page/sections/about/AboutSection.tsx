import { type FC } from "react";
import styles from "./AboutSection.module.css";
import { PageSection } from "../../../../shared/ui/page-section";
import cn from "classnames";

interface AboutSectionProps {}

export const AboutSection: FC<AboutSectionProps> = (props) => {
  const {} = props;
  return (
    <PageSection.Root id="about">
      <PageSection.ContainerOuter>
        <PageSection.SectionWrapper className={styles.wrapper}>
          <PageSection.ContainerInner>
            <PageSection.Content className={styles.content}>
              <div className={cn(styles.col, styles.contentTitle)}>
                <PageSection.Title>Про нас</PageSection.Title>
              </div>
              <div className={cn(styles.col, styles.contentBody)}>
                <PageSection.Paragraph>
                  <strong className={styles.strong}>
                    Ми – волонтерська ініціатива Tako
                  </strong>
                  , яка займається виробництвом комплектуючих для дронів, зброї
                  та інших важливих рішень для фронту. Використовуючи 3D-друк,
                  ми можемо швидко, точно та дешево виготовляти те, чого бракує
                  нашим захисникам.
                </PageSection.Paragraph>
                <PageSection.Paragraph>
                  <strong className={styles.strong}>
                    Наша місія – максимальна ефективність кожної гривні
                    допомоги.
                  </strong>
                  Ми націлені не на прибуток, а на результат – безперебійну
                  підтримку підрозділів, які боронять Україну.
                </PageSection.Paragraph>
                <PageSection.Paragraph>
                  Усе, що ми робимо, – це результат об’єднання знань, рук та
                  сердець людей, які не можуть стояти осторонь.
                </PageSection.Paragraph>
              </div>
            </PageSection.Content>
          </PageSection.ContainerInner>
        </PageSection.SectionWrapper>
      </PageSection.ContainerOuter>
    </PageSection.Root>
  );
};
