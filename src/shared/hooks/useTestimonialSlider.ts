import { useRef, useState, useEffect } from "react";
import { type Swiper as SwiperType } from "swiper";

export function useTestimonialSlider(testimonialData: { id: number }[]) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex);
    const progressPercent =
      ((swiper.realIndex + 1) / testimonialData.length) * 100;
    setProgress(progressPercent);
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  useEffect(() => {
    setProgress((1 / testimonialData.length) * 100);
  }, [testimonialData.length]);

  return {
    swiperRef,
    currentSlide,
    progress,
    handlePrevClick,
    handleNextClick,
    handleSlideChange,
    goToSlide,
  };
}
