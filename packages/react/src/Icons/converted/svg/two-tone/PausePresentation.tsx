import type { SVGProps } from "react";

const SvgPausePresentation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 19h18V5H3zM13 8h2v8h-2zM9 8h2v8H9z" opacity={0.3} />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z" />
  </svg>
);

export { SvgPausePresentation };
