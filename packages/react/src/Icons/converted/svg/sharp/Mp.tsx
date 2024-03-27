import type { SVGProps } from "react";

const SvgMp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3v18h18zM6 9h6.5v6H11v-4.5h-1v3H8.5v-3h-1V15H6zm9 6h-1.5V9H18v4.5h-3zm0-3h1.5v-1.5H15z" />
  </svg>
);

export { SvgMp };
