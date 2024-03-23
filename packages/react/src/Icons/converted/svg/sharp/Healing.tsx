import type { SVGProps } from "react";

const SvgHealing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m17.74 12.01 4.68-4.68-5.75-5.75-4.68 4.68L7.3 1.58 1.55 7.34l4.68 4.69-4.68 4.68 5.75 5.75 4.68-4.68 4.69 4.69 5.76-5.76zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2.66 9.34-3.63-3.62 3.63-3.63 3.62 3.62z" />
  </svg>
);

export { SvgHealing };
