import type { SVGProps } from "react";

const SvgElectricMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2c-4.96 0-9 4.04-9 9 0 3.91 2.51 7.24 6 8.47V22h2v-2.06a8.3 8.3 0 0 0 2 0V22h2v-2.53c3.49-1.24 6-4.57 6-8.47 0-4.96-4.04-9-9-9m2.25 12-3 3-1.5-1.5L11 14.25 9.75 13l3-3 1.5 1.5L13 12.75zM16 9H8V7h8z" />
  </svg>
);

export { SvgElectricMeter };
