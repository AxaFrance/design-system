import type { SVGProps } from "react";

const SvgFilterBAndW = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3v18h18zm-2 16-7-8v8H5l7-8V5h7z" />
  </svg>
);

export { SvgFilterBAndW };
