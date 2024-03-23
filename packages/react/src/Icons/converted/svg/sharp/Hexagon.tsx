import type { SVGProps } from "react";

const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z" />
  </svg>
);

export { SvgHexagon };
