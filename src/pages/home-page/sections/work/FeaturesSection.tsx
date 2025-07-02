import { type FC, type ReactNode } from "react";
import styles from "./FeaturesSection.module.css";
import { PageSection } from "@/shared/ui/page-section";
import { TestimonialSlider } from "./TestimonialSlider";
import { WorkflowDiagram } from "./WorkflowDiagram";
import { useTestimonialSlider } from "@/shared/hooks";
import { OfferCard, SlideCard, type SlideCardProps } from "./SlideCard";

export interface TestimonialSlide {
  id: number;
  title: string;
  description: string;
  renderElement: (props: SlideCardProps) => ReactNode;
}

const testimonialData: TestimonialSlide[] = [
  {
    id: 0,
    title: "Ознайомитись з пропозиціями",
    description:
      "Перегляньте наш каталог деталей для дронів і зброї, щоб знайти потрібні компоненти. Ми регулярно оновлюємо асортимент відповідно до актуальних потреб фронту.",
    renderElement: (props: SlideCardProps) => <OfferCard {...props} />,
  },

  {
    id: 1,
    title: "Додайте в передзамовлення",
    description:
      "Залиште заявку на передзамовлення і ми повідомимо вас, щойно товар буде доступний до відправки.",
    renderElement: (props: SlideCardProps) => <SlideCard {...props} />,
  },

  {
    id: 2,
    title: "Заповніть форму",
    description:
      "Залиште заявку на передзамовлення і ми повідомимо вас, щойно товар буде доступний до відправки.",
    renderElement: (props: SlideCardProps) => <SlideCard {...props} />,
  },

  {
    id: 3,
    title: "Отримати посилку на НП",
    description:
      "Перевірте посилку – перед відходом відкрийте та переконайтеся, що все на місці.",
    renderElement: (props: SlideCardProps) => <SlideCard {...props} />,
  },

  {
    id: 4,
    title: "Задонатити",
    description:
      "Оберіть спосіб донату – банківський переказ, PayPal, Patreon, криптовалюта або інші варіанти, які пропонує автор/проєкт.",
    renderElement: (props: SlideCardProps) => <SlideCard {...props} />,
  },
];

interface FeaturesSectionProps {}

export const FeaturesSection: FC<FeaturesSectionProps> = (props) => {
  const {} = props;
  const {
    swiperRef,
    currentSlide,
    progress,
    handlePrevClick,
    handleNextClick,
    handleSlideChange,
  } = useTestimonialSlider(testimonialData);

  const handleClick = (slideIndex: number) => {
    swiperRef.current?.slideTo(slideIndex);
  };

  return (
    <PageSection.Root id="features">
      <PageSection.ContainerOuter>
        <PageSection.SectionWrapper className={styles.wrapper}>
          <PageSection.ContainerInner>
            <PageSection.Content className={styles.content}>
              <PageSection.Title className={styles.title}>
                Як ми працюємо?
              </PageSection.Title>
              <PageSection.Separator className={styles.separator} />
              <div className={styles.features}>
                <div className={styles.col1}>
                  <div className={styles.developmentAndTest}>
                    <div className={styles.developmentAndTestContent}>
                      <h3 className={styles.developmentAndTestTitle}>
                        Розробка та тестування
                      </h3>
                      <p className={styles.developmentAndTestDescription}>
                        Створюємо прототипи, випробовуємо їх у реальних умовах і
                        вдосконалюємо до ідеального стану.
                      </p>
                    </div>

                    <WorkflowDiagram
                      handleClick={handleClick}
                      currentIndex={currentSlide}
                    />
                  </div>
                </div>
                <div className={styles.col2}>
                  <TestimonialSlider
                    swiperRef={swiperRef}
                    handlePrevClick={handlePrevClick}
                    handleNextClick={handleNextClick}
                    handleSlideChange={handleSlideChange}
                    testimonialData={testimonialData}
                    progress={progress}
                  />
                </div>
              </div>
            </PageSection.Content>
          </PageSection.ContainerInner>
        </PageSection.SectionWrapper>
      </PageSection.ContainerOuter>
    </PageSection.Root>
  );
};
