import type { SVGProps } from "react";

const SvgFilter3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 1H5v18h18zm-2 16H7V3h14zM3 5H1v18h18v-2H3zm14 10V5h-6v2h4v2h-2v2h2v2h-4v2z" />
  </svg>
);

export { SvgFilter3 };
