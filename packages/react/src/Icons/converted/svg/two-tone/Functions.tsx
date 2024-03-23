import type { SVGProps } from "react";

const SvgFunctions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z" />
  </svg>
);

export { SvgFunctions };
