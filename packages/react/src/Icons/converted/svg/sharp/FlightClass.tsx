import type { SVGProps } from "react";

const SvgFlightClass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 4h-6v9h6zM9.5 16H18v2H8L5 8V4h2v4zM8 19h10v2H8z" />
  </svg>
);

export { SvgFlightClass };
