import type { SVGProps } from "react";

const SvgCasino = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z" />
    <circle cx={7.5} cy={16.5} r={1.5} />
    <circle cx={7.5} cy={7.5} r={1.5} />
    <circle cx={12} cy={12} r={1.5} />
    <circle cx={16.5} cy={16.5} r={1.5} />
    <circle cx={16.5} cy={7.5} r={1.5} />
  </svg>
);

export { SvgCasino };
