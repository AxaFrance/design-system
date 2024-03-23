import type { SVGProps } from "react";

const SvgFormatColorFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 17.62 17.62 10l-10-10-1.41 1.41 2.38 2.38L2.38 10zm0-12.41L14.79 10H5.21zM19 17c1.1 0 2-.9 2-2 0-1.33-2-3.5-2-3.5s-2 2.17-2 3.5c0 1.1.9 2 2 2M2 20h20v4H2z" />
  </svg>
);

export { SvgFormatColorFill };
