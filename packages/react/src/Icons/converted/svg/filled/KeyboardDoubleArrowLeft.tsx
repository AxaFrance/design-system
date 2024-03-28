import type { SVGProps } from "react";

const SvgKeyboardDoubleArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" />
    <path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
  </svg>
);

export { SvgKeyboardDoubleArrowLeft };
