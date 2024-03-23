import type { SVGProps } from "react";

const SvgSwitchVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 9.5V5H2v14h16v-4.5l4 4v-13zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5z" />
  </svg>
);

export { SvgSwitchVideo };
