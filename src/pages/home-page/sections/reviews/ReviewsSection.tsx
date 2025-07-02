import { type FC } from "react";
import styles from "./ReviewsSection.module.css";
import { PageSection } from "../../../../shared/ui/page-section";
import cn from "classnames";
import { SocialButtons } from "../../../../shared/ui/social-buttons/SocialButtons";
import { DecoratedFrame } from "../../../../shared/ui/decorated-frame";
//
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import image1 from "./images/image-1.jpg";
import image2 from "./images/image-2.jpg";

import "swiper/css";
import "swiper/css/navigation";

import { useTestimonialSlider } from "../../../../shared/hooks";
import { CaretRightIcon } from "../../../../shared/icons/CaretRightIcon";
import { CaretLeftIcon } from "../../../../shared/icons/CaretLeftIcon";
import { PlayIcon } from "../../../../shared/icons/PlayIcon";
import { Button } from "../../../../shared/ui/button";

interface ReviewsSectionProps {}

export const ReviewsSection: FC<ReviewsSectionProps> = (props) => {
  const {} = props;
  return (
    <PageSection.Root id="reviews">
      <PageSection.ContainerOuter>
        <PageSection.SectionWrapper className={styles.wrapper}>
          <PageSection.ContainerInner>
            <PageSection.Content className={styles.content}>
              <DecoratedFrame.Root
                backgroundColor="dark"
                className={styles.decoratedFrame}
              >
                <div className={styles.headerTitle}>
                  <PageSection.Title className={styles.title}>
                    Відгуки про все
                  </PageSection.Title>
                </div>
                <div className={styles.headerBody}>
                  <div className={styles.headerBodyItems}>
                    <div className={styles.headerBodyItem}>
                      <PageSection.Paragraph className={styles.paragraph}>
                        Слідкуйте за нами у Facebook та Instagram, щоб бути в
                        курсі всіх оновлень, бачити нашу діяльність у дії та
                        разом наближати перемогу! 💙💛
                      </PageSection.Paragraph>
                    </div>
                    <div className={styles.headerBodyItem}>
                      <SocialButtons
                        variant="primary"
                        className={styles.socialButtons}
                      />
                    </div>
                  </div>
                </div>
              </DecoratedFrame.Root>
              <div>
                <ReviewSlider />
              </div>
            </PageSection.Content>
          </PageSection.ContainerInner>
        </PageSection.SectionWrapper>
      </PageSection.ContainerOuter>
    </PageSection.Root>
  );
};

const reviewSlides = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image1 },
  { id: 4, image: image2 },
  { id: 5, image: image1 },
];

const ReviewSlider = () => {
  const {
    swiperRef,
    progress,
    handlePrevClick,
    handleNextClick,
    handleSlideChange,
  } = useTestimonialSlider(reviewSlides);
  return (
    <div>
      <Swiper
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={16}
        slidesPerView={3}
        loop
        speed={400}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={handleSlideChange}
      >
        {reviewSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.item}>
              <div className={styles.imageContainer}>
                <img
                  src={slide.image}
                  alt="review"
                  className={styles.image}
                  loading="lazy"
                />
                <Button color="blue" className={styles.playButton}>
                  <PlayIcon />
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navBlock}>
        <div className={styles.navButtons}>
          <PageSection.Button
            size="xs"
            variant="secondary"
            className={cn(styles.navButton, styles.prevButton)}
            onClick={handlePrevClick}
          >
            <CaretLeftIcon /> Назад
          </PageSection.Button>
          <PageSection.Button
            size="xs"
            className={cn(styles.navButton, styles.nextButton)}
            onClick={handleNextClick}
          >
            Вперед <CaretRightIcon className={styles.nextButtonIcon} />
          </PageSection.Button>
        </div>
        <div className={styles.customProgressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
