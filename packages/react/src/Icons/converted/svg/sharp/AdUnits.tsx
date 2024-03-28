import type { SVGProps } from "react";

const SvgAdUnits = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 1H5v22h14zm-2 18H7V5h10z" />
    <path d="M8 6h8v2H8z" />
  </svg>
);

export { SvgAdUnits };
