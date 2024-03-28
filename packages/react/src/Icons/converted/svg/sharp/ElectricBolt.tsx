import type { SVGProps } from "react";

const SvgElectricBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 2 2.5 13 13 14l-5 7 1 1 12.5-11L11 10l5-7z" />
  </svg>
);

export { SvgElectricBolt };
