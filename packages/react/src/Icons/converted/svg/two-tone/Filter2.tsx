import type { SVGProps } from "react";

const SvgFilter2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M7 17h14V3H7zm4-6a2 2 0 0 1 2-2h2V7h-4V5h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4v2h-6z"
      opacity={0.3}
    />
    <path d="M17 13h-4v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4v2h4v2h-2a2 2 0 0 0-2 2v4h6zm4-12H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14zM1 21c0 1.1.9 2 2 2h16v-2H3V5H1z" />
  </svg>
);

export { SvgFilter2 };
