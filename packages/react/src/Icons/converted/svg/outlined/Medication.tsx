import type { SVGProps } from "react";

const SvgMedication = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10.5 15H8v-3h2.5V9.5h3V12H16v3h-2.5v2.5h-3zM19 8v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2m-2 0H7v11h10zm1-5H6v2h12z" />
  </svg>
);

export { SvgMedication };
