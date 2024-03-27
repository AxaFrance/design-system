import type { SVGProps } from "react";

const SvgSouthWest = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10z" />
  </svg>
);

export { SvgSouthWest };
