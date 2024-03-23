import type { SVGProps } from "react";

const SvgTurnSlightRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-8.41L14.59 6z" />
  </svg>
);

export { SvgTurnSlightRight };
