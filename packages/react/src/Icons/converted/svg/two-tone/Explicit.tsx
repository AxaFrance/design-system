import type { SVGProps } from "react";

const SvgExplicit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 19h14V5H5zM9 7h6v2h-4v2h4v2h-4v2h4v2H9z" opacity={0.3} />
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-2 0H5V5h14zm-4-4h-4v-2h4v-2h-4V9h4V7H9v10h6z" />
  </svg>
);

export { SvgExplicit };
