import type { SVGProps } from "react";

const SvgSportsCricket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.05 12.81 6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15a.996.996 0 0 0 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 0 0 0-1.41M14.341 17.756l1.414-1.414 4.243 4.243-1.414 1.414z" />
    <circle cx={18.5} cy={5.5} r={3.5} />
  </svg>
);

export { SvgSportsCricket };
