import type { SVGProps } from "react";

const SvgPermMedia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 12H6V4h5.17l1.41 1.41.59.59H22z" />
  </svg>
);

export { SvgPermMedia };
