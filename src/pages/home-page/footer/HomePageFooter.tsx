import { type FC } from "react";
import styles from "./HomePageFooter.module.css";
import { PageSection } from "../../../shared/ui/page-section";
import logo from "../../../assets/icons/logo-horizontal-white.svg";
import { SocialButtons } from "../../../shared/ui/social-buttons/SocialButtons";
import { Button } from "../../../shared/ui/button";
import { Link } from "react-router";
import cn from "classnames";
import { categoryMenuItems } from "../header/navbar/HomePageNavbar";
import { navMenuItems } from "../header/navbar/NavigationMenu";

interface HomePageFooterProps {}

export const HomePageFooter: FC<HomePageFooterProps> = (props) => {
  const {} = props;
  return (
    <footer className={styles.root}>
      <PageSection.ContainerOuter>
        <PageSection.SectionWrapper className={styles.wrapper}>
          <PageSection.ContainerInner>
            <PageSection.Content className={styles.content}>
              <div className={styles.items}>
                <div className={cn(styles.item, styles.item1)}>
                  <div className={styles.logoWrapper}>
                    <img src={logo} alt="Logo" className={styles.logoImg} />

                    <PageSection.Paragraph
                      color="white"
                      className={styles.paragraph}
                    >
                      Розвивайте технології разом із нами — обирайте якісні
                      рішення, підтримуйте виробництво та рухайте індустрію
                      вперед!
                    </PageSection.Paragraph>
                  </div>
                </div>
                <div className={cn(styles.item, styles.item2)}>
                  <div className={styles.contacts}>
                    <SocialButtons variant="primary" />
                    <Button variant="secondary" color="white">
                      example@mail.com
                    </Button>
                  </div>
                </div>
                <div className={cn(styles.item, styles.item3)}>
                  <div className={styles.navBlock}>
                    <nav>
                      <ul className={styles.navMenuRoot}>
                        {navMenuItems.map(({ title, href }, index) => {
                          return (
                            <li key={index} className={styles.navMenuItem}>
                              <Link to={href} className={styles.navMenuLink}>
                                {title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                    <nav>
                      <ul className={styles.navMenuRoot}>
                        {categoryMenuItems.map(({ title, href }, index) => {
                          return (
                            <li key={index} className={styles.navMenuItem}>
                              <Link to={href} className={styles.navMenuLink}>
                                {title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <PageSection.Separator className={styles.separator} />
              <div className={styles.copyright}>
                <PageSection.Paragraph>
                  © 2025 TAKO. All rights reserved
                </PageSection.Paragraph>
              </div>
            </PageSection.Content>
          </PageSection.ContainerInner>
        </PageSection.SectionWrapper>
      </PageSection.ContainerOuter>
    </footer>
  );
};
