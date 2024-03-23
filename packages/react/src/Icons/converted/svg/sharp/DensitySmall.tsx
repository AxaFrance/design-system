import type { SVGProps } from "react";

const SvgDensitySmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 2h18v2H3zM3 20h18v2H3zM3 14h18v2H3zM3 8h18v2H3z" />
  </svg>
);

export { SvgDensitySmall };
