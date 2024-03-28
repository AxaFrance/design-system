import type { SVGProps } from "react";

const SvgViewComfy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 18h10v-5H10zM4 6v5h16V6zm0 12h4v-5H4z" opacity={0.3} />
    <path d="M2 4v16h20V4zm6 14H4v-5h4zm12 0H10v-5h10zm0-7H4V6h16z" />
  </svg>
);

export { SvgViewComfy };
