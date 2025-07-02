import { useLocation } from "react-router";
import * as NavMenu from "@/shared/ui/nav-menu";
import type { NavMenuItem } from "@/shared/ui/nav-menu/NavMenu";

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

export const NavigationMenu = () => {
  const location = useLocation();
  const isLinkActive = (href: string) => {
    return location.hash === href;
  };

  return (
    <NavMenu.Root>
      {navMenuItems.map(({ title, href }, index) => {
        return (
          <NavMenu.Item key={index}>
            <NavMenu.Link href={href} active={isLinkActive(href)}>
              {title}
            </NavMenu.Link>
          </NavMenu.Item>
        );
      })}
    </NavMenu.Root>
  );
};
