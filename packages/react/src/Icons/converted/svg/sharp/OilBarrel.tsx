import type { SVGProps } from "react";

const SvgOilBarrel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 13v-2h-2V5h2V3H3v2h2v6H3v2h2v6H3v2h18v-2h-2v-6zm-9 3c-1.66 0-3-1.32-3-2.95 0-1.3.52-1.67 3-4.55 2.47 2.86 3 3.24 3 4.55 0 1.63-1.34 2.95-3 2.95" />
  </svg>
);

export { SvgOilBarrel };
