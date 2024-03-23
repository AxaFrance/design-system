import type { SVGProps } from "react";

const SvgPowerInput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 9v2h19V9zm0 6h5v-2H2zm7 0h5v-2H9zm7 0h5v-2h-5z" />
  </svg>
);

export { SvgPowerInput };
