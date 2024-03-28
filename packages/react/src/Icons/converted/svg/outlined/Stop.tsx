import type { SVGProps } from "react";

const SvgStop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 8v8H8V8zm2-2H6v12h12z" />
  </svg>
);

export { SvgStop };
