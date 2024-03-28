import type { SVGProps } from "react";

const SvgAirlineSeatIndividualSuite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={7} cy={11} r={1} opacity={0.3} />
    <path d="M19 9h-6v6h8v-4c0-1.1-.9-2-2-2" opacity={0.3} />
    <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m12-3h-8v8H3V7H1v10h22v-6c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z" />
  </svg>
);

export { SvgAirlineSeatIndividualSuite };
