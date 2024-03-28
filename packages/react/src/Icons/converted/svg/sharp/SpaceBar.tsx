import type { SVGProps } from "react";

const SvgSpaceBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 9v4H6V9H4v6h16V9z" />
  </svg>
);

export { SvgSpaceBar };
