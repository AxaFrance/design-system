import type { SVGProps } from "react";

const SvgTransform = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4v-2H8zm10 10V8c0-1.1-.9-2-2-2h-6v2h6v6z" />
  </svg>
);

export { SvgTransform };
