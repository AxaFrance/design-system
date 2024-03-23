import type { SVGProps } from "react";

const SvgCoffee = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18.5 3H4v8c0 3.87 3.13 7 7 7s7-3.13 7-7v-1h.4c1.67 0 3.19-1.13 3.52-2.77A3.494 3.494 0 0 0 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M4 19h16v2H4z" />
  </svg>
);

export { SvgCoffee };
