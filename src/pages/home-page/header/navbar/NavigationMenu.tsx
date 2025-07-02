import { useLocation } from "react-router";
import * as NavMenu from "../../../../shared/ui/nav-menu";
import type { NavMenuItem } from "../../../../shared/ui/nav-menu/NavMenu";
import type { FC } from "react";


interface NavigationMenuProps {
  navMenuItems: NavMenuItem[];
  onClick: (href: string) => void;
}

export const NavigationMenu: FC<NavigationMenuProps> = ({
  navMenuItems,
  onClick,
}) => {
  const location = useLocation();
  const isLinkActive = (href: string) => {
    return location.hash === href;
  };

  return (
    <NavMenu.Root>
      {navMenuItems.map(({ title, href }, index) => {
        return (
          <NavMenu.Item key={index}>
            <NavMenu.Link
              href={href}
              active={isLinkActive(href)}
              onClick={() => onClick(href)}
            >
              {title}
            </NavMenu.Link>
          </NavMenu.Item>
        );
      })}
    </NavMenu.Root>
  );
};
