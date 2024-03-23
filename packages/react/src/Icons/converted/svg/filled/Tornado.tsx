import type { SVGProps } from "react";

const SvgTornado = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20.11 8 23 3H1l2.89 5zM7.95 15 12 22l4.05-7zM18.95 10H5.05l1.74 3h10.42z" />
  </svg>
);

export { SvgTornado };
