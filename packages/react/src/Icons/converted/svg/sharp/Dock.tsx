import type { SVGProps } from "react";

const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 23h8v-2H8zM18 1.01 6 1v18h12zM16 15H8V5h8z" />
  </svg>
);

export { SvgDock };
