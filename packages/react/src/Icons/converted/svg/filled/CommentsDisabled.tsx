import type { SVGProps } from "react";

const SvgCommentsDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16.83 14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H20c1.1 0 2 .9 2 2v15.17zM2.1 2.1.69 3.51 2 4.83V16c0 1.1.9 2 2 2h11.17l5.31 5.31 1.41-1.41zM6 9h.17l2 2H6zm0 5v-2h3.17l2 2z" />
  </svg>
);

export { SvgCommentsDisabled };
