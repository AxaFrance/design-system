import type { SVGProps } from "react";

const SvgMailOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 4H2.01L2 20h20zm-2 14H4V8l8 5 8-5zm-8-7L4 6h16z" />
  </svg>
);

export { SvgMailOutline };
