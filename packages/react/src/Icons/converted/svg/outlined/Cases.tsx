import type { SVGProps } from "react";

const SvgCases = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 9H1v11c0 1.11.89 2 2 2h17v-2H3z" />
    <path d="M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14z" />
  </svg>
);

export { SvgCases };
