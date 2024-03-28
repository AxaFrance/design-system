import type { SVGProps } from "react";

const SvgMan4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7.96 7 10 22h4l2.04-15z" />
    <circle cx={12} cy={4} r={2} />
  </svg>
);

export { SvgMan4 };
