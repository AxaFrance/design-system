import type { SVGProps } from "react";

const SvgViewAgenda = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 13h18v8H3zM3 3h18v8H3z" />
  </svg>
);

export { SvgViewAgenda };
