import type { FC } from "react";

export const LinkArrowIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M7 21 21 7M7 7.001h14V21"
    ></path>
  </svg>
);
