import { type FC } from "react";
import styles from "./SocialButtons.module.css";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/shared/icons";
import cn from "classnames";
import { Button, type ButtonProps } from "../button";

const socialItems = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com",
    label: "Instagram",
  },
  { icon: FacebookIcon, href: "https://www.facebook.com", label: "Facebook" },
  { icon: TikTokIcon, href: "https://www.tiktok.com", label: "TikTok" },
  { icon: YouTubeIcon, href: "https://www.youtube.com", label: "YouTube" },
];

interface SocialButtonsProps extends ButtonProps {}

export const SocialButtons: FC<SocialButtonsProps> = (props) => {
  const { variant = "secondary", color = "blue", ...rest } = props;
  return (
    <div className={styles.socialButtons}>
      {socialItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Button
            asChild
            key={index}
            className={styles.button}
            variant={variant}
            color={color}
            {...rest}
          >
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              <Icon />
            </a>
          </Button>
        );
      })}
    </div>
  );
};
