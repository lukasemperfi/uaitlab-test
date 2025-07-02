import { Button } from "../../../../shared/ui/button";
import { Navbar } from "../../../../shared/ui/navbar";
import {
  BurgerButton,
  Logo,
  NavbarItem,
} from "../../../../shared/ui/navbar/Navbar";
import { useState, type FC, type ComponentProps } from "react";
import styles from "./HomePageNavbar.module.css";
import cn from "classnames";
import { CaretDownIcon } from "../../../../shared/icons/CaretDownIcon";
import { CloseIcon } from "../../../../shared/icons/CloseIcon";
import { useScrollLock } from "../../../../shared/hooks/useScrollLock";
import { DecoratedFrame } from "../../../../shared/ui/decorated-frame";
import {
  categoryImage1,
  categoryImage2,
  categoryImage3,
  categoryImage4,
  categoryImage5,
} from "./images";
import { LinkArrowIcon } from "../../../../shared/icons/LinkArrowIcon";
import { Link } from "react-router";
import { SocialButtons } from "../../../../shared/ui/social-buttons/SocialButtons";
import { Portal } from "@radix-ui/react-portal";
import { NavigationMenu } from "./NavigationMenu";
import { BackpackIcon } from "../../../../shared/icons/BackpackIcon";
import type { NavMenuItem } from "../../../../shared/ui/nav-menu/NavMenu";

export const navMenuItems: NavMenuItem[] = [
  {
    title: "Про нас",
    href: "#about",
  },
  {
    title: "Ми у цифрах",
    href: "/#stats",
  },
  {
    title: "Як ми працюємо",
    href: "/#features",
  },
  {
    title: "Відгуки",
    href: "/#reviews",
  },
];

export const categoryMenuItems = [
  {
    title: "Для зброї",
    image: categoryImage1,
    href: "#",
  },
  {
    title: "Медицина",
    image: categoryImage2,
    href: "#",
  },
  {
    title: "Для рацій",
    image: categoryImage3,
    href: "#",
  },
  {
    title: "РЕБ / РЕР",
    image: categoryImage4,
    href: "#",
  },
  {
    title: "Для дронів",
    image: categoryImage5,
    href: "#",
  },
];

interface HomePageNavbarProps {}

export const HomePageNavbar: FC<HomePageNavbarProps> = (props) => {
  const {} = props;
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen((prev) => !prev);
  };

  const handleCloseCategoryMenu = () => {
    setIsCategoryMenuOpen(false);
  };

  const toggleNavMenu = () => {
    setIsNavMenuOpen((prev) => !prev);
  };

  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  useScrollLock(isCategoryMenuOpen);
  useScrollLock(isNavMenuOpen);

  return (
    <div className={styles.navbarContainer}>
      <Navbar className={styles["navbar"]}>
        <NavbarItem style={{ display: "flex", gap: "0", alignItems: "center" }}>
          <BurgerButton className={styles.menuButton} onClick={toggleNavMenu} />
          {/* MobileMenu */}
          {isNavMenuOpen && (
            <Portal>
              <div className={styles.mobileMenuWrapper}>
                <div className={styles.overlay} onClick={closeNavMenu} />
                <div className={styles.mobileMenuContainer}>
                  <div className={styles.mobileMenuInnerWrapper}>
                    <div className={styles.mobileMenuItem}>
                      <div className={styles.categoryMenuMobileTitle}>
                        Вироби
                      </div>
                      <div className={styles.categoryMenuMobileList}>
                        {categoryMenuItems.map(({ title }, index) => {
                          return (
                            <CategoryCardLink
                              title={title}
                              className={styles.categoryMenuMobileCardLink}
                              key={index}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className={styles.mobileMenuItem}>
                      <NavigationMenu
                        navMenuItems={navMenuItems}
                        onClick={closeNavMenu}
                      />
                    </div>
                    <div className={styles.mobileMenuItem}>
                      <div className={styles.mobileMenuContact}>
                        <SocialButtons />
                        <Button color="blue" asChild>
                          <Link to="#">Зв'язатися</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Portal>
          )}

          <Logo />
          <div className={cn(styles.menu)}>
            <Button
              className={cn(styles.button, styles.categoryMenuButton)}
              color="blue"
              onClick={toggleCategoryMenu}
            >
              Вироби
              {isCategoryMenuOpen ? <CloseIcon /> : <CaretDownIcon />}
            </Button>
            {/* CategoryDesktopMenu */}
            {isCategoryMenuOpen && (
              <Portal>
                <div className={styles.categoryMenuWrapper}>
                  <div
                    className={styles.overlay}
                    onClick={handleCloseCategoryMenu}
                  />

                  <div className={styles.categoryMenuDesktop}>
                    <div className={cn(styles.categoryMenuDesktopContainer)}>
                      <div className={styles.categoryMenuDesktopList}>
                        {categoryMenuItems.map(({ title, image }, index) => {
                          return (
                            <div
                              className={styles.categoryMenuDesktopListCol}
                              key={index}
                            >
                              <Link to="/">
                                <div className={styles.categoryCard}>
                                  <div className={styles.categoryCardMedia}>
                                    <DecoratedFrame.Root>
                                      <DecoratedFrame.Overlay
                                        color={
                                          index % 2 === 0 ? "blue" : "gold"
                                        }
                                      />
                                      <DecoratedFrame.Figure
                                        color={
                                          index % 2 === 0 ? "gold" : "white"
                                        }
                                      />

                                      <DecoratedFrame.Image
                                        src={image}
                                        alt="Category"
                                        className={styles.categoryCardImage}
                                      />
                                    </DecoratedFrame.Root>
                                  </div>
                                  <div className={styles.categoryCardActions}>
                                    <CategoryCardLink title={title} />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Portal>
            )}
            <NavigationMenu
              navMenuItems={navMenuItems}
              onClick={closeNavMenu}
            />
          </div>
        </NavbarItem>

        <NavbarItem className={styles.buttonsWrapper}>
          <Button
            variant="secondary"
            className={cn(
              styles.button,
              styles.secondaryButton,
              styles.contactButton
            )}
            asChild
          >
            <Link to="#">Зв'язатися</Link>
          </Button>
          <Button
            variant="secondary"
            className={cn(
              styles.button,
              styles.secondaryButton,
              styles.supportButton
            )}
            asChild
          >
            <Link to="#">Підтримати</Link>
          </Button>
          <Button className={cn(styles.button, styles.preOrderButton)} asChild>
            <Link to="#">
              <BackpackIcon />
              <span className={styles.preOrderText}>Передзамовлення</span>
              <span className={styles.cartCount}>9+</span>
            </Link>
          </Button>
        </NavbarItem>
      </Navbar>
    </div>
  );
};

////////////CategoryLink////////////////

interface CategoryCardLinkProps extends ComponentProps<"div"> {
  title?: string;
}

export const CategoryCardLink: FC<CategoryCardLinkProps> = (props) => {
  const { title, className, ...rest } = props;
  return (
    <div className={cn(styles.categoryCardLink, className)} {...rest}>
      <Link to="#" className={styles.categoryCardLinkTitle}>
        {title}
      </Link>
      <LinkArrowIcon />
    </div>
  );
};
