import type { SVGProps } from "react";

const SvgHorizontalDistribute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 22H2V2h2zM22 2h-2v20h2zm-8.5 5h-3v10h3z" />
  </svg>
);

export { SvgHorizontalDistribute };
