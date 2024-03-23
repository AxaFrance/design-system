import type { SVGProps } from "react";

const SvgWest = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9.7 18.3a.996.996 0 0 0 0-1.41L5.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1H5.83l3.88-3.88A.996.996 0 1 0 8.3 5.71L2.7 11.3a.996.996 0 0 0 0 1.41l5.59 5.59c.39.38 1.03.38 1.41 0" />
  </svg>
);

export { SvgWest };
