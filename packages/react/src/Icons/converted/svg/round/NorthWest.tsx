import type { SVGProps } from "react";

const SvgNorthWest = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 15c.56 0 1-.45 1-1V8.41L17.89 19.3a.996.996 0 1 0 1.41-1.41L8.41 7H14c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1" />
  </svg>
);

export { SvgNorthWest };
