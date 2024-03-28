import type { SVGProps } from "react";

const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 4H1v16h21.99zm-4 14H5V6h14z" />
  </svg>
);

export { SvgTablet };
