import type { SVGProps } from "react";

const SvgPlayDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0zm11.75 11.47-.11-.11z" />
    <path d="M8 5.19V5l11 7-2.55 1.63zm12 14.54-5.11-5.11L8 7.73 4.27 4 3 5.27l5 5V19l5.33-3.4 5.4 5.4z" />
  </svg>
);

export { SvgPlayDisabled };
