import type { SVGProps } from "react";

const SvgNetworkCell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 22h20V2zm18-2h-3V9.83l3-3z" />
  </svg>
);

export { SvgNetworkCell };
