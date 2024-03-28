import type { SVGProps } from "react";

const SvgPlayDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 12.83v2.53l1.55-.99z" opacity={0.3} />
    <path d="M2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41zM10 15.36v-2.53l1.55 1.55zM19 12 8 5v.17l8.45 8.45z" />
  </svg>
);

export { SvgPlayDisabled };
