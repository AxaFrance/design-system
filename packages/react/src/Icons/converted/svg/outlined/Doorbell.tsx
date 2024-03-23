import type { SVGProps } from "react";

const SvgDoorbell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 16.5h2c0 .55-.45 1-1 1s-1-.45-1-1m4-1.5v-2.34c0-1.54-.81-2.82-2.25-3.16v-.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.25C9.82 9.84 9 11.12 9 12.66V15H8v1h8v-1zm-3-9.5L6 10v9h12v-9zM12 3l8 6v12H4V9z" />
  </svg>
);

export { SvgDoorbell };
