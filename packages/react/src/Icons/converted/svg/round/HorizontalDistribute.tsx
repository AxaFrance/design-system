import type { SVGProps } from "react";

const SvgHorizontalDistribute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 22c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1s1 .45 1 1v18c0 .55-.45 1-1 1M21 2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1m-9 5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5" />
  </svg>
);

export { SvgHorizontalDistribute };
