import { type FC } from "react";
import styles from "./StatsSection.module.css";
import { PageSection } from "../../../../shared/ui/page-section";
import cn from "classnames";
import { LinkArrowIcon } from "../../../../shared/icons/LinkArrowIcon";
import { DecoratedFrame } from "../../../../shared/ui/decorated-frame";

import sendedImage from "./images/image-1.png";
import spendedImage from "./images/image-2.png";
import donationImage from "./images/image-3.png";

type StatsItem = {
  id: number;
  quantity: number | null;
  unit: string;
  label: string;
  backgroundColor: DecoratedFrame.DecoratedFrameProps["backgroundColor"];
  figure: boolean;
  image: string | null;
};

const statsItems: StatsItem[] = [
  {
    id: 1,
    quantity: null,
    unit: "",
    label: "",
    backgroundColor: "blue",
    figure: true,
    image: null,
  },
  {
    id: 2,
    quantity: 10043,
    unit: "од",
    label: "Виробів відправлено",
    backgroundColor: "dark",
    figure: false,
    image: sendedImage,
  },
  {
    id: 3,
    quantity: 432100,
    unit: "грн",
    label: "Витрачено на виготовлення",
    backgroundColor: "lightGray",
    figure: false,
    image: spendedImage,
  },
  {
    id: 4,
    quantity: 173213,
    unit: "грн",
    label: "Отримано донатами",
    backgroundColor: "lightGray",
    figure: false,
    image: donationImage,
  },
  {
    id: 5,
    quantity: 730,
    unit: "км",
    label: "Пластикової нитки перетворено на допомогу",
    backgroundColor: "lightGray",
    figure: false,
    image: null,
  },
  {
    id: 6,
    quantity: 90000,
    unit: "од",
    label: "Посилок відправлено",
    backgroundColor: "lightGray",
    figure: false,
    image: null,
  },

  {
    id: 7,
    quantity: 8760,
    unit: "год",
    label: "Людської праці вкладено (і це лише початок!",
    backgroundColor: "lightGray",
    figure: false,
    image: null,
  },
];

interface StatsSectionProps {}

export const StatsSection: FC<StatsSectionProps> = (props) => {
  const {} = props;
  return (
    <PageSection.Root id="stats">
      <PageSection.ContainerOuter>
        <PageSection.SectionWrapper className={styles.wrapper}>
          <PageSection.ContainerInner>
            <PageSection.Content>
              <div className={styles.header}>
                <div className={styles.headerCol1}>
                  <PageSection.Title>Ми у цифрах</PageSection.Title>
                </div>
                <div className={styles.headerCol2}>
                  <PageSection.Paragraph>
                    За кожною цифрою – історія. За кожним виробом – врятоване
                    життя, збережене обладнання або виконане бойове завдання.
                  </PageSection.Paragraph>
                </div>
              </div>

              <div className={cn(styles.grid)}>
                {statsItems.map((item, index) => {
                  const {
                    id,
                    quantity,
                    unit,
                    label,
                    backgroundColor,
                    figure,
                    image,
                  } = item;
                  return (
                    <div
                      className={cn(styles.item, styles[`item${index + 1}`])}
                      key={id}
                    >
                      <DecoratedFrame.Root
                        backgroundColor={backgroundColor}
                        className={styles.root}
                      >
                        {figure && <DecoratedFrame.Figure color="gold" />}
                        <div className={styles.textWrapper}>
                          <div
                            className={styles.quantity}
                            style={{ color: id === 2 ? "white" : "" }}
                          >
                            {quantity !== null && (
                              <>
                                <span> {formatNumber(quantity)}</span>
                                <span className={styles.unit}>{unit}</span>
                              </>
                            )}
                          </div>
                          <div className={styles.label}>{label}</div>
                        </div>
                      </DecoratedFrame.Root>
                      {image && (
                        <img src={image} alt="label" className={styles.image} />
                      )}
                    </div>
                  );
                })}
              </div>
              <PageSection.Button>
                Збільшити цифри
                <LinkArrowIcon />
              </PageSection.Button>
            </PageSection.Content>
          </PageSection.ContainerInner>
        </PageSection.SectionWrapper>
      </PageSection.ContainerOuter>
    </PageSection.Root>
  );
};

export const formatNumber = (value: number | string) =>
  new Intl.NumberFormat("uk-UA").format(Number(value));
