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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3" />
    <circle cx={10.5} cy={9} r={0.5} />
    <circle cx={13.5} cy={9} r={0.5} />
    <circle cx={12} cy={9} r={0.5} />
  </svg>
);

export { SvgMonitorWeight };
