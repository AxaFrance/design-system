import type { SVGProps } from "react";

const SvgBatteryChargingFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 4h-3V2h-4v2H7v18h10zm-6 16v-5.5H9L13 7v5.5h2z" />
  </svg>
);

export { SvgBatteryChargingFull };
