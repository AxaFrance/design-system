import type { SVGProps } from "react";

const SvgDoorFront = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 19V3H5v16H3v2h18v-2zm-4-6h-2v-2h2z" />
  </svg>
);

export { SvgDoorFront };
