import * as React from "react";

export const CloseIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#fff"
      d="M16.067 15.183a.625.625 0 1 1-.884.884L10 10.884l-5.183 5.183a.626.626 0 0 1-.884-.884L9.116 10 3.933 4.817a.625.625 0 0 1 .884-.884L10 9.116l5.183-5.183a.625.625 0 1 1 .884.884L10.884 10z"
    ></path>
  </svg>
);
