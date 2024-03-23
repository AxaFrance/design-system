import type { SVGProps } from "react";

const SvgVerticalShades = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 19V3H4v16H2v2h20v-2zM14 5v14h-4V5zM6 5h2v14H6zm10 14V5h2v14z" />
  </svg>
);

export { SvgVerticalShades };
