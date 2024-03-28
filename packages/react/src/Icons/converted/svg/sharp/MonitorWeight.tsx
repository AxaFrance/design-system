import type { SVGProps } from "react";

const SvgMonitorWeight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3v18h18zm-6.8 8.2c-3.23 2.43-6.84-1.18-4.4-4.41 3.23-2.42 6.83 1.19 4.4 4.41" />
    <path d="M10 8.5h1v1h-1zM11.5 8.5h1v1h-1zM13 8.5h1v1h-1z" />
  </svg>
);

export { SvgMonitorWeight };
