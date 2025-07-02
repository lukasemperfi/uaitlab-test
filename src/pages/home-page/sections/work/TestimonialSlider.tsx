import { type FC } from "react";
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { type Swiper as SwiperType } from "swiper";
import styles from "./TestimonialSlider.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { CaretLeftIcon } from "../../../../shared/icons/CaretLeftIcon";
import type { TestimonialSlide } from "./FeaturesSection";
import { CaretRightIcon } from "../../../../shared/icons/CaretRightIcon";

interface TestimonialSliderProps extends SwiperProps {
  swiperRef: React.RefObject<SwiperType | null>;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  handleSlideChange: (swiper: SwiperType) => void;
  testimonialData: TestimonialSlide[];
  progress: number;
}

export const TestimonialSlider: FC<TestimonialSliderProps> = ({
  swiperRef,
  handlePrevClick,
  handleNextClick,
  handleSlideChange,
  testimonialData,
  progress,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={handleSlideChange}
      className={styles.swiper}
    >
      <SliderNavigation
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      {testimonialData.map((slide) => (
        <SwiperSlide key={slide.id} className={styles.slide}>
          {slide.renderElement({ slide })}
        </SwiperSlide>
      ))}
      <ProgressBar progress={progress} />
    </Swiper>
  );
};

interface SlideNavigationProps {
  handlePrevClick: () => void;
  handleNextClick: () => void;
}
const SliderNavigation: FC<SlideNavigationProps> = ({
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <div className={styles.sliderNavigation}>
      <button
        onClick={handlePrevClick}
        className={styles.navButton}
        aria-label="Previous slide"
      >
        <CaretLeftIcon className={styles.navIcon} />
      </button>
      <button
        onClick={handleNextClick}
        className={styles.navButton}
        aria-label="Next slide"
      >
        <CaretRightIcon className={styles.navIcon} />
      </button>
    </div>
  );
};

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressFill}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
