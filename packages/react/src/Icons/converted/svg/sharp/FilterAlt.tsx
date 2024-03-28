import type { SVGProps } from "react";

const SvgFilterAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24m0 24H0" />
    <path d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

export { SvgFilterAlt };
