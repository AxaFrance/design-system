import type { SVGProps } from "react";

const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m15.96 10.29-2.75 3.54-1.96-2.36L8.5 15h11zM3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14z" />
  </svg>
);

export { SvgFilter };
