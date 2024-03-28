import type { SVGProps } from "react";

const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m14.5 11-3 6v-4h-2l3-6v4zM5 1h14v22H5zm2 5v12h10V6z" />
  </svg>
);

export { SvgChargingStation };
