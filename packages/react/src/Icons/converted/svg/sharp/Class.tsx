import type { SVGProps } from "react";

const SvgClass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 2H4v20h16zM6 4h5v8l-2.5-1.5L6 12z" />
  </svg>
);

export { SvgClass };
