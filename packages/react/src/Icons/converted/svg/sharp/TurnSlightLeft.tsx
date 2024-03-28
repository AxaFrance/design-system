import type { SVGProps } from "react";

const SvgTurnSlightLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-8.41L9.41 6z" />
  </svg>
);

export { SvgTurnSlightLeft };
