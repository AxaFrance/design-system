import type { SVGProps } from "react";

const SvgCastConnected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" />
    <path d="M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19zM1 10v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11m22-7H1v5h2V5h18v14h-7v2h9z" />
  </svg>
);

export { SvgCastConnected };
