import type { SVGProps } from "react";

const SvgEscalator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3v18h18zm-2.5 6h-3.2l-5 9H5.5v-3h3.2l5-9h4.8z" />
  </svg>
);

export { SvgEscalator };
