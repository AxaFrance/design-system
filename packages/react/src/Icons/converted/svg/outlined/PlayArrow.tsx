import type { SVGProps } from "react";

const SvgPlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 8.64 15.27 12 10 15.36zM8 5v14l11-7z" />
  </svg>
);

export { SvgPlayArrow };
