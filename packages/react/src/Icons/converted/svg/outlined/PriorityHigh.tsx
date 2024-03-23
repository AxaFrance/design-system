import type { SVGProps } from "react";

const SvgPriorityHigh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={12} cy={19} r={2} />
    <path d="M10 3h4v12h-4z" />
  </svg>
);

export { SvgPriorityHigh };
