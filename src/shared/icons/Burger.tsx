import type { FC, SVGProps } from "react";

export const BurgerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#1C2F43"
      d="M28 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1M5 9h22a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2m22 14H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2"
    ></path>
  </svg>
);
