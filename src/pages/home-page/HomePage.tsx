import { type FC, } from "react";
import styles from "./HomePage.module.css";
import { HeroSection } from "./sections/hero-section/HeroSection";
import { AboutSection } from "./sections/about/AboutSection";
import { StatsSection } from "./sections/stats/StatsSection";
import { ReviewsSection } from "./sections/reviews/ReviewsSection";
import { FeaturesSection } from "./sections/work/FeaturesSection";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = (props) => {
  const {} = props;

  return (
    <main>
      <div className={styles.wrapper}>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <FeaturesSection />
        <ReviewsSection />
      </div>
    </main>
  );
};
