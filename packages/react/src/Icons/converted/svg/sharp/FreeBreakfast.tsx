import type { SVGProps } from "react";

const SvgFreeBreakfast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 3H4v14h14v-7h2a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2zM4 19h16v2H4z" />
  </svg>
);

export { SvgFreeBreakfast };
