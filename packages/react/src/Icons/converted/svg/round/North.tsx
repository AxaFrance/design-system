import type { SVGProps } from "react";

const SvgNorth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5.71 9.7c.39.39 1.02.39 1.41 0L11 5.83V21c0 .55.45 1 1 1s1-.45 1-1V5.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 2.7a.996.996 0 0 0-1.41 0L5.71 8.29a.996.996 0 0 0 0 1.41" />
  </svg>
);

export { SvgNorth };
