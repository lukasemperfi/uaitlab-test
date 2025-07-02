import { useCallback } from "react";
import { gsap } from "gsap";

interface ScrollToSectionOptions {
  offset?: number;
  duration?: number;
  ease?: string;
}

export const useScrollToSection = () => {
  const scrollToSection = useCallback(
    (targetId: string, options: ScrollToSectionOptions = {}) => {
      const { offset = 0, duration = 1.2, ease = "power2.inOut" } = options;

      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        console.warn(`Element with id "${targetId}" not found`);
        return;
      }

      // Get the target position
      const targetPosition = targetElement.offsetTop - offset;

      // Smooth scroll to the target
      gsap.to(window, {
        duration,
        scrollTo: { y: targetPosition, autoKill: false },
        ease,
      });
    },
    []
  );

  const scrollToTop = useCallback((options: ScrollToSectionOptions = {}) => {
    const { duration = 1, ease = "power2.inOut" } = options;

    gsap.to(window, {
      duration,
      scrollTo: { y: 0, autoKill: false },
      ease,
    });
  }, []);

  const scrollToElement = useCallback(
    (element: HTMLElement, options: ScrollToSectionOptions = {}) => {
      const { offset = 0, duration = 1.2, ease = "power2.inOut" } = options;

      const targetPosition = element.offsetTop - offset;

      gsap.to(window, {
        duration,
        scrollTo: { y: targetPosition, autoKill: false },
        ease,
      });
    },
    []
  );

  return {
    scrollToSection,
    scrollToTop,
    scrollToElement,
  };
};
