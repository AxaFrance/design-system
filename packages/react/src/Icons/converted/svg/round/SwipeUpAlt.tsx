import type { SVGProps } from "react";

const SvgSwipeUpAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m13 5.41.88.88a.996.996 0 1 0 1.41-1.41L12.7 2.29a.996.996 0 0 0-1.41 0L8.71 4.88a.996.996 0 1 0 1.41 1.41l.88-.88v4.27a5 5 0 1 0 2 0z" />
  </svg>
);

export { SvgSwipeUpAlt };
