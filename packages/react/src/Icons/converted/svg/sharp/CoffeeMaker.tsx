import type { SVGProps } from "react";

const SvgCoffeeMaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 7V4h2V2H4v20h16v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v3z" />
    <circle cx={13} cy={9} r={1} />
  </svg>
);

export { SvgCoffeeMaker };
