import type { SVGProps } from "react";

const SvgBorderColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m16.81 8.94-3.75-3.75L4 14.25V18h3.75zM6 16v-.92l7.06-7.06.92.92L6.92 16zM19.71 6.04a.996.996 0 0 0 0-1.41l-2.34-2.34a1.001 1.001 0 0 0-1.41 0l-1.83 1.83 3.75 3.75zM2 20h20v4H2z" />
  </svg>
);

export { SvgBorderColor };
