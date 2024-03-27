import type { SVGProps } from "react";

const SvgSsidChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 5.47 12 12 7.62 7.62 3 11V8.52L7.83 5l4.38 4.38L21 3zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2 6.2 6 5-4h4z" />
  </svg>
);

export { SvgSsidChart };
