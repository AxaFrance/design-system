import type { SVGProps } from "react";

const SvgTableRows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z" />
  </svg>
);

export { SvgTableRows };
