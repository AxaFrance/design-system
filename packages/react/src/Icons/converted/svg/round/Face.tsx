import type { SVGProps } from "react";

const SvgFace = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10.25 13a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10m-2 0c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24a10 10 0 0 1-7.76-3.69A10.02 10.02 0 0 1 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8" />
  </svg>
);

export { SvgFace };
