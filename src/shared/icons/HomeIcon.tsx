import type { FC, SVGProps } from "react";

export const HomeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#1C2F43"
      d="M15.096 6.276 8.846.38 8.838.37a1.25 1.25 0 0 0-1.683 0L7.147.38.904 6.276a1.25 1.25 0 0 0-.404.92v7.223a1.25 1.25 0 0 0 1.25 1.25H5.5a1.25 1.25 0 0 0 1.25-1.25v-3.75h2.5v3.75a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25V7.197a1.25 1.25 0 0 0-.404-.92m-.846 8.143H10.5v-3.75a1.25 1.25 0 0 0-1.25-1.25h-2.5a1.25 1.25 0 0 0-1.25 1.25v3.75H1.75V7.197l.009-.008L8 1.294l6.242 5.893.009.008z"
    ></path>
  </svg>
);
