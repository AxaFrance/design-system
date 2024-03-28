import type { SVGProps } from "react";

const SvgSendAndArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5 7.01v3.49l6 1.5-6 1.5v3.49l5.39-2.27a7 7 0 0 1 3.48-3.97z"
      opacity={0.3}
    />
    <path d="m11 12-6-1.5V7.01l8.87 3.73c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5z" />
    <path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8-3-3h2.5v-3h1v3H20z" />
  </svg>
);

export { SvgSendAndArchive };
