import type { SVGProps } from "react";

const SvgShowChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m13.5 13.48-4-4L2 16.99l1.5 1.5 6-6.01 4 4L22 6.92l-1.41-1.41z" />
  </svg>
);

export { SvgShowChart };
